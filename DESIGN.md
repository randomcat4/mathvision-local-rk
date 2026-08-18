# Design System

## Visual Theme

RK 原生研究工作台采用“科学仪器”主题：默认以低亮度石墨画布承载实时研究图，同时提供高亮度白天模式。节点像安静的仪器读数；活动路径拥有极细光线和微小移动光粒。界面整体克制，光只用于证明当前有工作发生。

## Color

- Canvas: `oklch(12% 0.012 285)`
- Surface 1: `oklch(16% 0.014 285)`
- Surface 2: `oklch(20% 0.016 285)`
- Border: `oklch(34% 0.025 285)`
- Primary text: `oklch(92% 0.012 285)`
- Secondary text: `oklch(70% 0.018 285)`
- Active violet: `oklch(72% 0.16 295)`
- Active cyan: `oklch(77% 0.12 205)`
- Success: `oklch(72% 0.12 155)`
- Pause: `oklch(78% 0.13 78)`
- Rejected: `oklch(63% 0.10 28)`

颜色是语义词汇。稳定的紫色表示界面主操作，青色表示动态派生，绿色表示完成，琥珀表示人工暂停，低饱和红表示否决或失败。运行光效可独立选择研究紫、呼吸蓝、深绯红、雷蛇绿、冰川青或琥珀脉冲，只作用于正在运行、当前选中的节点与活动路径，不重写上述语义色。

## Typography

使用系统无衬线字体栈，避免网络字体与布局跳动。正文最小 `1rem`，元数据使用 `0.75rem`，数据使用等宽数字。深色背景上的正文增加行高与轻微字距以补偿视觉重量。

## Layout

- 桌面：顶栏 + 左侧研究画布 + 右侧详情检查器。
- 窄桌面/平板：检查器缩窄，画布保持可平移的固定研究空间。
- 手机：画布在上、详情在下，核心控制仍可触达，不依赖悬浮。
- 节点位置在增量更新中保持稳定；新节点从父节点附近生长，避免全图重排。
- 大型历史图使用 Dagre 分层布局；布局结果在运行时适配层只计算一次，选择节点不会重新计算或重绘边层。

## Components

- Research node: 8–12px 圆角、1px 语义边线，无大面积阴影。
- Active flow frame: 独立装饰层，短白色光芯 + 紫/青衰减 + 两层受控模糊。
- Research edge: 约 1px 的贝塞尔曲线，活动路径附带移动光粒；汇合与修复使用明确线型和标签。
- Inspector: 通过分隔线和间距组织信息，不嵌套卡片。
- Controls: 统一 44px 命中区域，完整 hover/focus/active/disabled 状态。

## Motion

- 普通交互 150–220ms，使用 ease-out-quint。
- 活动节点呼吸周期约 3.6s，幅度很小。
- 流光周期 4.2–6s；同屏只允许少量持续动画。
- 新节点出现时只做一次 260ms 的淡入与轻微缩放。
- 减少动态效果下关闭所有循环动画和移动光粒。

## Reference Assets

- `docs/concepts/rk-live-tree-b-flow-glow.png`
- `docs/references/redskillhub-flow-reference.jpg`
- `docs/references/rk-line-language-reference.jpg`
