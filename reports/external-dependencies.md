# 外部依赖还原账

更新时间：2026-08-17

这份账把“已经从第三方包接回”和“只在冻结生产分包中识别到”分开记录。安装一个包并不等于完成迁移；只有真实调用方改接、类型检查、测试、生产构建和浏览器回归均通过，才记为已接回。

## 已接回

| 包 | 生产版本证据 | 当前接入 | 状态 |
| --- | --- | --- | --- |
| `react` / `react-dom` | 主分包记录 renderer/reconciler `19.2.5` | npm 精确版本 `19.2.5`；冻结入口仍拥有 renderer，已提升源码通过生产 React 适配器共用 dispatcher | 部分接回；完整替换 renderer 属架构迁移 |
| `lucide-react` | 多个生产分包许可证头写明 `v1.16.0` | 所有已提升 runtime 的 `createLucideIcon` 改用 npm 包；Vite 将该包定向到同一生产 React dispatcher | 已接回到可维护源码 |
| `pdfjs-dist` | PDF 分包内 `version = 4.10.38`、`apiVersion = 4.10.38` | PDF 加载、worker 和 canvas 渲染 seam 改用 npm 包及其 worker URL | 已接回到可维护源码 |
| `axios` | 主分包常量 `VERSION = 1.19.0` | 已提升 API 客户端改用 npm 包；保留 30 秒刷新阈值、Bearer 注入、响应错误字段和 localhost fetch adapter | 已接回到可维护源码 |
| `katex` | 生产 CSS 的 `.katex-version:after` 为 `0.16.45` | 主入口样式改用 npm 官方 CSS/字体 | 样式已接回；冻结 Markdown 渲染器仍含生产实现 |

## 已精确识别、尚在冻结边界

| 包 | 识别版本 | 为什么没有直接替换 |
| --- | --- | --- |
| `cytoscape` | `3.34.0` | 位于 44 万字节冻结图分包，公开导出与业务图逻辑混合 |
| `ag-grid` | `32.3.9` | 位于 90 万字节 Notebook 冻结视图，组件注册、样式和业务列定义混合 |
| `three` | revision `185`，对应 `0.185.0` | 位于 94 万字节 3D 数学场景分包，并含 worker/渲染状态 |
| `@react-three/fiber` | `9.6.1` | 与上项及 React reconciler `19.2.0` 绑定，不能孤立换包 |
| `plotly.js` strict bundle | `3.7.0` | 独立生产分包约 5.18 MB；当前仍由冻结可视化视图按需加载 |

## 尚不能精确钉版本

- MUI、TanStack Query/Router、React Flow、Markdown/unified、Monaco 与 Keycloak JS 的代码特征已确认，但生产包没有保留足够的单一版本标记。
- 这些库与主入口或混合分包缠在一起。先安装“看起来接近”的版本会制造第二套上下文、主题、缓存或路由器，页面可能构建成功后才在运行时崩溃，因此没有这样做。

## 七个生产视图的实际问题

它们不是“不能运行”，而是暂时不适合作为日常维护源码：

- 原始局部变量名、接口名和注释已被压缩删除，格式化只能恢复结构，不能恢复作者原名。
- 一个文件同时承担页面、数据查询、缓存、UI 状态和第三方组件装配，改一处容易跨边界影响别处。
- props 和服务端返回类型只能从使用处反推，尚没有完整静态类型证明。
- 它们直接引用冻结分包的短导出名；在第三方包全部建立兼容 seam 前，机械拆包容易造成 React context、MUI theme、TanStack cache 等重复实例。

它们现已作为 `src/views/recovered` 下的 TSX 直接参与运行；语法检查、生产构建和浏览器回归通过，但还没有达到严格类型检查口径。

## 本轮第三方接回阻塞

- Notebook 内嵌实现已确认属于 dnd-kit 新 API 家族，并已从视图隔离为独立恢复模块。
- 尝试安装 `@dnd-kit/react@0.5.0`、`@dnd-kit/dom@0.5.0`、`@dnd-kit/helpers@0.5.0` 时，系统到 `registry.npmjs.org` 的连接被主动拒绝；等待超过两分钟后停止，没有留下半安装依赖。
- 因而当前状态是“真实生产实现已隔离，官方 npm 替换待网络恢复”，不是“官方包已接回”。
