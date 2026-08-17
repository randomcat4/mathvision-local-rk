# 开发与验证

状态：当前工程操作规则。

## 环境

- Node.js 与 npm；
- 依赖版本由 `package-lock.json` 固定；
- 本地预览默认使用 `127.0.0.1:4173`。

## 常用命令

```powershell
npm install
npm run dev
npm run typecheck
npm run check:recovered-syntax
npm test
npm run build
npm run verify:logos
npm run verify
```

## 修改规则

1. 恢复阶段优先保持行为等价，不顺手重做产品设计。
2. 不删除 `recovered/`、`reports/` 或装配脚本中的来源证据。
3. 不把 `@ts-nocheck`、空声明或强制断言计作类型恢复。
4. 改动生产短导出名时，必须同步检查兼容层和所有调用方。
5. 将冻结实现替换为第三方包前，必须核对精确版本和行为差异。
6. 本地未实现能力必须返回显式错误，不能静默调用生产服务。
7. 新的 RK 写操作必须有 request ID、revision/contract version 栅栏和 receipt 处理。

## 验收层级

- 小型类型或映射修改：相关测试 + 类型检查。
- 视图拆分：恢复视图语法检查 + 行为测试 + 生产构建。
- 依赖或入口修改：完整 `npm run verify`。
- RK 协议修改：除完整验证外，还需要版本冲突、结果未知和不可用状态测试。

## 文档同步

- 已实现架构变化更新 `ARCHITECTURE.md`、`LOCAL_API.md` 或 `DATA_MODEL.md`。
- 目标变化更新 `PROJECT.md`、`RK_INTEGRATION.md` 和 `ROADMAP.md`。
- 恢复分母变化更新根目录 `RECOVERY_STATUS.md` 及对应机器报告。

