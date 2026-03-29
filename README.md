# OpenCode Workflow Guides

> **文档性质**: 通用参考文档，可复用于任何项目
> **版本**: v1.4（2026-03）

OpenCode workflow guides, migration prompts, and reusable project templates.

为 OpenCode 准备的一套工作流指南、初始化 prompt 和可复制模板。

这个仓库的目标很直接：
- 保留 Claude Code 时代里真正有效的方法论
- 用 OpenCode 自己的 `AGENTS.md`、`opencode.json`、`.opencode/commands/`、`.opencode/skills/`、plugins 重新落地
- 让新项目、旧项目迁移、后续升级都能重复执行，而不是每次从头摸索

---

## 一眼看懂

- 想新建 OpenCode 工作流：看 [`prompt-新项目初始化.md`](./prompt-%E6%96%B0%E9%A1%B9%E7%9B%AE%E5%88%9D%E5%A7%8B%E5%8C%96.md)
- 想迁移 Claude Code 项目：看 [`prompt-旧项目迁移.md`](./prompt-%E6%97%A7%E9%A1%B9%E7%9B%AE%E8%BF%81%E7%A7%BB.md)
- 想直接拿模板开工：看 [`templates/base-project/`](./templates/base-project/)
- 想理解设计方法：从 [`00-日常使用说明.md`](./00-%E6%97%A5%E5%B8%B8%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E.md) 开始

---

## 这个仓库适合谁

- 想把 Claude Code 工作流迁到 OpenCode 的人
- 想给团队建立一套稳定 AI 协作规范的人
- 想直接复制一套 `base-project` 模板开始使用的人
- 想持续维护 OpenCode 配置，而不是只做一次性初始化的人

---

## 你能得到什么

- 一套完整的方法论文档：Explore -> Plan -> Code -> Verify -> Simplify -> Commit
- 一套 OpenCode 原生配置思路：`AGENTS.md` + `opencode.jsonc` + commands + skills + plugins
- 一套可复制的项目模板：[`templates/base-project/`](./templates/base-project/)
- 一组初始化、迁移、升级、维护 prompt

---

## 快速开始

### 方式 1：直接复制模板

如果你要给一个项目快速装上 OpenCode 基础工作流，先看：

- [`templates/base-project/`](./templates/base-project/)
- [`00-日常使用说明.md`](./00-%E6%97%A5%E5%B8%B8%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E.md)

最适合：
- 已经知道自己想要什么
- 想先跑起来，再按需裁剪

### 方式 2：让 OpenCode 帮你初始化新项目

在目标项目里打开 OpenCode，然后使用：

- [`prompt-新项目初始化.md`](./prompt-%E6%96%B0%E9%A1%B9%E7%9B%AE%E5%88%9D%E5%A7%8B%E5%8C%96.md)

最适合：
- 想把初始化过程交给 agent 执行
- 想让 OpenCode 根据项目技术栈生成第一版配置

### 方式 3：迁移已有 Claude Code 项目

如果项目里已经有 `CLAUDE.md`、`.claude/skills/`、hooks 之类旧体系，使用：

- [`prompt-旧项目迁移.md`](./prompt-%E6%97%A7%E9%A1%B9%E7%9B%AE%E8%BF%81%E7%A7%BB.md)

最适合：
- 现有项目已经有 `CLAUDE.md`、`.claude/skills/`、hooks
- 想保留方法论，但切到 OpenCode 配置体系

---

## 推荐阅读顺序

1. [`00-日常使用说明.md`](./00-%E6%97%A5%E5%B8%B8%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E.md)
2. [`01-AGENTS配置架构指南.md`](./01-AGENTS%E9%85%8D%E7%BD%AE%E6%9E%B6%E6%9E%84%E6%8C%87%E5%8D%97.md)
3. [`02-自动化配置指南.md`](./02-%E8%87%AA%E5%8A%A8%E5%8C%96%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97.md)
4. [`03-Skills与Commands配置.md`](./03-Skills%E4%B8%8ECommands%E9%85%8D%E7%BD%AE.md)
5. [`04-工作流最佳实践.md`](./04-%E5%B7%A5%E4%BD%9C%E6%B5%81%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5.md)

---

## 仓库结构

