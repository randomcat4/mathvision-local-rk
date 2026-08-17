# 当前数据模型

状态：现状模型与明确缺口。

## 浏览器本地实体

`LocalRepository` 维护一个带版本号的 localStorage 快照，核心实体为：

| 实体 | 用途 |
|---|---|
| Local profile | 固定本地用户的显示资料和偏好 |
| Local chat | 聊天标题、状态、目录归属和兼容字段 |
| Local folder | Explorer 目录结构 |
| Preferences | 界面语言等本地设置 |

本地聊天中的 `active_run` 和 `latest_run` 当前为空；创建聊天并不等于启动了真实 Agent。

## 已恢复但尚未统一持久化的对象

- 消息、引用、附件和结构化 assistant 输出；
- workflow node 和条件边；
- Notebook、cell、cell run、工具调用和工件；
- LaTeX 项目、目录树、编译和 PDF；
- 文献来源、引用与可视化结果。

这些对象仍沿用生产请求形状或恢复视图内部状态，尚未形成统一的本地研究数据库。

## 目标中缺失的一等对象

项目下一阶段需要新增 `ResearchThread`，至少包含：

```ts
interface ResearchThread {
  threadId: string
  runId: string
  workItemId: string
  attemptId?: string
  parentThreadId?: string
  forkedFromMessageId?: string
  state: "IDLE" | "RUNNING" | "BLOCKED" | "COMPLETED"
  messageRevision: number
  lastActivityCursor?: string
}
```

这只是目标模型，不是当前实现。迁移前必须先决定本地持久化引擎、消息版本规则和 RK 标识符映射。

