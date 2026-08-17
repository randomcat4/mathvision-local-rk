# RK 集成设计

状态：目标架构，尚未实现。

## 职责边界

MathVision 恢复前端负责研究者交互；RK 负责数学权威和研究生命周期。二者不能通过页面内部对象直接耦合。

| 前端能力 | RK 能力 | 集成原则 |
|---|---|---|
| Chat | WorkItem / Attempt / WorkerRun | 一个持久线程绑定工作项和可选尝试 |
| Workflow graph | 路线和执行活动 | 形成研究线程图，不冒充事实图 |
| Pro graph dialog | Claim graph | 增加独立事实图模式 |
| Notebook | ComputeTask / ToolRun | 输出默认无事实写入权 |
| Explorer | Research / Route / Thread / Artifact | 用稳定领域标识符组织 |
| LaTeX workspace | Candidate TeX / Paper Review / PDF | 保留摘要、审查和编译工件绑定 |
| Sources | Literature snapshot / review | NO_HIT 不能显示为新颖性已证实 |

## 必需的深接口

### ResearchCatalog

列出、创建和选择研究项目，不泄漏具体 HTTP 请求细节。

### ResearchSnapshot

按一个确定的 research revision 和 contract version 加载研究、路线、工作项、Claim、工具和发布状态。

### ResearchCommandBus

所有有副作用的 RK 操作必须携带 `request_id`、`expected_revision` 和 `expected_contract_version`，并返回可审计 receipt。

### ResearchActivity

以 cursor 订阅活动流，显式处理游标过期、旧查询、结果未知和版本升级，不自动重放结果未知的命令。

### ResearchGraph

分别支持研究线程图和数学事实图。事实图继续保留 `VERIFIED` 与 `RESEARCH_HISTORY` 两种模式，以及依赖闭包和反向影响闭包。

### ArtifactStore

负责内容寻址读取、分块上传、日志追踪和预览。UI 不把浏览器对象 URL 当成持久工件标识符。

## 适配器

- `RkHttpAdapter`：连接真实 RK 本地服务。
- `LocalResearchAdapter`：离线界面开发和确定性测试。
- 未来可增加模型或文献适配器，但不能绕过 RK 权威层。

## 不变量

1. 消息、Notebook 输出和工具成功不能直接产生 VERIFIED Claim。
2. 前端不得自行推断合同版本或吞掉 revision 冲突。
3. 线程图节点与 Claim 图节点使用不同标识符和状态集合。
4. 任何跨图跳转都必须保留来源线程、尝试、工件和 Claim 的明确绑定。
5. 外部调用失败、未运行与返回空结果必须在 UI 中区分。

