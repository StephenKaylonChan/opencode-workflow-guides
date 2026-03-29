---
description: 检查 guides-opencode 的版本同步、roadmap 同步和模板一致性
agent: plan
subtask: true
---

请对 guides-opencode 执行一次维护审计。

当前文件状态：
!`find . -maxdepth 2 -type f | sort | head -80`

至少检查：
1. `README.md` 与 `00-04` 的版本号是否一致
2. 最近新增能力是否同时更新了主文档和 `templates/base-project/`
3. roadmap 当前 phase 是否符合实际
4. 是否缺少 `docs/architecture/` 或 `docs/development/` 的同步

输出：
- 需要立即处理的问题
- 建议本轮处理的问题
- 后续维护建议
