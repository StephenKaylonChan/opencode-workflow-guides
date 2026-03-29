# guides-opencode 架构概览

## 仓库目标

本仓库维护一套面向 OpenCode 的通用协作指南。

目标不是提供某个具体业务项目的最佳实践，而是提供：
- 一套可迁移的方法论
- 一套可复制的 `base-project` 模板
- 一套持续升级 OpenCode 配置体系的方法

## 模块划分

- `README.md`：总览、版本记录、入口
- `00-04`：核心指南正文
- `prompt-*.md`：让 agent 执行初始化、迁移、升级、更新的 prompt 模板
- `templates/base-project/`：可直接复制到实际项目中的基础 OpenCode 脚手架
- `docs/roadmap/`：本仓库自身的演进节奏
- `research/`：调研记录和外部实践沉淀

## 信息流

典型维护路径如下：

1. 研究 OpenCode 官方能力和社区实践
2. 在 `research/` 中落盘调研结果
3. 更新 `00-04` 主指南
4. 同步更新 `templates/base-project/`
5. 更新 `README.md` 版本记录
6. 更新 `docs/roadmap/`

## 关键设计原则

- 文档与模板必须双向同步
- 方法论与配置层要明确分离
- 仓库自身必须尽量使用自己推广的配置方式管理自己
- 主指南保持高层抽象，模板负责落地细节

## 关键风险

- 文档升级了，但模板没同步
- 版本号不一致
- roadmap 状态落后于实际进展
- 为了“兼容 Claude”而重新引入 Claude Code 专属概念，导致 OpenCode 语义变混乱
