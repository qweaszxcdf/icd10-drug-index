# 药物索引数据修复记录（2026-09-07）

基准提交：`7d9c9602a8d6a76bbb3be13f206ecbfdaebe8579`。以下行号均指该提交 CSV 的物理行（含表头），不是修复后的行号。

## 变更范围

修复名称错配、OCR 分隔符及有内部同义词依据的名称截断；合并四处被拆为独立记录的续行。记录数从 5524 变为 5520，涉及原始 43 行（39 行修改、4 行合并删除）。

英文别名 Glycopyrrolate、Acepifylline、Zidovudine、Cortisol 均保留。Hydrocortisone 的 aceponate 子项重新挂到完整药名下。

不按药理推测批量换码。保留条目的五列编码均保持原值，唯一例外是“季铵”改为“见四价铵”并清空直接编码：四价铵的主条目需要按副交感神经阻滞、抗感染、神经节阻滞用途分别选择子项，不应将别名固定到 T44.3。合并删除的四条续行与保留条目的编码完全相同。

## 逐条变更

| 原始行 | 修复前中文 / 英文 | 修复后中文 / 英文 |
|---|---|---|
| 190 | (解热镇痛药) / Fenazone | 安替比林[非那宗](解热镇痛药) / Fenazone |
| 388 | 苯丙氨酸\|苯丙氨酸氮芥] / Phenylalanine mustard | 苯丙氨酸[苯丙氨酸氮芥] / Phenylalanine mustard |
| 440 | 苯甲酸\|安息香酸](消毒防腐剂) / Benzoic acid | 苯甲酸[安息香酸](消毒防腐剂) / Benzoic acid |
| 613 | 丙匹西林[苯丙西林][苯氧 / Propicillin | 丙匹西林[苯丙西林][苯氧丙基青霉素钾] / Propicillin |
| 765 | 雌酮硫酸酯哌嗪\|硫酸雌酮哌嗪\| / Estropipate | 雌酮硫酸酯哌嗪[硫酸雌酮哌嗪] / Estropipate |
| 921 | 地奈德(肾上腺皮质激素类 / Desonide | 地奈德(肾上腺皮质激素类) / Desonide |
| 933 | 地舍平[脱甲氧利血平]\|去甲 / Deserpidine | 地舍平[脱甲氧利血平][去甲氧利血平] / Deserpidine |
| 1248 | (单丁基乙醚) / (monoethyl ether) | (单丁基乙醚) / (monobutyl ether) |
| 1249 | (单乙基乙醚) / Diamorphine, Diacetylmorphine | 二乙酰吗啡[二醋吗啡] / Diamorphine, Diacetylmorphine |
| 1404 | 血管扩张药) / Flunarizine | 氟桂利嗪(血管扩张药) / Flunarizine |
| 1605 | 格隆溴铵[溴环扁吡酯] / Glycopyrronium bromide | 格隆溴铵[溴环扁吡酯](抗消化性溃疡药，抗胆碱药) / Glycopyrronium bromide, Glycopyrrolate |
| 1606 | (抗消化性溃疡药，抗胆碱药) / Glycopyrrolate | 并入前一条，保留英文别名与分类说明 |
| 1756 | 环丙沙星\|环丙氟哌酸](抗菌药) / Ciprofloxacin | 环丙沙星[环丙氟哌酸](抗菌药) / Ciprofloxacin |
| 1899 | 季铵-现译名 四价铵 / Quaternary ammonium | 季铵 - 见 四价铵 / Quaternary ammonium - see Quaternary ammonium |
| 2721 | 柳氮磺吡啶[水杨酰偶氮磺胺；吡啶[磺胺药] / Salazosul-fapyridine, Sulfasalazine, Sulphasalazine, | 柳氮磺吡啶[水杨酰偶氮磺胺；吡啶[磺胺药] / Salazosulfapyridine, Sulfasalazine, Sulphasalazine |
| 2792 | 氯苯沙明[氯苯氧胺][氯甲 / Chlorphenoxamine | 氯苯沙明[氯苯氧胺][氯甲苯海拉明] / Chlorphenoxamine |
| 2972 | má-mǎ 麻马 / Measles virus vaccine (attenuated) | 麻疹减毒活疫苗 / Measles virus vaccine (attenuated) |
| 3321 | 萘二磺乙乳胆铵\|乙乳胆胺 / Aclatonium napadisilate | 萘二磺乙乳胆铵[乙乳胆胺] / Aclatonium napadisilate |
| 3431 | 哌醋茶碱[茶碱乙酸哌嗪] / Acefylline piperazine | 哌醋茶碱[茶碱乙酸哌嗪](利尿剂,血管扩张药) / Acefylline piperazine, Acepifylline |
| 3432 | (利尿剂,血管扩张药) / Acepifylline | 并入前一条，保留英文别名与分类说明 |
| 3457 | 泮加酸\|泛配子酸(利尿剂， / Pangamic acid | 泮加酸[泛配子酸](利尿剂， / Pangamic acid |
| 3477 | 特指内含物 - 见特指的物质 / specified content\n- see specific substance | 特指内含物 - 见特指的物质 / specified content - see specific substance |
| 3552 | 普拉洛芬(抗炎镇痛药 / Pranoprofen | 普拉洛芬(抗炎镇痛药) / Pranoprofen |
| 3593 | 齐多夫定[叠氮胸腺嘧啶] / Azidothymidine / AZT | 齐多夫定[叠氮胸腺嘧啶](抗病毒药) / Azidothymidine / AZT, Zidovudine |
| 3594 | (抗病毒药) / Zidovudine | 并入前一条，保留英文别名与分类说明 |
| 3679 | 羟丙酮(抗寄生虫药) / Hydroxyquinoline (derivatives) NEC, | 羟丙酮(抗寄生虫药) / Hydroxyquinoline (derivatives) NEC |
| 3726 | 氢化可的松[可的索](衍生物) / Hydrocortisone | 氢化可的松[可的索](衍生物)(肾上腺皮质激素类) / Hydrocortisone (derivatives), Cortisol |
| 3727 | (肾上腺皮质激素类) / (derivatives), Cortisol | 并入前一条，保留英文别名与分类说明 |
| 3851 | 去乙酰毛花苷[脱乙酰基 / Deslanoside | 去乙酰毛花苷[脱乙酰基毛花洋地黄苷C] / Deslanoside |
| 4019 | 四乙基二硫代焦磷酸酯 / TEPP | 四乙基二硫代焦磷酸酯(有机磷杀虫药) / TEPP |
| 4020 | (有机磷杀虫药) / Tetrylammonium chloride | 四乙氯铵 / Tetrylammonium chloride |
| 4027 | 塞克硝唑(抗阿米巴药 / Secnidazole | 塞克硝唑(抗阿米巴药) / Secnidazole |
| 4038 | 噻克索酮(抗真菌药 / Tioxolone | 噻克索酮(抗真菌药) / Tioxolone |
| 4291 | 肽磺胺噻唑[邻苯二甲酰 / Phthalylsulfathiazole | 肽磺胺噻唑[邻苯二甲酰磺胺噻唑] / Phthalylsulfathiazole |
| 4556 | 乌拉莫司汀[尿嘧啶氮芥] / Uramustine, Uracil mustard | 乌拉莫司汀[尿嘧啶氮芥](抗肿瘤药) / Uramustine, Uracil mustard |
| 4557 | (抗肿瘤药) / Urethane | 乌拉坦(镇静催眠药) / Urethane |
| 4558 | 乌拉坦(镇静催眠药) / Hexamine, Methenamine | 乌洛托品(治尿路感染药) / Hexamine, Methenamine |
| 4559 | (治尿路感染药) / Aconitine | 乌头碱 / Aconitine |
| 4668 | 香柑内酯\|香柑脑] / Bergapten | 香柑内酯[香柑脑] / Bergapten |
| 4707 | 硝酸异山梨酯[二硝酸 / Isosorbide dinitrate | 硝酸异山梨酯[二硝酸异山梨醇酯] / Isosorbide dinitrate |
| 4776 | 溴丙胺太林(普鲁本辛](抗胆碱药) / Propantheline bromide | 溴丙胺太林[普鲁本辛](抗胆碱药) / Propantheline bromide |
| 5490 | 组胞浆菌素[荚膜组织胞浆菌素] / Histoplasmin | 组胞浆菌素[荚膜组织胞浆菌素](诊断用药) / Histoplasmin |
| 5491 | (诊断用药) / Levopropylhexedrine | Levopropylhexedrine / Levopropylhexedrine |

## 证据与处理原则

- 同义词截断优先采用同一 CSV 的完整条目：例如 Propicillin（466）、Chlorphenoxamine（2859）、Deslanoside（4481）、Isosorbide dinitrate（1221）。
- Diamorphine 属于吗啡衍生物，不能与乙醚残片对应：https://www.euda.europa.eu/publications/drug-profiles/heroin_en
- Methenamine / 乌洛托品名称：https://www.sigmaaldrich.com/HK/zh/product/usp/1409003 。尿路用途：https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9f002ad9-58e7-44f2-a980-3cc3f36bbd9b
- Glycopyrrolate / Glycopyrronium 名称对应：https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ff65c5d3-7ba9-4315-a884-199151eb45a5
- 哌醋茶碱 / Acepifylline：https://mall.shaphar.com/Med/ME/MED0000000005136.shtml
- 乌拉坦 / Urethane 原始研究用名：https://xuebao.dlou.edu.cn/article/2011/2095-1388/201106014.html
- Levopropylhexedrine 实体及作用：https://drugs.ncats.io/drug/4R3L4TYV09 。尚无可靠中文译名证据，暂以原英文作显示名称，不臆造中文名。“诊断用药”残片合回前条组胞浆菌素。
- 对连续错位行采取名称恢复和相邻说明归位；这并不等于确认这些条目现存编码与中文原书逐字一致。

## 尚待原书复核

1. 原始 1247–1249（原书 1605 页）：1248 仅将英文 monoethyl 更正为与中文“单丁基”相符的 monobutyl；该残片的完整父级、是否并入上一行及编码仍未确认，故不补码或猜测层级。1249 的“单乙基乙醚”与 Diamorphine 错配已解除，但该乙醚残片在原书中的归属仍需恢复，不应误认为乙醚条目已完整修复。
2. 原始 10 / 3996：TCDD 的 T53.7 与 T65.8，以及相应外因码差异。保持原码，需核对中文原书和版本。名称证据：https://pubchem.ncbi.nlm.nih.gov/compound/TCDD
3. 原始 5491：Levopropylhexedrine 的中文标准译名仍待核。
4. 未凭推测补齐以下原始行缺失的用途说明或化学别名：71、102、119、128、391、629、632、648、769、1069、1230、1252、1371、1502、2134、2546、2735、2783、2826、3181、3457、3639、3855、3964、4216、4329、4580、4735、4740。
5. 其他非本次确认范围的疑似名称/编码问题仍需逐页对照；本修复不是全表医学编码核准。

## 验证

- 使用项目锁文件安装依赖，原始构建脚本 `npm run build` 成功生成 5520 条记录。
- CSV 九列可完整解析；页码顺序、层级步进无新增异常。
- 对齐删除的四条续行后，页码、level 和记录顺序与基准一致。
- 保留条目的五列编码逐项比较；仅上述“季铵”交叉引用发生预期清空。
- 构建产物仅用于验证，不提交 dist 或依赖目录。
