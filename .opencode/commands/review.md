---
description: 使用只读 review agent 审查 guides-opencode 当前改动
agent: review
subtask: true
---

请对当前变更做审查，重点看：
- 版本同步
- 主文档与模板偏差
- roadmap 漏更新
- 过时或相互冲突的术语

当前差异参考：
!`find . -maxdepth 2 -type f | sort | tail -60`
