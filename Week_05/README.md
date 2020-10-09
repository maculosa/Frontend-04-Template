学习笔记

## js表达式 | 运算符和表达式

### Atom

- 语法 (Grammar)
  - 语法树(Grammar Tree) vs 优先级（Priority）
  - Left hand side & Right hand side

- 运行时(Runtime)
  - Type Convertion
  - Reference

语法树和优先级

括号的优先级比乘除高，
优先级会影响语法树

### Expressions

优先级
- Member
  - a.b
    成员访问
  - a[b]
  - foo`string`
  - super.b
  - super['b']
  - new.target
  - new Foo()

- New
  - new Foo

Example:
new a()()
new new a()

### Reference

- Object
- Key

- delete
- assign

### 单目运算符

- Unary
  - `delete a.b`
  - `void foo()`
  - `typeof a`
  - `+ a`
  - `- a`
  - `~ a`
  - `!a`
  - `await a`

- Equality
  - `==`
  - `!=`
  - `===`
  - `!==`

- Bitwise
  - `& ^ |`

有短路结构

- Logical
  - `&&`
  - `||`
- Conditional
  - ` ? : `

## JS表达式---类型转换

- `a + b`
- `"false" == false`
- `a[o] = 1`

7种基本类型转换

|          | Number | String | Boolean | Undefined | Null | Object | Symbol |
|  ----    |  ----  |  ----  |  ----   |  -----    |  --- | ---    |    --- |
| Number   | -      |        | 0 false | ×         | ×    | Boxing | ×      |
| String   |        | -      | "" false| ×         | x    | Boxing | ×      |
| Boolean  | true 1 <br/> false 0 | 'true'<br/>'false' | - | × | × | Boxing | × |
| Undefined| NaN | 'Undefined' | false | - | × | × | × |
| Null | 0 | 'null' | false | × | - | × | × |
| Object | valueOf | valueOf<br /> toString | true | × | × | - | × |
| Symbol | × | × | × | × | × | Boxing | - |

### Unboxing

- ToPremitive
- toString vs valueOf
- Symbol.toPremitive

```js
var o = {
  toString() { return '2' },
  valueOf() { return 1 },
  [Symbol.toPremitive]() { return 3 }
}
```

### Boxing

| 类型 | 对象 | 值 |
| - | - | - |
| Number | new Number(1) | 1 |
| String | new String('a') | 'a' |
| Boolean | new Boolean(true) | true |
| Symbol | new Object(Symbol('a')) | Symbol('a') |

#### Exercise

练习见  `exercise.js`

## js语句 | 运行时相关概念

### 语法

- 简单语句
  不会再容纳其他语句
  - ExpressionStatement
  - EmptyStatement
  - DebuggerStatement  出发 debugger 断点
  - ThrowStatement  抛出异常
  - ContinueStatement  和循环语句相匹配
  - BreakStatement  和循环语句相匹配， 结束整个循环
  - ReturnStatement  一定在函数中使用
- 组合语句（复合语句）
  - BlockStatement
  - IfStatement
  - SwitchStatement  在 c、c++中性能是会比连续的 if 要搞得
  - IterationStatement  while、do...while, for, for await
  - WithStatement  广受诟病的语句  
  - LabelledStatement   在语句前面添加了一个 label
  - TryStatement  try...catch...finally
- 声明

### Runtime

#### Completion Record

```js
  if(x == 1)
    return 10;
```

需要一个数据结构来描述语句的执行结果：是否返回了？返回值是啥？等待...

- [[type]]: normal, break, continue, return, or throw
- [[value]]: 基本类型
- [[target]]: label

#### Lexical Environment

### Statement

- BlockStatement

```js
{
  // todo
}
```

### Iteration

- while
- do while
- for
- for...in
- for...of
- ~~for await( of )~~

- var
- const/let
- in

### 标签、循环、break、continue

- LabelledStatement
- IterationStatement
- ContinueStatement
- BreakStatement
- SwitchStatement

- [[type]]: break continue
- [[value]]: --
- [[target]]: label

### 声明

- FunctionDeclaration
  - function
  - function*
  - async function
  - async function*
- GeneratorDeclaration
- AsyncFunctionDeclaration
- AsyncGeneratorDeclaration
- VariableStatement
- ClassDeclaration
- LexicalDeclaration
  - const
  - let

### 预处理

```js
var a = 2;
void function () {
  a = 1;
  return;
  var a;
}();
console.log(a); // a = 2
```

```js
var a = 2;
void function () {
  a = 1;
  return;
  const a;
}();
console.log(a); // 报错
```

### 作用域

```js
var a = 2;
void function () {
  a = 1;
  {
    var a;
  }
}();
console.log(a); // 2
```

```js
var a = 2;
void function () {
  a = 1;
  {
    const a;
  }
}()
console.log(a);
```

### 语句

#### Grammar

- 简单语句
- 组合语句
- 声明

#### Runtime

- Completion Record
- Lexical Environment

## js 结构化 | 宏任务和微任务

### js 执行粒度（运行时）

- 宏任务
  > 最大粒度的范围
- 微任务（Promise）
  > 一个由 Promise 来产生的，然后微任务里面它可能会分成几个不同的函数调用
- 函数调用（Execution Context）
- 语句、声明（Completion Record）
- 表达式（Reference）
- 直接量、变量、this......

#### 宏任务与微任务

MacroTask

```js
var x = 1;
var p = new Promise(resolve => resolve());
p.then(() => x = 3);
x = 2;
```

上述代码 传给 [JavaScript Engine]

then 的后面的代码应该是异步执行的

```js
x = 1
p = ...
x = 2
// ====
x = 3
```

MicroTask(job)

### 事件循环

wait => get code => execute => wait

独立的线程去执行


