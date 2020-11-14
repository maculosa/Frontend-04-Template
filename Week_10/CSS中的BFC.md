# CSS中的BFC

## 什么是 BFC

BFC(Block Formatting Context) 格式化上下文，是Web页面中盒模型布局的CSS渲染模式，指一个独立的渲染区域或者说是一个隔离的独立容器。

## 形成 BFC 的条件

1. 浮动元素，`float` 除 `none` 以外的值；
2. 定位元素，`position`（`absolute`, `fixed`）;
3. `display` 为以下其中之一的值 `inline-block`, `table-cell`, `table-caption`;
4. `overflow` 除了 `visible` 以外的值（`hidden`, `auto`, `scroll`）;

## BFC的特性

1. 内部的 Box 会在垂直方向上一个接一个的放置；
2. 垂直方向上的距离由 margin 决定；（外边距折叠）
3. BFC 的区域不会与 float 的元素区域重叠；
4. 计算 bfc的高度时，浮动元素也参与计算；
5. BFC就是页面上的一个独立容器，容器里面的子元素不会影响外面的元素。
