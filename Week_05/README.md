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



