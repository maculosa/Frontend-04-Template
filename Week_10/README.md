# 学习笔记---重学CSS

## 正常流的块级排布

float 与 clear

## BFC合并

### Block

- Block Container: 里面有 BFC的
    - 能容纳正常流的盒，里面就有 BFC，想想有哪些？
- Block-level Box: 外面有 BFC 的
- Block Box = Block Container + Block-level Box:
    里外都有 BFC 的

### 设立BFC

- float
- absolutely positioned elements
- block containers (such as inline-blocks, table-cells and table-captions)
  that are not block boxes,
    - flex items
    - grid cell
    - ......
- and block boxes with 'overflow' other than 'visible'

### BFC 合并
- block box && overflow: visible
    - BFC合并与 float
    - BFC合并与边距折叠

> 默认能容纳正常流的盒都能创建BFC，但是只有一种情况例外，就是 Block Box 里外都是 BFC, 并且 overflow 是 visible(相当于没有 BFC).
> 


## Flex 排版

- 收集盒进行
- 计算盒在主轴方向的排布
    - 找出所有Flex元素
    - 把主轴方向的剩余尺寸按比例分配给这些元素
    - 若剩余空间为负数，所有flex元素为0，等比压缩剩余元素
- 计算盒在交叉轴方向的排布
    - 根据每一行中最大元素尺寸计算行高
    - 根据行高 flex-align和 item-align， 确定元素具体位置

## 动画与绘制

### 动画

#### Animation
- @keyframes 定义动画关键帧
- animation 使用关键帧

示例1：
```css
@keyframes mykf {
    from {
        background: red;
    }
    to {
        background: yellow;
    }
}

div {
    animation mykf 5s infinite;
}
```

animation属性：

- `animation-name` 动画名称
- `animation-duration` 动画的时长
- `animation-timing-function` 动画的时间曲线
- `animation-delay` 动画开始前的延迟
- `animation-iteration-count` 动画的播放次数
- `animation-direction` 动画的方向


#### Transition

- transition
    - transition-property 要变换的属性
    - transition-duration 变换的时长
    - transition-timing-function 时间曲线
    - transition-delay 延迟

**timing-function** 是三次贝塞尔曲线[网站](cubic-bezier.com)

使用动画 曲线： ease
> ease-in 用作结束退出
> ease-out 用作进入开始

定义：不可用于直接计算出其

牛顿积分法：推到过程复杂


### 颜色

现实世界中很少能够看见单色光，大多数的光的颜色都是多种颜色混合的。所谓光的颜色就是光的波长，人眼可见的范围大概是 400nm-760nm。自然界中没有纯色光，激光是接近于纯色光。

三原色：红黄蓝（补色的三原色 品红、黄和青）

CMY

印刷行业使用 CMYK 颜色


三基色：红绿蓝

人眼中的感光器官有视锥细胞：能感受到红绿蓝三种颜色

RGB 并不好用：

HSL和 HSV，其中的 H和S 固定的， 
- H: Hue 色相， 360° 色盘中的角度对应的颜色
- S: 纯度, 表示里面的杂色，纯度越高，这个颜色表示越鲜艳越漂亮
- L: 亮度（lightness）
- V: 明度（色值）（value， brightness） 

L、V不同：
V为 100%, 颜色就会变成纯色，最亮的一个纯色
L是一个上下对称的，Lightness 为 0是黑色， 100是纯白色，取纯色是要取一个中间值的。

W3C 采用 HSL，非常重要的颜色表示法


### 绘制

- 几何图形
    - border
    - box-shadow
    - border-radius
- 文字
    - font
    - text-decoration
- 位图
    - background-image

#### 应用技巧
- data uri + svg
- data:image/svg+xml,<svg width="100">...






