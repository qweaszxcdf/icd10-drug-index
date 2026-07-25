import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { parse } from "csv-parse/sync";

const root = process.cwd();

const templatePath = path.join(
  root,
  "template",
  "index.template.html",
);
const csvPath = path.join(root, "data", "final_rechecked.csv");
const outputDirectory = path.join(root, "dist");
const outputPath = path.join(outputDirectory, "index.html");

const DATA_PLACEHOLDER = "__ICD10_DATA__";

function toNumber(value, fallback = 0) {
  const numericValue = Number(value);
  return Number.isFinite(numericValue) ? numericValue : fallback;
}

function normalizeRows(rows) {
  return rows.map((row, position) => ({
    index: position,
    page: toNumber(row.page, 0),
    level: Math.max(0, toNumber(row.level, 0)),
    name_zh: row.name_zh || "",
    name_en: row.name_en || "",
    poisoning_chapter19: row.poisoning_chapter19 || "",
    accidental: row.accidental || "",
    intentional_self_harm: row.intentional_self_harm || "",
    undetermined_intent: row.undetermined_intent || "",
    treatment_adverse_effect:
      row.treatment_adverse_effect || "",
    codes: row.codes || "",
    parent: null,
    children: [],
  }));
}

function buildHierarchy(records) {
  const lastPositionAtLevel = new Map();

  for (let position = 0; position < records.length; position += 1) {
    const row = records[position];
    let parent = null;

    for (
      let candidateLevel = row.level - 1;
      candidateLevel >= 0;
      candidateLevel -= 1
    ) {
      if (!lastPositionAtLevel.has(candidateLevel)) continue;

      parent = lastPositionAtLevel.get(candidateLevel);
      break;
    }

    row.parent = parent;

    if (parent !== null) {
      records[parent].children.push(position);
    }

    lastPositionAtLevel.set(row.level, position);

    for (const storedLevel of [...lastPositionAtLevel.keys()]) {
      if (storedLevel > row.level) {
        lastPositionAtLevel.delete(storedLevel);
      }
    }
  }

  return records;
}

function serializeForInlineScript(value) {
  return JSON.stringify(value)
    .replace(/</g, "\\u003c")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

async function build() {
  const [template, csvText] = await Promise.all([
    fs.readFile(templatePath, "utf8"),
    fs.readFile(csvPath, "utf8"),
  ]);

  if (!template.includes(DATA_PLACEHOLDER)) {
    throw new Error(
      `模板中未找到占位符：${DATA_PLACEHOLDER}`,
    );
  }

  const parsedRows = parse(csvText, {
    columns: true,
    bom: true,
    skip_empty_lines: true,
    trim: true,
  });

  const records = buildHierarchy(normalizeRows(parsedRows));
  const serializedData = serializeForInlineScript(records);
  const output = template.replace(
    DATA_PLACEHOLDER,
    serializedData,
  );

  await fs.mkdir(outputDirectory, { recursive: true });
  await fs.writeFile(outputPath, output, "utf8");

  const stats = await fs.stat(outputPath);

  console.log(
    `Built ${records.length} records -> ${outputPath}`,
  );
  console.log(
    `Output size: ${(stats.size / 1024 / 1024).toFixed(2)} MiB`,
  );
}

build().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
