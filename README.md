# OpenCode 参考文档

> **文档性质**: 通用参考文档，可复用于任何项目
> **版本**: v1.4（2026-03）

本目录是原 `guides/` 的 OpenCode 迁移版。

迁移原则只有两条：
- **方法论对齐**：保留 Explore -> Plan -> Code -> Verify -> Simplify -> Commit、Roadmap、Spec、handoff/catchup、文档联动这些核心工作方式
- **配置层改写**：不再使用 Claude Code 的 `CLAUDE.md`、Hooks、`.claude/skills/`，改为 OpenCode 的 `AGENTS.md`、`opencode.json`、plugins、formatters、`.opencode/commands/`、`.opencode/skills/`

---

## 文档列表

### 使用说明与执行 Prompt

| 文档 | 说明 | 何时用 |
|------|------|--------|
| [00-日常使用说明.md](./00-%E6%97%A5%E5%B8%B8%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E.md) | OpenCode 日常开发、会话切换、计划模式、命令速查 | 随时参考 |
| [prompt-新项目初始化.md](./prompt-%E6%96%B0%E9%A1%B9%E7%9B%AE%E5%88%9D%E5%A7%8B%E5%8C%96.md) | 直接粘贴给 OpenCode，用于新项目初始化 | 新项目第一次配置 |
| [prompt-旧项目迁移.md](./prompt-%E6%97%A7%E9%A1%B9%E7%9B%AE%E8%BF%81%E7%A7%BB.md) | 将旧 Claude Code 体系迁移到 OpenCode 版 | 老项目迁移 |
| [prompt-guide版本升级.md](./prompt-guide%E7%89%88%E6%9C%AC%E5%8D%87%E7%BA%A7.md) | 将已有 OpenCode 配置同步到最新 guides-opencode | guide 更新后 |
| [prompt-更新指南规范.md](./prompt-%E6%9B%B4%E6%96%B0%E6%8C%87%E5%8D%97%E8%A7%84%E8%8C%83.md) | 搜索 OpenCode 最新能力并回写 guides-opencode | 定期维护 |

### 配置参考文档

| 文档 | 说明 | 优先阅读 |
|------|------|-----------|
| [01-AGENTS配置架构指南.md](./01-AGENTS%E9%85%8D%E7%BD%AE%E6%9E%B6%E6%9E%84%E6%8C%87%E5%8D%97.md) | `AGENTS.md`、`instructions`、目录级规范与上下文组织 | 第一读 |
| [02-自动化配置指南.md](./02-%E8%87%AA%E5%8A%A8%E5%8C%96%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97.md) | `opencode.json`、permissions、formatters、plugins、MCP | 第二读 |
| [03-Skills与Commands配置.md](./03-Skills%E4%B8%8ECommands%E9%85%8D%E7%BD%AE.md) | `.opencode/commands/` 和 `.opencode/skills/` 的职责划分与模板 | 第三读 |
| [04-工作流最佳实践.md](./04-%E5%B7%A5%E4%BD%9C%E6%B5%81%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5.md) | OpenCode 下的 Explore/Plan/Build、Roadmap、Spec、质量防御、并行会话 | 随时参考 |

### 可复用模板

| 路径 | 说明 |
|------|------|
| [`templates/base-project/`](./templates/base-project/) | 可直接复制到项目中的 OpenCode 基础模板 |

---

## 从 Claude Code 到 OpenCode 的核心映射

| Claude Code 设计 | OpenCode 对应 |
|-----------------|---------------|
| `CLAUDE.md` | `AGENTS.md` 或 `CLAUDE.md` fallback |
| `@path` 引用 | `opencode.json` 的 `instructions` 或在 `AGENTS.md` 中显式要求按需 `read` |
| Hooks | plugins 事件、permissions、formatters |
| `.claude/skills/` | `.opencode/skills/` |
| 自定义 Slash Commands | `.opencode/commands/` |
| Plan Mode | `plan` agent |
| Build 模式 | `build` agent |
| Explore Subagent | `explore` subagent |
| Auto Memory | 无完全等价物，使用 `docs/roadmap/`、`docs/specs/`、`.opencode/session-notes.md` 持久化 |

---

## OpenCode 版体系的设计重点

### 1. 规则分层

- 项目共享规则写在 `AGENTS.md`
- 技术细则拆到 `docs/` 或 `rules/`，通过 `opencode.json.instructions` 注入
- 目录级特殊规则优先用局部 `AGENTS.md`

### 2. 自动化分层

- 安全边界用 `permission`
- 写后格式化用 `formatter`
- 生命周期自动化用 `plugins`
- 外部能力扩展用 `mcp`

### 3. 工作流分层

- 高频显式工作流用 `.opencode/commands/`
- 可复用方法块用 `.opencode/skills/`
- 长期状态落盘到 `docs/roadmap/`、`docs/specs/`、`.opencode/session-notes.md`

### 4. 能力边界

OpenCode 很强，但它没有 Claude Code 那种完整的原生 Auto Memory 和声明式 Hook 体系。
因此这套 guide 更强调：
- 用文件持久化状态，而不是赌上下文记忆
- 用插件写自动化，而不是把一切塞进规则文本
- 用 command/skill 组合，而不是把所有工作流都建成一种机制

---

## 推荐目录结构

```text
project-root/
├── AGENTS.md
├── opencode.json
├── .opencode/
│   ├── commands/
│   ├── skills/
│   ├── plugins/
│   ├── tools/
│   └── session-notes.md
└── docs/
    ├── roadmap/
    ├── specs/
    ├── architecture/
    └── development/
```

模板版示例见 [`templates/base-project/`](./templates/base-project/)。

---

## 本仓库当前状态

- 当前阶段：见 [docs/roadmap/README.md](./docs/roadmap/README.md)
- 首轮迁移目标：先完成主指南与 prompt 体系，再补更细的模板和示例配置

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

**文档性质**: 通用参考模板（可跨项目复用）
**最后更新**: 2026-03（v1.4）
