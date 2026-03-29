# 快速上手

## 这个仓库是什么

这是一个 OpenCode 工作流指南与模板仓库。

你在这里通常会做三类工作：

- 更新主指南 `README.md` 和 `00-04`
- 更新 `templates/base-project/`
- 跟进 OpenCode 官方或社区实践，并把结论写回文档

## 新开 OpenCode 会话时怎么开始

推荐顺序：

1. 打开仓库根目录启动 OpenCode
2. 先执行 `/catchup`
3. 看当前阶段和 `.opencode/session-notes.md`
4. 再决定本轮是：
   - 文档更新
   - 模板更新
   - 调研
   - 发布收尾

## 常用命令

- `/catchup`：恢复当前维护上下文
- `/audit`：做版本同步和模板一致性检查
- `/docs`：刷新仓库自身文档
- `/review`：只读审查当前改动
- `/test`：跑文档一致性检查
- `/handoff`：写交接状态
- `/release`：检查是否需要版本升级或阶段推进

## 日常维护节奏

### 小改动

- 直接改文档或模板
- 跑 `/test`
- 必要时 `/review`

### 中等改动

- 先 `/catchup`
- 探索相关文档
- 更新主文档和模板
- 跑 `/audit` 和 `/test`

### 较大改动

- 先调研并写 `research/`
- 再改主文档和模板
- 更新 roadmap
- 最后 `/handoff`

## 交接原则

- 当前关注点写到 `.opencode/session-notes.md`
- 当前 roadmap phase 保持同步
- 如果本轮改动影响方法论或模板能力，README 版本记录也要同步