| 路径 | 作用 |
|------|------|
| [`README.md`](./README.md) | 仓库首页、总览、版本记录 |
| [`00-日常使用说明.md`](./00-%E6%97%A5%E5%B8%B8%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E.md) | 日常使用方式、会话切换、命令入口 |
| [`01-AGENTS配置架构指南.md`](./01-AGENTS%E9%85%8D%E7%BD%AE%E6%9E%B6%E6%9E%84%E6%8C%87%E5%8D%97.md) | `AGENTS.md`、`instructions`、目录级规则组织 |
| [`02-自动化配置指南.md`](./02-%E8%87%AA%E5%8A%A8%E5%8C%96%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97.md) | `opencode.jsonc`、permissions、formatters、plugins、MCP |
| [`03-Skills与Commands配置.md`](./03-Skills%E4%B8%8ECommands%E9%85%8D%E7%BD%AE.md) | commands / skills 的边界、模板和设计方式 |
| [`04-工作流最佳实践.md`](./04-%E5%B7%A5%E4%BD%9C%E6%B5%81%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5.md) | 工作流、spec、roadmap、质量防御、并行协作 |
| [`templates/base-project/`](./templates/base-project/) | 可直接复制的 OpenCode 项目模板 |
| [`docs/roadmap/`](./docs/roadmap/) | 本仓库自己的维护路线图 |
| [`docs/development/getting-started.md`](./docs/development/getting-started.md) | 维护本仓库自身时的上手方式 |
| [`research/`](./research/) | 官方能力和社区实践的调研沉淀 |

---

## 核心设计

### 1. 方法论对齐

保留这些核心习惯：
- Explore -> Plan -> Code -> Verify -> Simplify -> Commit
- 复杂需求先写 spec
- 长期进度写 roadmap
- 会话切换靠 handoff / catchup

### 2. 配置层改写

不再依赖 Claude Code 的：
- `CLAUDE.md`
- hooks
- `.claude/skills/`

而改为 OpenCode 的：
- `AGENTS.md`
- `opencode.jsonc`
- `.opencode/commands/`
- `.opencode/skills/`
- `.opencode/plugins/`

### 3. 状态显式落盘

OpenCode 没有 Claude Code 那种完全等价的 Auto Memory。

因此这套 guides 的原则是：
- 用 `docs/roadmap/`
- 用 `docs/specs/`
- 用 `.opencode/session-notes.md`

把状态留在磁盘上，而不是只留在聊天上下文里。

---

## Claude Code -> OpenCode 映射

| Claude Code 设计 | OpenCode 对应 |
|-----------------|---------------|
| `CLAUDE.md` | `AGENTS.md` 或 `CLAUDE.md` fallback |
| `@path` 引用 | `instructions` 或在 `AGENTS.md` 中显式要求按需读取 |
| Hooks | plugins、permissions、formatters |
| `.claude/skills/` | `.opencode/skills/` |
| 自定义 Slash Commands | `.opencode/commands/` |
| Plan Mode | `plan` agent |
| Build 模式 | `build` agent |
| Explore Subagent | `explore` subagent |
| Auto Memory | `roadmap` / `specs` / `session-notes` |

---

## 模板里已经包含什么

[`templates/base-project/`](./templates/base-project/) 当前已经包含：

- `AGENTS.md`
- `opencode.jsonc`
- `.opencode/commands/`
- `.opencode/skills/`
- `.opencode/plugins/`
- `.opencode/agents/`
- `docs/roadmap/`
- `docs/specs/`
- `docs/architecture/`
- `docs/development/`
- ADR 模板

它偏“全量模板”，适合先完整复制，再按项目裁剪。

---

## 维护这个仓库

本仓库自身已经按这套 guides 配好了 OpenCode。

如果你是在维护这个仓库本身，建议直接看：

- [`docs/development/getting-started.md`](./docs/development/getting-started.md)
- [`docs/development/contributing.md`](./docs/development/contributing.md)
- [`docs/roadmap/README.md`](./docs/roadmap/README.md)

新开 OpenCode 会话时，直接执行：

```text
/catchup
```

---

## 版本记录

| 版本 | 日期 | 说明 |
|------|------|------|
| v1.4 | 2026-03 | 用 OpenCode 原生配置管理 `guides-opencode` 仓库自身，补齐上手文档、catchup/handoff 状态和 commands vs skills 边界说明 |
| v1.3 | 2026-03 | 将 `base-project` 扩成可直接复制的脚手架：补充自定义 agents、ADR/phase 模板、`audit`/`review`/`test` 命令与 `.gitignore` |
| v1.2 | 2026-03 | 吸收官方与社区实践：补充配置优先级、细粒度权限、`subtask` 用法、compaction/watcher/plugin 依赖模板与 research 记录 |
| v1.1 | 2026-03 | 补充 `templates/base-project/`，增加更完整的 commands、skills、plugins 与开发文档模板 |
| v1.0 | 2026-03 | 首次建立 OpenCode 迁移版 guides，完成 README、00-04 主文档、prompt 模板和 roadmap 骨架 |

---

## 贡献与后续

- 如果要升级这套 guides，优先更新主文档和模板两侧
- 如果要吸收官方或社区新能力，先写到 `research/`
- 如果要维护本仓库自身，先 `/catchup` 再开始改

---

**文档性质**: 通用参考模板（可跨项目复用）
**最后更新**: 2026-03（v1.4）
