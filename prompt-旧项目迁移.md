重要：使用 OpenCode Agent 执行这个任务。

你的任务是把一个已有的 Claude Code 或混合 AI 协作体系，迁移为 OpenCode 原生体系。

先完整阅读：

- `~/Downloads/00_project/guides-opencode/README.md`
- `~/Downloads/00_project/guides-opencode/01-AGENTS配置架构指南.md`
- `~/Downloads/00_project/guides-opencode/02-自动化配置指南.md`
- `~/Downloads/00_project/guides-opencode/03-Skills与Commands配置.md`
- `~/Downloads/00_project/guides-opencode/04-工作流最佳实践.md`

## 迁移原则

- 保留方法论，不保留旧配置形态
- `CLAUDE.md` 迁到 `AGENTS.md`
- `.claude/skills/` 迁到 `.opencode/commands/` 或 `.opencode/skills/`
- Hooks 迁到 permissions / formatters / plugins
- 依赖 Auto Memory 的部分改成 roadmap/spec/session-notes 持久化

## 执行流程

### Phase 1：审计旧系统

读取并分析以下内容：
- `CLAUDE.md`
- `.claude/settings.json`
- `.claude/skills/`
- `.claude/hooks/`
- `docs/roadmap/`
- `docs/specs/`

输出：
- 可直接复用的规则
- 需要迁移的工作流
- 需要废弃的旧机制

暂停等待确认。

### Phase 2：生成迁移映射

按以下格式输出：

```text
旧文件/机制 -> 新文件/机制 -> 迁移动作
```

重点覆盖：
- 规则
- 自动化
- 命令
- 持久化状态

暂停等待确认。

### Phase 3：执行迁移

创建和更新：
- `AGENTS.md`
- `opencode.json`
- `.opencode/commands/`
- `.opencode/skills/`
- `.opencode/plugins/`
- `.opencode/session-notes.md`

### Phase 4：清理与兼容

- 保留旧文件作为过渡，除非用户明确要求删除
- 如果暂时保留 `CLAUDE.md`，在其中写明已迁移到 OpenCode
- 确保不会因为双体系并存而出现互相冲突的规则

### Phase 5：验证

验证：
- 新文件路径正确
- 配置格式正确
- 关键 commands/skills 可以被发现
- 核心规则没有丢失

最后输出迁移报告。
