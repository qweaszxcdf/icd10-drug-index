const ALLOWED_TYPES = new Set([
  "中文名称错误", "英文名称错误", "中毒编码错误", "意外编码错误",
  "故意自害编码错误", "意图不明编码错误",
  "不良反应编码错误", "层级错误", "缺少词条", "其他",
]);

function json(data, status = 200) {
  return Response.json(data, {
    status,
    headers: { "cache-control": "no-store" },
  });
}

function text(value, maxLength) {
  return String(value ?? "").trim().slice(0, maxLength);
}

function nullableInteger(value) {
  if (value === "" || value === null || value === undefined) return null;
  const number = Number(value);
  return Number.isInteger(number) ? number : null;
}

export async function onRequestPost(context) {
  const { request, env } = context;
  if (!env.DB) return json({ ok: false, error: "D1 数据库未绑定" }, 500);

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 16000) return json({ ok: false, error: "请求内容过大" }, 413);

  let body;
  try { body = await request.json(); } catch {
    return json({ ok: false, error: "请求内容不是有效 JSON" }, 400);
  }

  const feedbackType = text(body.feedbackType, 40);
  const message = text(body.message, 2000);
  const proposedValue = text(body.proposedValue, 500);
  const contact = text(body.contact, 200);
  if (!ALLOWED_TYPES.has(feedbackType)) return json({ ok: false, error: "反馈类型无效" }, 400);
  if (message.length < 5) return json({ ok: false, error: "反馈说明至少需要填写 5 个字符" }, 400);

  const record = body.record ?? {};
  try {
    const result = await env.DB.prepare(`
      INSERT INTO feedback (
        record_index, page, level, name_zh, name_en, poisoning_code,
        accidental_code, self_harm_code, undetermined_code,
        adverse_effect_code, feedback_type, proposed_value, message, contact,
        url, user_agent, type, query
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      nullableInteger(record.index), nullableInteger(record.page), nullableInteger(record.level),
      text(record.name_zh, 500), text(record.name_en, 500),
      text(record.poisoning_chapter19, 100), text(record.accidental, 100),
      text(record.intentional_self_harm, 100),
      text(record.undetermined_intent, 100), text(record.treatment_adverse_effect, 100),
      feedbackType, proposedValue, message, contact, text(body.url, 1000),
      text(request.headers.get("user-agent"), 500),
      feedbackType,
      text([record.name_zh, record.name_en, record.poisoning_chapter19].filter(Boolean).join(" / "), 200),
    ).run();
    return json({ ok: true, id: result.meta?.last_row_id ?? null, message: "反馈已提交" }, 201);
  } catch (error) {
    console.error(JSON.stringify({ event: "feedback_insert_failed", message: String(error) }));
    return json({ ok: false, error: "反馈保存失败" }, 500);
  }
}

export function onRequestGet() {
  return json({ ok: false, error: "Method not allowed" }, 405);
}
