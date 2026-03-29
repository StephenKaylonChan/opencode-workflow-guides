---
name: testing-trophy
description: 设计或审查测试策略时使用，强调关键用户链路优先的验证方式
compatibility: project
metadata:
  owner: team
---

# Testing Trophy

当需要设计或评审测试时：

1. 先识别关键用户路径和业务风险
2. 优先保证关键交互链路有集成测试
3. 单元测试用于复杂逻辑和边界分支
4. E2E 只覆盖少量最关键场景
5. 输出测试缺口和优先补强建议
