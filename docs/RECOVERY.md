# 源码恢复说明

状态：当前事实与可信边界。

## 恢复原则

- 每项实现都能追溯到冻结生产分包。
- 不用重新设计的代码替代未知实现。
- 不为了许可证推测而偷偷重写功能。
- 格式化、能构建或添加声明文件不等于完成可维护恢复。
- 原调用方必须实际切到具名源码，才计入提升分母。

## 来源链

```text
冻结静态资源
  → recovered/chunks       格式化生产分包
  → recovered/jsx          机械 JSX 恢复
  → recovered/named        主要名称恢复
  → src/                   可维护实现与运行兼容层
  → reports/               边界和恢复清单
```

恢复命令由 `package.json` 中的 `recover:*`、`assemble`、`analyze` 和 `inventory` 脚本固定。

## 可信等级

| 等级 | 含义 |
|---|---|
| `STRICTLY_CHECKED` | 可追溯、具名、严格类型、实际接入，并通过行为或构建验证 |
| `SYNTAX_AND_BUILD_CHECKED` | 已恢复为实际运行 TSX，但局部仍有压缩遗留 |
| 冻结基线 | 保持生产行为，尚未提升为可维护源码 |

当前整体最高口径是 `SOURCE_RECONSTRUCTED_WITH_RECOVERED_TSX_VIEWS`，不是“原始源码逐字恢复”。

## 七个大型恢复视图

- `DeferredThreadMessageList-BRB1t-55.tsx`
- `NotebookWorkspaceContent-Cmckz3Qo.tsx`
- `UserMessage-DN7iPijg.tsx`
- `WorkspaceExplorer-BkU1kYog.tsx`
- `_problemId.lazy-1puKhYPi.tsx`
- `public---7j118Y.tsx`
- `route.lazy-B7bltzFg.tsx`

这些文件可编辑、可解析并参与生产构建，但暂不计入严格类型完成数。

## 不可恢复的信息

生产站没有公开 source map，因此不能可靠找回：

- 被压缩器删除或改写的原始局部变量名；
- 原始注释；
- 原始目录布局；
- 未进入生产包的源码和测试。

详细数量、外部包接回情况和当前门禁结果见根目录 `RECOVERY_STATUS.md` 与 `reports/`。

