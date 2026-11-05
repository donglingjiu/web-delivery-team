# 迭代优化日志（OPTIMIZATION_LOG）

> 每次优化追加一条：变更 / 对标来源 / 优点 / 缺点与限制 / 影响面。新条目置顶。

---

## [2026-11-05] OPT-001 阶段门机器可读化 + CI 结构校验

### 变更
- 新增 stage-gates.yaml：G0~G6 七道阶段门结构化为 id/name/checklist/artifact 四字段
- 新增 .github/workflows/validate.yml + scripts/validate.sh：push/PR 自动校验基座完整性
- 新增本日志

### 对标来源
- Dify 发布前配置校验（配置即校验、CI 门禁）
- n8n 代码红线 CI

### 优点
1. 阶段门从"口头过门"升级为"CI 过门"，每次 push 自动校验
2. stage-gates.yaml 可被下游 pipeline 引擎直接消费，免解析自然语言
3. 校验纯 bash/grep，零第三方 Action 依赖

### 缺点 / 已知限制
1. 只验结构不验语义，checklist 质量仍靠人工评审
2. YAML 无正式 schema 版本化，字段演进需同步 validate.sh
3. artifact 仅约定文件名，未校验产物实际内容

### 影响面
- 下游 nebula-tools 全流程引擎直接读 stage-gates.yaml 驱动状态机
