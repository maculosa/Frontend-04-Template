# 学习笔记 --- 重学HTML、浏览器API

## Range API

- 把一个元素所有的子元素逆序

        1                   5
        2                   4
        3                   3
        4                   2
        5                   1

- var range = new Range()
- range.setStart(element, 9)
- range.seEnd(element, 4)
- var range = document.getSelection().getRangeAt(0)


- var fragment = range.extractContents()
- range.insertNode(document.createTextNode('aaaa'))


## CSSOM

DOM API 约等于 HTML 对象化抽象

### document.styleSheets

### Rules

- document.styleSheets[0].cssRules
- document.styleSheets[0].insertRule("p { color: pink;}", 0)
- document.styleSheets[0].removeRule(0)

- CSSStyleRule
    - selectorText String
    - style K-V结构

getComputedStyle(document.querySelector('a'), "::before")


### CSSOM View

#### window

- window.innerHeight, window.innerWidth  viewport ☆☆☆☆☆
- window.outerWidth, window.outerHeight  浏览器窗口总共占得尺寸
- window.devicePixelRatio  会经常打交道的值 ☆☆☆☆☆
- window.screen
    - window.screen.width
    - window.screen.height
    - window.screen.avaliWidth   跟设备的硬件相关的信息
    - window.screen.availHeight

#### Window API

- window.open("about:blank", " blank", "width=100, height=100,left=100, right=100" )
- moveTo(x, y)
- moveBy(x, y)
- resizeTo(x, y)
- resizeBy(x, y)


#### scroll

- scrollTop
- scrollLeft
- scrollWidth
- scrollHeight
- scroll(x, y)
- scrollBy(x, y)
- scrollIntoView()

- window
    - scrollX
    - scrollY
    - scroll(x, y)
    - scrollBy(x, y)

#### layout ☆☆☆☆☆☆(重点)

- getClientRects()
- getBoundingClientRect()


### 其他 API

#### 标准化组织

- khronos
    - WebGL
- ECMA
    - ECMAScript
- WHATWG
    - HTML
- W3C
    - webaudio
    - CG/WG

全部 API 的分类和整理

