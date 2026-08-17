# 第三方与上游边界

状态：来源记录，不是许可结论。

## 当前原则

- 本仓库包含从 MathVision 生产构建恢复的应用代码及其冻结第三方边界。
- 项目没有为了规避许可证而用自行想象的实现替换上游代码。
- 当前仓库必须保持私有，直到负责人完成上游代码、字体、图标、样式和第三方包的许可审查。
- 本文不授予、推断或否定任何上游权利。

## 已作为 npm 包接回的依赖

精确版本以 `package-lock.json` 为准，当前包括：

- React / React DOM；
- Axios；
- KaTeX；
- pdfjs-dist；
- lucide-react。

开发工具包括 TypeScript、Vite、tsx、Prettier、Babel 工具和 webcrack。

## 仍保留的冻结边界

- 纯第三方分包清单：`reports/vendor-modules.txt`；
- 应用与第三方混合边界：`reports/mixed-boundary-modules.txt`；
- 外部依赖分析：`reports/external-dependencies.md`；
- 分包边界说明：`reports/module-boundaries.md`。

在替换冻结副本前，应逐项记录：上游包名、精确版本、来源 URL、许可证、生产分包证据、替换差异和回归测试。

## 品牌处理

按当前项目约束，唯一主动删除的品牌工件是 MathVision Logo。不得将 Logo 删除误写为完整品牌或许可清理完成。

