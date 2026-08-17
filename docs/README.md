# 项目文档

本目录同时记录两类内容：**已经存在的系统事实**与**准备建设的目标系统**。每篇文档都会明确属于哪一类，避免把路线图冒充实现。

## 阅读顺序

1. [`PROJECT.md`](PROJECT.md)：为什么做、要做成什么、什么不在范围内。
2. [`ARCHITECTURE.md`](ARCHITECTURE.md)：当前恢复前端的真实架构。
3. [`RECOVERY.md`](RECOVERY.md)：恢复方法、证据链和可信边界。
4. [`LOCAL_API.md`](LOCAL_API.md)：当前本地请求适配器真正支持的接口。
5. [`DATA_MODEL.md`](DATA_MODEL.md)：现有本地数据模型与缺失对象。
6. [`RK_INTEGRATION.md`](RK_INTEGRATION.md)：目标架构以及 MathVision 与 RK 的职责划分。
7. [`ROADMAP.md`](ROADMAP.md)：分阶段交付、验收条件和停止门。
8. [`DEVELOPMENT.md`](DEVELOPMENT.md)：开发、验证和代码修改规则。
9. [`THIRD_PARTY.md`](THIRD_PARTY.md)：第三方来源与许可处理边界。

## 事实来源优先级

1. 实际运行代码与锁文件。
2. 自动生成的 `reports/` 清单。
3. `RECOVERY_STATUS.md` 中带验证口径的统计。
4. 本目录中的解释性文档。

若文档与代码冲突，以代码和可复现验证为准，并修正文档。

