# [项目名称]

> [一句话描述项目目标]

## Project Structure

- `apps/web/` - 前端应用
- `apps/api/` - 后端服务
- `packages/shared/` - 共享代码
- `docs/` - roadmap、spec、架构与开发文档

## Common Commands

```bash
pnpm install
pnpm dev
pnpm test
pnpm lint
pnpm build
```

## Rules

- MUST 先探索相关代码，再做改动
- MUST 复杂需求先落到 `docs/specs/`
- MUST 在提交前通过测试和 lint
- MUST 在功能完成后同步 `docs/roadmap/` 或对应 spec
- MUST NOT 读取或提交 `.env`、密钥、密码等敏感文件
- MUST NOT 无理由重写大段已稳定代码

## Definition of Done

- 测试通过
- lint 通过
- 边界条件已检查
- spec 或 roadmap 已同步
- 长任务已写入 `.opencode/session-notes.md`
