# 浏览器工作原理

## 浏览器总论 | 浏览器工作原理

![images](./assets/browser-render.png)

## 状态机 | 有限状态机

有限状态机处理字符串

### 有限状态机

- 每一个状态都是一个机器
  - 在每一个机器里，我们可以做计算、存储、输出......
  - 所有的这些机器接受的输入是一致的
  - 状态机的每一个机器本身是没有状态的，如果我们用函数来表示的话，它应该是纯函数（无副作用）
- 每一个机器知道下一个状态
  - 每个机器都有确定的下一个状态（Moore）
  - 每个机器根据输入决定下一个状态（Mealy（比较使用的））

状态机里面的函数是纯函数（没有副作用）
纯函数是没有外部输入，可以有输出的函数

摩尔状态机（简单版状态机）
过程：
<<<<<<< HEAD
状态 a 不管接受什么输出，它一定可以进入状态 b, 依此类推.

### JS中的有限状态机（Mealy）

```js
// 每个函数是一个状态
function state(input) //函数参数就是输入
{
  // 在函数中，可以自由地编写代码，处理每个状态地逻辑
  return next; // 返回值作为下一个状态
}

/////////// 调用 //////////
while(input) {
  // 获取输入
  state = state(input); // 把状态机的返回值作为下一个状态
}
```

> TIP
> 莫尔型 `next` 与 `input` 无关

### 3. 状态机 | 不使用状态机处理字符串（一）

- 在一个字符串中，找到字符 " a"

```js
let str = 'sdfardsjk afjwelfsdf';

const regRex = /a/ig;

regRex.test(str)

```

## HTTP请求

### 第一步

- 设计一个 HTTP请求的类
- content type 是一个必要的字段，要有默认值
- body 是 KV格式
- 不同的 content-type 影响 body 的格式

### 第二步

- 在 Request 的构造器中收集必要的信息
- 设计一个 send 函数，把请求真实发送到服务器
- send 函数应该是异步的，所以返回Promise

> 进入第三步之前：
```
HTTP/1.1 200 OK                              # status line
                                             # headers
Content-Type:text/html                      
Date: Mon, 23 Dec 2019 06:"46:19 GMT
Connection: keep-alive
Transfer-Encoding: chunked

26                                           # chunk body  0x0 得到 空的 chunk 来且分空的 body
<html><body> Hello World</body></html>
0
```

### 第三步 response 解析

- Response 必须分段构造，所以我们要用一个 ResponseParser 来 “装配”
- ResponseParser 分段处理 ResponseText, 我们用状态极来分析文本的结构


=======
状态 a 不管接受什么输出，它一定可以进入状态 b, 依此类推





### 使用有限状态机处理字符串

- 在一个字符串中，找到字符 "ab"

```js
function match(str) {
    for (let c of str) {
        if(c == 'ab')
            return true;
    }
    return false;
}

// 示例：
function match(str) {
    let foundA = false;
    for(let c of str) {
        if(c == 'a') {
            foundA = true;
        } else if(foundA && c == 'b') {
            return true;
        } else {
            foundA = false;
        }
    }
    return false;
}
```

- 在一个字符串中，找到字符 "abcdef"

```js
function match(str) {
    let foundA = false;
    for(let c of str) {
        if(c == 'a') {
            foundA = true;
        } else if(foundA && c == 'b') {
            return true;
        } else {
            foundA = false;
        }
    }
    return false;
}
// 使用状态机处理字符串
function match(str) {
    let state = start;
    for(let c of str) {
        state = state(c);
    }
    return state === end;
}

function start(c) {
    if(c == 'a') {
        return foundA;
    } else {
        return start;
    }
}

function end(c) {
    return end;
}

function foundA(c) {
    if(c === 'b') {
        return foundB;
    } else {
        return start(c);
    }
}

function foundB(c) {
    if(c === 'c) {
        return foundC;
    } else {
        return start(c);
    }
}

function foundC(c) {
    if(c === 'd') {
        return founcD;
    } else {
        return start(c);
    }
}

function foundD(c) {
    if(c === 'e') {
        return founcE;
    } else {
        return start(c);
    }
}

function foundE(c) {
    if(c == 'f') {
        return end;
    } else {
        return start(c);
    }
}

```

- 我们如何用状态机处理诸如 "abcabx" 这样的字符串？

```js

```
>>>>>>> b6b27bf2f39ed6e07091b53de370278a07eb5e85
