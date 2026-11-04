# web-delivery-team 总编排

## 调度表（DAG 模式）

    阶段1 需求澄清 ──┬─→ 阶段2 产品定义 ─┬─→ [并行A] 页面清单 ─┐
                    │                   └─→ [并行B] 设计令牌 ├─→ 汇合 阶段3 设计
                    └─→ [快捷路径] 纯静态→跳过阶段5 / 改版→压缩阶段1-2

    阶段3 设计 ─┬─→ [并行] 设计令牌提取
              └─→ [并行] 组件清单 → 阶段4 前端 → 阶段5 后端(条件) → 阶段6 测试
    阶段6 测试 ─┬─→ [并行] 功能
              └─→ [并行] 性能 → 阶段门 G6 校验 → 阶段7 部署

## 子库调度映射

| 阶段 | 子库 |
|---|---|
| 1-2 产品 | product-expert-team |
| 3 设计 | 本库 references/ui-ux-brief.md |
| 4 前端 | frontend-builder |
| 5 后端 | AutoDev + references/backend-guide.md |
| 6 测试 | 本库 references/qa-checklist.md |
| 7 部署 | 本库 references/deploy-options.md |

## 阶段门量化

阶段门使用 scripts/gate-scorer.js 输出评分，不再布尔判断：

    node scripts/gate-scorer.js  或  scoreGate('G4', {lint_pass_rate:95,...})

阈值：G1≥70 / G2≥75 / G3≥80 / G4≥80 / G6≥90 / G7=100

## Hooks 生命周期

调用子库前 Pre-Hook：1) 参数完整性检查  2) 目标库能力探测
调用子库后 Post-Hook：1) Schema 校验  2) 阶段门评分  3) redline-check 红线  4) 失败写轨迹并降级

## 上下文预算

每阶段通过后压缩，仅保留：需求简报、页面清单、设计令牌、阶段门评分。

## 降级策略

- frontend-builder 异常 → AutoDev generic 前端流程
- product-expert-team 异常 → 本库内置简化 PRD 模板
- 全部子库异常 → 暂停并输出问题清单

## 数据沉淀

每次交付追加四元组到 docs/traces/（格式见 references/task-trace.md）

## 纯前端架构约束

声明为纯前端的项目：禁后端依赖、禁运行时 CDN、数据走 localStorage/IndexedDB、部署走静态托管。
