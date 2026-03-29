# 2026-03 OpenCode 社区实践调研

## 结论摘要

这轮调研确认了 5 个值得写回 guides-opencode 的点：

1. `opencode.json` 是合并式配置，有明确优先级，不能按“单文件覆盖”的思路设计
2. 权限应优先用 `permission` 的细粒度模式匹配，而不是全靠 plugin
3. 分析型 command 更适合 `subtask: true`
4. plugin 不只是通知和拦截，还可以做 compaction 上下文增强
5. 成熟项目更倾向于让 `AGENTS.md` 负责导航，再配合产品/架构/开发文档拆分认知

## 官方确认点

- Config 支持 JSONC、分层合并、remote/global/project/custom 配置顺序
- `instructions` 支持路径、glob、远程 URL
- `permission` 支持 `*` 默认规则、工具级规则、模式匹配、`external_directory`
- commands 支持 `agent`、`subtask`、`model`、`$ARGUMENTS`、`!command`、`@file`
- plugins 支持本地目录自动加载、npm 插件、`.opencode/package.json` 依赖、`experimental.session.compacting`
- skills 支持按名称发现，并可通过 `permission.skill` 做模式匹配控制

## 社区信号

公开项目里更成熟的模式通常不是把一切塞进 `AGENTS.md`，而是：

- `AGENTS.md` 写项目导航和硬约束
- 产品、原则、架构拆到独立文档
- 用 `instructions` 或按需读取将它们组合回来

这和本迁移版当前设计一致，因此被采纳为正式建议。

## 已回写的内容

- README 升级到 `v1.2`
- `01-AGENTS配置架构指南.md` 增加配置优先级与社区组织方式
- `02-自动化配置指南.md` 增加 granular permission、compaction、watcher、plugin 依赖
- `03-Skills与Commands配置.md` 增加 `subtask` 和 skill 权限建议
- `templates/base-project/opencode.jsonc` 改为更接近实战的细粒度权限模板
- `templates/base-project/.opencode/plugins/compaction-context.js`
- `templates/base-project/.opencode/package.json`
