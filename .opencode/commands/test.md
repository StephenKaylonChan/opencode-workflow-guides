---
description: 执行 guides-opencode 的文档一致性检查
agent: plan
subtask: true
---

请执行一次文档一致性检查。

重点检查：
1. `README.md` 与 `00-04` 的版本号是否一致
2. `docs/roadmap/README.md` 的阶段状态是否与各 phase 文件一致
3. `AGENTS.md` 引用的核心文档是否存在
4. `templates/base-project/` 中是否缺少主文档承诺过的关键配置

如果发现问题，按严重性排序输出。
