# AGENTS 配置架构指南

> 用 OpenCode 原生规则体系替代 Claude Code 的 `CLAUDE.md` 设计

**版本**: v1.3
**适用**: OpenCode（2026 年）

---

## 1. 核心思路

OpenCode 的规则层核心不是 Hooks，而是：
- `AGENTS.md`
- `opencode.json.instructions`
- 目录级 `AGENTS.md`
- command/skill 中的显式工作流

迁移后的原则：
- 稳定规则写进 `AGENTS.md`
- 大段细则拆到独立文档，通过 `instructions` 注入
- 目录特定规则放局部 `AGENTS.md`
- 临时状态不要写进 `AGENTS.md`

---

## 2. `AGENTS.md` 放什么

适合放：
- 项目结构
- 常用命令
- 技术栈版本
- 团队硬约束
- 提交规范
- 完成标准
- 关键文档入口

不适合放：
- 超长示例代码
- 临时任务
- 每周变一次的进度信息
- 大量框架细节

这些内容应拆到：
- `docs/architecture/`
- `docs/development/`
- `docs/roadmap/`
- `docs/specs/`

---

## 3. OpenCode 的规则加载方式

### 推荐层级

```text
项目根 AGENTS.md
  + opencode.json.instructions
  + 子目录 AGENTS.md（按需）
```

### 与 Claude Code 的关键差异

- OpenCode 支持 `CLAUDE.md` 兼容，但应以 `AGENTS.md` 为主
- OpenCode 不会像 Claude Code 那样天然把 `@path` 当成完整模块化引用体系
- 更推荐用 `instructions` 字段统一加载文档，或在 `AGENTS.md` 中明确要求 agent 按需读取外部文件

### 配置优先级

OpenCode 的配置是**合并**而不是简单覆盖。推荐理解顺序为：

```text
remote config
  -> global config
  -> custom config
  -> project config
  -> .opencode/ 目录内容
  -> inline overrides
```

这意味着：
- 团队默认值可以放 remote/global
- 项目差异放 `opencode.json`
- 仓库里的 `.opencode/commands`、`.opencode/plugins` 负责项目本地能力
- 不要假设某一层会把前面的内容完全替换掉

---

## 4. 推荐的文件拆分

### 根 `AGENTS.md`

控制在 80-150 行，内容包括：
- 项目是什么
- 关键目录
- 开发命令
- 测试命令
- 代码与文档完成标准
- Git 规范

### `instructions`

适合通过 `opencode.json` 注入：

```json
{
  "$schema": "https://opencode.ai/config.json",
  "instructions": [
    "docs/architecture/README.md",
    "docs/development/getting-started.md",
    "docs/roadmap/README.md"
  ]
}
```

经验上，`instructions` 更适合放：
- 所有人都应该知道的共享规则
- 稳定的开发文档
- 可用 glob 管理的一组规则文件

例如：

```json
{
  "instructions": [
    "docs/architecture/README.md",
    "docs/development/*.md",
    "packages/*/AGENTS.md"
  ]
}
```

如果团队有统一规则仓库，也可以加载远程 URL。

### 子目录 `AGENTS.md`

适合放：
- 前端目录专属规范
- 后端目录专属规范
- 共享包约束

### 社区上更稳的组织方式

社区里更成熟的项目往往不会把所有认知都塞到一个 `AGENTS.md`。

更稳的做法是：
- `AGENTS.md` 负责导航和硬约束
- `docs/architecture/` 负责结构
- `docs/development/` 负责日常开发与部署
- `docs/specs/` 负责正在推进的重要功能

也就是把 `AGENTS.md` 当成**路由器**，而不是当成百科全书

---

## 5. 推荐模板

````markdown
# [项目名]

> [一句话描述]

## Project Structure

- `apps/web/` - 前端应用
- `apps/api/` - 后端服务
- `packages/shared/` - 共享代码
- `docs/` - roadmap、spec、架构与开发文档

## Common Commands

```bash
pnpm install
pnpm dev
pnpm test
pnpm lint
pnpm build
```

## Rules

- MUST 先探索相关代码，再做改动
- MUST 在提交前通过测试和 lint
- MUST 将复杂需求先落到 `docs/specs/`
- MUST 在功能完成后更新 `docs/roadmap/` 或对应 spec
- MUST NOT 读取或提交 `.env` 等敏感文件

## Definition of Done

- 代码验证通过
- 边界条件已检查
- 相关文档已同步
- roadmap/spec 状态已更新
````

---

## 6. `AGENTS.md` 与长期状态的边界

OpenCode 没有完全等价的 Auto Memory。

因此要明确边界：

### `AGENTS.md` 负责

- 稳定的项目规则
- 稳定的项目结构认知

### `docs/roadmap/` 负责

- 当前阶段进展
- 中期规划

### `docs/specs/` 负责

- 单个功能的设计与实施状态

### `.opencode/session-notes.md` 负责

- 当前会话总结
- 中断点
- 下次继续建议

---

## 7. Monorepo 建议

```text
project-root/
├── AGENTS.md
├── opencode.json
├── apps/
│   ├── web/AGENTS.md
│   └── api/AGENTS.md
├── packages/
│   └── shared/AGENTS.md
└── docs/
    ├── roadmap/
    ├── specs/
    ├── architecture/
    └── development/
```

Monorepo 下的经验是：
- 根 `AGENTS.md` 讲全局规则
- 子目录 `AGENTS.md` 讲领域细则
- 不要把所有规则都堆到根文件

---

## 8. 与自定义 Agents 的关系

当项目开始引入自定义 agents 时，建议分工如下：

- `AGENTS.md`：定义项目总规则和通用完成标准
- `.opencode/agents/review.md`：定义只读审查角色
- `.opencode/agents/docs-writer.md`：定义文档整理角色
- `.opencode/agents/security-auditor.md`：定义安全导向角色

经验上：
- 共通约束放 `AGENTS.md`
- 角色偏好放各自 agent prompt
- 工具限制优先用 permission，而不是在 prompt 里“口头约束”

---

## 9. 完成标准建议

根 `AGENTS.md` SHOULD 显式写出完成标准：

- 代码层：测试通过、lint 通过、没有明显回归
- 文档层：roadmap/spec 已同步
- 交接层：长任务已落盘到 `session-notes` 或 spec

---

**版本**: v1.3
