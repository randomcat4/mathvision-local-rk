# 当前本地接口

状态：只记录 `src/localPreview.ts` 当前实际实现。

## 接入方式

生产前端仍按原请求形状访问 `https://app.mathvision.ai/api/v1`。在 `127.0.0.1` 或 `localhost` 运行时，本地适配器拦截这些请求并转交浏览器内的 `LocalRepository`。

没有单独监听的 HTTP 后端。这里列出的“接口”是浏览器内请求兼容层，不应描述为远端服务。

## 已支持读取

| 请求形状 | 行为 |
|---|---|
| `GET …/workspace/explorer/snapshot` | 返回本地 Explorer 快照 |
| `GET …/workspace/explorer/chats` | 返回本地聊天列表 |
| `GET …/workspace/explorer/folders/:id/path` | 返回本地文件夹路径 |
| `GET …/me/access` | 返回固定本地访问能力 |
| `GET …/me/profile` | 返回本地个人资料 |
| `GET …/chats` | 返回未归档聊天 |
| `GET …/chats/archived` | 返回已归档聊天 |
| `GET …/chats/shared` | 返回空列表 |
| `GET …/chats/:id` | 返回本地聊天 |
| `GET …/agent-harness/runs/:id` | 返回固定 Gao Pro 工作流运行 |
| `GET …/users/:user/chats/:chat/agent-harness-runs/:id` | 以原版管理视图形状返回固定 Gao 运行 |
| `GET …/folders` | 返回本地文件夹 |

若 GET 请求不属于上述集合，适配器为保持页面可启动会返回空形状，并附带本地诊断字段。该行为是兼容措施，不是完整实现。

## 已支持写入

| 请求形状 | 行为 |
|---|---|
| `PATCH …/me/profile` | 更新个人资料 |
| `PATCH …/me/tour-guide` | 保存原版首次使用提示的完成状态 |
| `POST …/chats/start` | 创建并启动本地聊天壳 |
| `POST …/chats` | 创建聊天 |
| `PUT …/chats/:id` | 更新聊天 |
| `DELETE …/chats/:id` | 删除聊天 |
| `POST …/chats/:id/archive` | 归档聊天 |
| `POST …/chats/:id/restore` | 恢复聊天 |
| `POST …/chats/:id/move-to-folder` | 移动聊天 |
| `POST …/folders` | 创建文件夹 |
| `PATCH …/folders/:id` | 更新文件夹 |
| `PATCH …/folders/:id/parent` | 移动文件夹 |
| `DELETE …/folders/:id` | 删除文件夹 |

## 明确未实现

所有其他写请求返回：

```json
{
  "detail": "Local endpoint is not implemented: METHOD PATH"
}
```

状态码为 501。真实推理、协作、分享、云端文件和 RK 命令均不在当前本地适配器能力内。
