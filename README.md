# web-delivery-team

端到端网站交付总编排：一句"做一个网站"进，可访问成品出。

## 体系架构（四库一线）

用户："做一个 XX 网站"
  └─ web-delivery-team（总编排/阶段门）
       ├─ 阶段 1-2  product-expert-team   需求澄清 → PRD/用户故事/优先级
       ├─ 阶段 3    本库 ui-ux-brief      站点地图/线框/设计令牌/组件清单
       ├─ 阶段 4    frontend-builder      页面实现 + 审美方向（TS/Vue 规范可借 autodev）
       ├─ 阶段 5    autodev-generic       全栈三阶段（计划-开发-交付）+ 多语言编码规范
       ├─ 阶段 6    本库 qa-checklist     功能/响应式/可访问性验收
       ├─ 阶段 7    本库 deploy-options   构建/托管/交付
       └─ 阶段 8    product-expert-team   指标埋点/反馈迭代

novel-writing-studio 独立于本流水线（小说创作向，自成体系）。

## 资产表

| 仓库 | 角色 |
|---|---|
| https://github.com/donglingjiu/product-expert-team | 产品分析技能库（6 agents + 53 skills） |
| https://github.com/donglingjiu/AutoDev | 全栈开发流程与编码规范 |
| https://github.com/donglingjiu/frontend-builder | 前端实现与审美 |
| https://github.com/donglingjiu/web-delivery-team | 本库：总编排 + 设计/后端/QA/部署四份指南 |

## 调用

新会话发送：

> 打开 https://github.com/donglingjiu/web-delivery-team ，读取 SKILL.md 与 references/ 下四个指南。之后你作为 web-delivery-director 总编排待命：我说"做一个网站"时，按调度表分阶段执行，每阶段过阶段门；产品阶段读 https://github.com/donglingjiu/product-expert-team ，前端阶段读 https://github.com/donglingjiu/frontend-builder ，全栈阶段读 https://github.com/donglingjiu/AutoDev ，需要哪个现读哪个。回复：web-delivery-director 已就绪。

## 版权与使用许可

本仓库内容版权归作者所有，保留所有权利。

- 仅供个人学习与研究使用
- 未经作者书面许可，禁止商用、二次分发、打包转售

版权所有 © 2026 donglingjiu
