---
description: 使用只读审查 agent 对当前变更做问题导向 review
agent: review
subtask: true
---

请审查当前变更，重点关注：
- bug
- 行为回归
- 风险较高的实现假设
- 缺失测试

当前 git diff：
!`git diff --stat`

如果没有发现明显问题，也要指出剩余验证盲区。
