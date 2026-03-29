# Skills 与 Commands 配置

> OpenCode 下，显式工作流优先用 commands，可复用方法块优先用 skills

**版本**: v1.4
**适用**: OpenCode（2026 年）

---

## 1. 两者职责划分

### Commands

位置：
- `.opencode/commands/*.md`

适合：
- 用户明确触发的工作流
- 需要参数的任务入口
- 对外呈现为“命令”的动作
- “从哪里开始做”这件事

建议迁移为 commands 的内容：
- `/catchup`
- `/handoff`
- `/spec`
- `/task`
- `/done`
- `/release`
- `/audit`
- `/review`
- `/test`

### Skills

位置：
- `.opencode/skills/<name>/SKILL.md`

适合：
- 被 agent 按需加载的能力块
- 可被多个 commands 复用的方法
- 诊断、审计、文档梳理等大块知识
- “这类事情应该怎么做”这件事

### 最直接的判断法

如果你是在问：

- “我希望用户敲什么命令开始这件事？”
  -> command
- “我希望 agent 遇到这类问题时复用哪套方法？”
  -> skill

建议迁移为 skills 的内容：
- `audit`
- `deep-audit`
- `docs`
- `diagnose`
- `testing-trophy`

---

## 2. 为什么不能直接照搬 Claude 版 Skills

OpenCode 支持 `SKILL.md`，但可识别 frontmatter 比 Claude Code 少得多。

只应依赖这些字段：
- `name`
- `description`
- `license`
- `compatibility`
- `metadata`

像下面这些 Claude Code 风格字段，不应指望在 OpenCode 生效：
- `allowed-tools`
- `disallowed-tools`
- `model`
- `maxTurns`
- `permissionMode`
- `mcpServers`
- `hooks`

这些能力应改放到：
- `opencode.json`
- agent 配置
- plugin
- command 内容本身

---

## 3. Command 模板

````markdown
---
description: 恢复当前项目上下文，读取 roadmap、spec 和 session notes
agent: plan
subtask: true
---

读取以下内容并输出当前状态摘要：

@AGENTS.md
@docs/roadmap/README.md
@.opencode/session-notes.md

如存在活跃 spec，也一并读取。

输出格式：
1. 当前项目阶段
2. 当前正在做的工作
3. 已完成内容
4. 下一步建议
````

说明：
- `agent: plan` 适合分析型命令
- `subtask: true` 适合扫描、总结、整理类命令
- 命令里可以使用 `@file` 注入文件
- 也可以使用 `!command` 注入 shell 输出
- command 可以覆盖内置命令，因此不要随意重名

---

## 4. Skill 模板

````markdown
---
name: docs-refresh
description: 刷新开发文档时使用，涵盖架构文档、上手指南和部署说明
compatibility: project
metadata:
  owner: team
---

# Docs Refresh Skill

当用户要求刷新开发文档时：

1. 先探索代码结构和目录边界
2. 对照已有文档识别过时内容
3. 优先增量更新，不重写稳定段落
4. 输出变更摘要和剩余风险
````

---

## 5. 推荐命令体系

### `/catchup`

职责：
- 读取 `AGENTS.md`
- 读取 roadmap 总览和当前 phase
- 读取活跃 spec
- 读取 `.opencode/session-notes.md`
- 推荐 `subtask: true`

### `/handoff`

职责：
- 总结当前工作
- 更新 roadmap/spec
- 写入 `.opencode/session-notes.md`
- 输出下一步建议
- 通常不需要 `subtask: true`，因为它常和当前主线会话强相关

### `/spec`

职责：
- 将需求讨论沉淀到 `docs/specs/`
- 记录背景、目标、方案、风险、Implementation Phases

### `/task`

职责：
- 处理方向明确的小任务
- 自动区分简单任务和需要升级为 spec 的任务

### `/done`

职责：
- 完成功能收尾检查
- 检查测试、lint、文档同步、roadmap/spec 更新

### `/release`

职责：
- Phase 级文档刷新
- Changelog 汇总
- 路线图推进
- 推荐 `subtask: true`

### `/audit`

职责：
- 汇总 git 状态
- 检查 roadmap/spec 是否滞后
- 快速暴露测试、lint、配置层风险

### `/review`

职责：
- 使用只读 agent 对当前改动做问题导向审查
- 优先找 bug、回归风险、缺失验证

### `/test`

职责：
- 统一执行项目测试命令
- 汇总失败项和下一步修复建议

---

## 6. 推荐技能体系

### `audit`

常规项目健康检查。

### `deep-audit`

Phase 结束前的深度审计。

### `docs`

基于代码探索刷新开发文档。

### `diagnose`

代码健康度量化诊断。

### `spec-review`

检查 spec 是否仍与实现状态一致。

### 权限建议

OpenCode 支持对 `skill` 做模式匹配权限控制。

推荐默认策略：

```json
{
  "permission": {
    "skill": {
      "*": "ask",
      "docs-refresh": "allow",
      "audit-*": "allow",
      "spec-review": "allow"
    }
  }
}
```

---

## 7. 命令与技能如何协同

推荐模式：

- `/task` command 内部调用 `audit-lite` 类 skill 思路
- `/release` command 复用 `docs` 和 `spec-review` 类 skill
- `/done` command 复用 `testing-trophy` 和 `docs-check` 类 skill

也就是说：
- command 负责入口和流程编排
- skill 负责可复用方法

一句话记忆：

**command 是按钮，skill 是脑内套路。**

---

## 8. 自定义 Agents 与 Commands 的搭配

更稳定的搭配方式是：

- `/review` -> `review` agent
- `/docs` -> `docs-writer` agent 或 `plan` + `docs-refresh` skill
- `/audit` -> `plan` agent + `audit-checklist` skill

原则：
- 对“角色”有明显要求的，用 agent
- 对“流程”有明显要求的，用 command
- 对“方法”可复用的，用 skill

---

## 9. 迁移判断表

| 原 Claude 设计 | OpenCode 建议 |
|---------------|---------------|
| 所有工作流都写在 skill 里 | 拆成 command + skill |
| Skill frontmatter 限制工具 | 改用 agent / permission / plugin |
| Hook 自动触发技能 | 改用 plugin 或明确 command |
| 依赖 Auto Memory 恢复上下文 | 改用 `/catchup` + 持久化文件 |

---

**版本**: v1.4
