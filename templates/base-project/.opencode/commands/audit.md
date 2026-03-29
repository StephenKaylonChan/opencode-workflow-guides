---
description: 运行一次项目健康检查，优先发现配置、文档和验证层面的风险
agent: plan
subtask: true
---

请执行一次项目审计。

当前 git 状态：
!`git status --short`

最近提交：
!`git log --oneline -5`

检查至少覆盖：
1. `AGENTS.md` 是否仍准确
2. `opencode.jsonc` 的 permissions / instructions / formatter 是否合理
3. `docs/roadmap/` 和 `docs/specs/` 是否滞后
4. 当前测试、lint、构建命令是否需要修正

输出：
- 高优先级问题
- 中优先级问题
- 建议的下一步
