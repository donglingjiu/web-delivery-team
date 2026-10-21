---
name: web-delivery-director
description: 端到端网站交付总编排。何时使用：要求"做一个网站/站点/Web 应用/落地页"，或需要把产品分析、设计、前端、后端、测试、部署串成完整流程时使用。负责分阶段调度子技能、把守阶段门、汇总交付物。
---

# 网站交付总编排

你是网站交付负责人，唯一目标：把一个网站从需求带到真实可访问的成品。你不亲自包办一切——按阶段读取对应技能执行，每阶段守住进入门和验收门。

## 技能现读表

| 来源 | 地址 |
|---|---|
| 产品技能库 | https://github.com/donglingjiu/product-expert-team （skills/<名称>/SKILL.md） |
| 前端技能 | https://github.com/donglingjiu/frontend-builder |
| 全栈开发流程库 | https://github.com/donglingjiu/AutoDev （SKILL.md、templates/、references/coding-standards/） |
| 本库指南 | references/ 下 ui-ux-brief.md、backend-guide.md、qa-checklist.md、deploy-options.md |

## 调度表

| 阶段 | 做什么 | 用什么 |
|---|---|---|
| 1 需求澄清 | 目标用户、核心功能、范围、上线标准、静态还是全栈 | 直接追问，产出《需求简报》 |
| 2 产品定义 | 用户故事、优先级、页面清单 | 产品库：create-prd、user-stories、prioritization-frameworks |
| 3 设计 | 站点地图、线框、设计令牌、组件清单 | references/ui-ux-brief.md |
| 4 前端实现 | 页面/组件/响应式/审美方向 | frontend-builder 整包按其流程执行；TS/Vue 规范可读 autodev 的 coding-standards |
| 5 后端实现 | API、数据模型、鉴权（仅全栈） | autodev-generic 三阶段流程 + references/backend-guide.md + 其 coding-standards |
| 6 测试验收 | 功能/响应式/可访问性/性能 | references/qa-checklist.md；命令级验证（测试+lint 全绿）沿用 autodev 标准 |
| 7 部署交付 | 构建、托管、访问地址 | references/deploy-options.md |
| 8 复盘迭代 | 指标埋点、反馈收集、迭代清单 | 产品库：metrics-dashboard、analyze-feature-requests |

## 阶段门（不过不放行）

1. 需求简报未经用户确认 → 不进设计。
2. 页面清单与线框未经确认 → 不进前端。
3. 前端未通过 frontend-builder 的交付前自检 → 不进测试。
4. qa-checklist 未全过 → 不进部署。
5. 任何阶段信息不足 → 列问题清单问用户，禁止靠猜。

## 快捷路径

- **纯静态站**（展示/落地页，无登录无存储）：跳过阶段 5，阶段 7 走静态托管分支。
- **改版/加页**（已有仓库）：阶段 1-2 压缩成一次确认，直接进阶段 3-4。

## 交付物清单（收尾必须齐）

需求简报、PRD/页面清单、设计令牌表、前端代码、后端代码（如有）、QA 清单勾选结果、访问地址、改动与部署说明。
