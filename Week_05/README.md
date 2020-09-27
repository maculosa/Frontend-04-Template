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

- StringToNumber
  ```js
  function StringToNumber(str, base) {
    
  }
  ```

- NumberToString
