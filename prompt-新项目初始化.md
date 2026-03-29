重要：使用 OpenCode Agent 执行这个任务。

你正在为一个全新项目初始化 OpenCode 协作体系。

执行前先完整阅读以下文档：

- `~/Downloads/00_project/guides-opencode/README.md`
- `~/Downloads/00_project/guides-opencode/00-日常使用说明.md`
- `~/Downloads/00_project/guides-opencode/01-AGENTS配置架构指南.md`
- `~/Downloads/00_project/guides-opencode/02-自动化配置指南.md`
- `~/Downloads/00_project/guides-opencode/03-Skills与Commands配置.md`
- `~/Downloads/00_project/guides-opencode/04-工作流最佳实践.md`

目标是建立一套 OpenCode 原生配置，而不是照搬 Claude Code 文件结构。

## 执行流程

### Phase 1：探索项目

识别以下信息并输出项目画像：
- 项目类型
- 技术栈和版本
- 包管理器
- 测试命令
- lint/format 命令
- 目录结构
- 当前开发阶段

输出项目画像后暂停，等待确认。

### Phase 2：设计 OpenCode 配置

根据项目情况设计：
- 根 `AGENTS.md`
- `opencode.json`
- 是否需要局部 `AGENTS.md`
- `.opencode/commands/` 命令集
- `.opencode/skills/` 技能集
- `.opencode/plugins/` 自动化插件
- `docs/roadmap/` 和 `docs/specs/`

输出设计摘要后暂停，等待确认。

### Phase 3：落地基础结构

创建：
- `AGENTS.md`
- `opencode.json`
- `.opencode/commands/`
- `.opencode/skills/`
- `.opencode/plugins/`
- `.opencode/session-notes.md`
- `docs/roadmap/README.md`
- `docs/specs/`

### Phase 4：填充初始内容

必须完成：
- `AGENTS.md` 项目规则
- `opencode.json` 基础配置
- 一个 `catchup` command
- 一个 `handoff` command
- 一个 `spec` command
- 一个 `.env` 保护 plugin
- 一个通知 plugin
- 初始 roadmap

### Phase 5：验证

实际检查：
- 文件结构是否存在
- JSON 是否合法
- 命令引用路径是否正确
- 文档里的命令是否和项目实际一致

最后输出：
- 创建了哪些文件
- 关键设计决策
- 后续建议安装的 command/skill/plugin
