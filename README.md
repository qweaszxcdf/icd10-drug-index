# ICD-10 药物和化学制剂表检索 SPA

这是一个单文件、零运行时依赖的静态 SPA。

构建时读取：

```text
data/final_rechecked.csv
```

并将数据注入：

```text
template/index.template.html
```

最终生成：

```text
dist/index.html
```

## 功能

- 中文名称检索
- 英文名称检索
- T / X / Y 编码检索
- 多关键词 AND 检索
- 关键词高亮
- 命中子项时显示完整父级路径
- 命中父项时显示直接子项
- 点击父级或子项继续检索
- 移动端适配
- 深色模式
- `Ctrl+K` / `Command+K` 聚焦检索框

## 本地构建

```bash
npm install
npm run build
```

构建完成后直接打开：

```text
dist/index.html
```

也可以启动本地静态服务器：

```bash
npm run preview
```

## 修改数据

只修改：

```text
data/final_rechecked.csv
```

然后重新执行：

```bash
npm run build
```

不要直接修改 `dist/index.html`，因为每次构建都会覆盖它。

## Cloudflare Pages

### 构建命令

```text
npm run build
```

### 构建输出目录

```text
dist
```

### Node.js 版本

建议使用 Node.js 20 或更高版本。

### 反馈功能

反馈通过 Pages Function `/api/feedback` 写入 Cloudflare D1。首次部署前创建数据库并执行初始化：

```bash
npx wrangler d1 create icd10-drug-search-feedback
npx wrangler d1 execute icd10-drug-search-feedback --remote --file=schema.sql
```

将创建命令输出的 `database_id` 写入 `wrangler.toml`，再执行 `npm run deploy`。

## CSV 必需字段

```text
index
page
level
name_zh
name_en
poisoning_chapter19
accidental
intentional_self_harm
undetermined_intent
treatment_adverse_effect
codes
```

## 数据占位符

模板中必须保留：

```javascript
const DATA = __ICD10_DATA__;
```

`build.mjs` 会把 `__ICD10_DATA__` 替换为根据 CSV 生成的 JSON。
