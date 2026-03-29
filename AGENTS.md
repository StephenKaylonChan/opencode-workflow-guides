# guides-opencode

本仓库是 OpenCode 通用配置指南，不是业务代码项目。

## 文档结构

- `00-04`：核心指南
- `prompt-*.md`：执行用 prompt
- `docs/roadmap/`：本仓库的维护路线图
- `docs/architecture/`：本仓库自身的信息架构和决策记录
- `docs/development/`：维护约定、更新流程、变更记录
- `templates/base-project/`：可复制到实际项目中的基础模板
- `.opencode/`：本仓库自身的 OpenCode 配置、commands、skills、plugins

## 维护规则

- MUST 保持所有主文档版本号一致
- MUST 在 README 中记录版本变化
- MUST 同步更新跨文档术语
- MUST 在涉及结构变化时同步更新 `docs/roadmap/` 和必要的架构/开发文档
- MUST NOT 混用 Claude Code 专属配置概念作为 OpenCode 主设计

## 术语约束

- 规则文件使用 `AGENTS.md`
- 配置文件使用 `opencode.json`
- 命令目录使用 `.opencode/commands/`
- 技能目录使用 `.opencode/skills/`
- 自动化目录使用 `.opencode/plugins/`

## 仓库定位

- 这是“文档与模板仓库”，不是可运行产品
- 大多数改动发生在 Markdown、JSONC、JS 模板文件
- `templates/base-project/` 是对外复用模板，修改时 SHOULD 兼顾“可直接复制”和“便于二次裁剪”

## 完成标准

- 主文档版本号一致
- README 版本记录已更新
- roadmap phase 状态已同步
- 新增机制已落到文档和模板，而不是只改其中一侧
- 若涉及长期维护方式变化，需同步 `docs/development/contributing.md`

## External File Loading

CRITICAL: 当你遇到下面这些 `@docs/...` 引用时，使用 Read 工具按需读取。

规则：
- 不要一开始把所有引用全部加载
- 只在当前任务需要时读取相关文档
- 读取后将其视为当前任务的正式约束
- 如果当前任务涉及 roadmap 或维护流程，优先读取相关 phase 文件和 development 文档

## 当前项目状态

@docs/architecture/README.md
@docs/development/contributing.md
@docs/roadmap/README.md
@docs/roadmap/phase-1-OpenCode迁移.md
@docs/roadmap/phase-2-模板细化.md
@docs/roadmap/phase-3-社区实践吸收.md
@docs/roadmap/phase-4-持续演进.md
@docs/roadmap/phase-5-模板脚手架增强.md
@docs/roadmap/phase-6-实战验证与优化.md
