---
name: audit-checklist
description: 定期审计项目健康度时使用，覆盖规则、测试、文档和配置一致性
compatibility: project
metadata:
  owner: team
---

# Audit Checklist

当需要做常规健康检查时：

1. 检查 `AGENTS.md` 是否仍准确
2. 检查 `opencode.jsonc` 的命令、permissions、instructions 是否与项目现状一致
3. 检查 `docs/roadmap/` 与 `docs/specs/` 是否存在明显滞后
4. 检查测试、lint、构建命令是否仍可用
5. 输出按优先级排序的问题清单
