# 还原状态

更新时间：2026-08-17

## 可运行基线

- 已冻结 237 个公开静态资源，其中包括 170 个 JavaScript 分包和 5 个 CSS 分包；原件与格式化副本均保留在 `recovered/`。
- 97 个应用候选分包全部恢复为可读 JSX，恢复失败数为 0；未伪造不存在的 source map。
- 56 个原应用分包已经切到可维护源码入口；其中 215 个文件进入严格 TypeScript 检查，`@ts-nocheck` 数量为 0。
- 原先最后 7 个大型 JSX 视图现在由 `src/views/recovered` 下的真实 `.tsx` 文件直接驱动，不再从冻结 `.jsx` 运行；它们单独执行语法检查和完整生产构建，不冒充严格类型完成。
- 当前有 62 项行为回归测试。严格类型检查、恢复视图语法检查、测试、Vite 生产构建和 Logo 残留门禁均通过。
- 本地预览已经删除登录主链：不创建 Keycloak、不刷新令牌、不生成登录跳转。聊天、文件夹、Explorer 与个人资料的支持操作保存在本地 repository；没有复制生产令牌、Cookie 或浏览器存储。
- 已按生产包内的精确版本证据接回 `lucide-react@1.16.0`、`pdfjs-dist@4.10.38`、`axios@1.19.0` 与 `katex@0.16.45`。它们服务于已提升源码；冻结视图岛中的重复内嵌副本暂不冒险机械替换。
- `LatexProjectFolderExpansionContext` 已完成真实切换：文件树、目录展开持久化、重命名、移动、复制、删除、设为主文档和上下文菜单均由源码实现提供，不再运行冻结同名分包。

## 已恢复的主要产品能力

- 聊天：请求与响应映射、消息分页和选择、缓存、NDJSON 流、pending agent 状态/流、引用、附件、反馈、消息工具、assistant 结构化响应。
- Pro 工作流图：review join / ready gate 收缩、边去重、节点布局、节点状态、流式 reasoning、步骤跳转、分轮 PDF 预览与下载。
- LaTeX/PDF：项目与文件 API、命名、附件、目录树、展开状态、创建抽屉、项目聊天、写作面板、编译队列、PDF 加载和预览。
- 工件和结构化结果：生成工件、计算结果、可视化、文献/引用、next steps、writeup。
- 页面和通用交互：访问状态、法律页、分享入口、公告、tour 接口、下载、复制、快捷键、响应式面板状态。

## 七个生产视图的当前形态

下列 7 个大型纯应用分包已迁为可编辑、可解析、实际参与运行的 TSX；内部局部变量名仍有生产压缩遗留，因此不计入“严格提升”分母：

- `DeferredThreadMessageList-BRB1t-55`
- `NotebookWorkspaceContent-Cmckz3Qo`
- `UserMessage-DN7iPijg`
- `WorkspaceExplorer-BkU1kYog`
- `_problemId.lazy-1puKhYPi`
- `public---7j118Y`
- `route.lazy-B7bltzFg`

Notebook 中的 29 KB dnd-kit sortable 实现已从视图隔离到 `src/vendor/recovered/dndKitSortableRuntime.tsx`；Notebook 数据映射、冲突队列与 hooks 已从聊天路由隔离到 `src/recovered/notebooks/notebookRuntime.ts`。npm registry 当前从本机被拒绝连接，所以 dnd-kit 尚未伪报为官方包接回。

另有 19 个纯第三方分包和 22 个应用/第三方混合边界，清单分别在 `reports/vendor-modules.txt` 与 `reports/mixed-boundary-modules.txt`。

## 可验证边界

- 原站没有公开 source map（请求返回 403）；可以恢复语义、类型和接口，但不能声称找回被 minifier 删除的原始局部变量名、注释或原目录结构。
- 登录态原站的 Chrome 标签页发现成功，但只读 DOM、可见控件和限定字段读取均在 30–120 秒超时。没有重载、点击或修改原站，也没有把这项记成页面级对照通过。
- 当前最高可信口径是 `SOURCE_RECONSTRUCTED_WITH_RECOVERED_TSX_VIEWS`。严格恢复模块为 `STRICTLY_CHECKED`；7 个生产视图为 `SYNTAX_AND_BUILD_CHECKED`，不能记为原始源码逐字恢复。

## 质量口径

一个分包只有同时满足“可追溯原分包、具名实现、严格类型、无免检、原调用方实际接入、行为测试或生产构建证据”才计为已提升。格式化、能运行、增加声明文件或机械删注释均不计入 49 个已提升模块。
