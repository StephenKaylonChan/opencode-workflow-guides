重要：使用 OpenCode Agent 执行这个任务。

当前项目已经有 OpenCode 配置，但 `guides-opencode` 已更新。你的任务是做增量升级，不是重建。

先阅读以下文档：

- `~/Downloads/00_project/guides-opencode/README.md`
- `~/Downloads/00_project/guides-opencode/01-AGENTS配置架构指南.md`
- `~/Downloads/00_project/guides-opencode/02-自动化配置指南.md`
- `~/Downloads/00_project/guides-opencode/03-Skills与Commands配置.md`
- `~/Downloads/00_project/guides-opencode/04-工作流最佳实践.md`

## Phase 1：审计现状

读取当前项目中的：
- `AGENTS.md`
- `opencode.json`
- `.opencode/commands/`
- `.opencode/skills/`
- `.opencode/plugins/`
- `docs/roadmap/`
- `docs/specs/`

## Phase 2：差异分析

输出差距清单：
- 缺失的配置
- 过时的配置
- 可选升级项

暂停等待确认。

## Phase 3：执行升级

按确认后的差距清单增量更新。

## Phase 4：验证

验证文件格式、路径引用、命令发现和规则一致性。

最后输出升级报告。
