# 恢复视图边界

更新时间：2026-08-17

| 运行视图 | 直接职责 | 当前源码边界 | 主要剩余耦合 |
| --- | --- | --- | --- |
| `UserMessage` | 用户/助手消息与工具结果 | `src/views/recovered/UserMessage-DN7iPijg.tsx`，已补回 `UserMessage` / `AssistantMessage` 具名导出 | MUI 与消息气泡仍来自混合分包 |
| `DeferredThreadMessageList` | 虚拟消息列表、历史加载 | `src/views/recovered/DeferredThreadMessageList-BRB1t-55.tsx` | TanStack 查询与虚拟列表仍来自生产上下文 |
| `NotebookWorkspaceContent` | Notebook 单元格 UI | `src/views/recovered/NotebookWorkspaceContent-Cmckz3Qo.tsx` | dnd-kit core provider 仍由混合分包提供 |
| `WorkspaceExplorer` | 文件夹、聊天、Notebook Explorer | `src/views/recovered/WorkspaceExplorer-BkU1kYog.tsx` | Explorer 查询/菜单仍与聊天菜单分包相连 |
| `ResearchProblemRoute` | 研究问题详情页 | `src/views/recovered/_problemId.lazy-1puKhYPi.tsx` | Router、Query 和 MUI 上下文来自主入口 |
| `MathHarnessGraphDialog` | Math Harness 图与运行详情 | `src/views/recovered/public---7j118Y.tsx` | Cytoscape 仍在独立冻结 vendor 分包 |
| `ChatsRoute` | 路由装配与页面壳 | `src/views/recovered/route.lazy-B7bltzFg.tsx` | Router、Query 与生产主入口仍保留兼容别名 |

已完成的上游拆分：

- 登录/账户：运行入口已固定本地身份，Keycloak 实现从 assembled entry 删除。
- 本地数据：`src/local/localRepository.ts` 接管聊天、文件夹、Explorer snapshot 和 profile。
- Notebook 数据：请求映射、缓存合并、冲突串行队列及 hooks 位于 `src/recovered/notebooks/notebookRuntime.ts`。
- Notebook 拖拽：从视图抽出的真实生产 dnd-kit sortable 实现位于 `src/vendor/recovered/dndKitSortableRuntime.tsx`。
- 聊天工作区：聊天布局、右侧工作区和 Explorer 容器已从主路由抽到 `src/recovered/chat/ChatsWorkspace.tsx`。

检查口径：215 个可维护模块做严格类型检查；7 个恢复视图、2 个恢复支持模块、1 个恢复 vendor 模块做 TypeScript 语法检查和真实生产构建。二者在报告中分开计数。
