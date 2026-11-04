# 任务轨迹沉淀规范

每次交付完成后，将四元组追加到 docs/traces/<date>-<slug>.jsonl。

## 字段定义

| 字段 | 类型 | 说明 |
|---|---|---|
| req_original | string | 用户需求原句（不截断，保留口语化） |
| req_normalized | object | 澄清后的结构化需求（页面/功能/约束） |
| sub_outputs.product | string | PRD 摘要（不超过500字） |
| sub_outputs.design | object | 设计令牌表 key-value |
| sub_outputs.frontend | object | 代码统计（行数/组件数/测试通过率） |
| gate_scores | object | 各阶段门评分（score+threshold+passed） |
| final_feedback | object | 用户确认次数/修改点/是否返工 |

## 样本（单行 JSON）

    {"ts":"2026-11-04","req_original":"做一个待办事项网站","req_normalized":{"pages":2,"features":["add","list","complete"]},"sub_outputs":{"product":"PRD 2页面","design":{"primary":"#2563eb"},"frontend":{"loc":420,"tests":12}},"gate_scores":{"G1":95,"G2":90,"G4":92,"G6":100,"G7":100},"final_feedback":{"confirm_rounds":2,"rework":false}}

## 用途

1. 相似需求检索 few-shot 样本
2. 阶段门阈值调优依据
3. 后续微调训练数据集
