# 学习笔记

## 1. 字符串分析算法 | 总论

- 字典树
  - 大量高重复字符串的存储与分析
- KMP
  - 在长字符串里找模式
- Wildcard
  - 带通配符的字符串模式， “*”、“？”
  （贪心算法）
- 正则
  - 字符串通用模式匹配
- 状态机
  - 通用的字符串分析，比正则更强大，比正则更复杂
- LL LR （需要系统的认识这两种语法分析）
  - 字符串多层结构分析，语法分析，LR 比 LL 更强的语法
  **LR(1)**

---

## 2. 字符串分析算法 | 字典树

字典树是 哈希树的一个特例，字典树是哈希树中最常见的应用。

## 3. 字符串分析算法 | KMP 字符串模式匹配算法

**普通匹配算法(暴力算法)**
原串， pattern串
从 原串中 匹配 pattern串   O(m*n)

pattern: abcdabce
source:  abcd**abcdabce**x

## 4. 字符串分析算法 | Wildcard

- wildcard: ab*c?d*abc*a?d
  - 只有 * : ab*cd*abc*a?d
  - 只有 ? : c?d, a?d

简化问题

### 只有 ‘*’

除了最后一个 * , 
一个 * 加上一个字符，就是在字符串中去找一个 特定 pattern 的字符。

**当只有 ‘*’，一个 wildcard 就是若干个 kmp组成的**

```bash
ab*cd*abc*a?d
```

## 5. proxy 与双向绑定 | proxy 的基本用法

> 不建议在业务中大量的使用 proxy, (强大且危险的设计特性，专为底层库去设计的)



## 6. proxy 与双向绑定 | 模仿 reactive 实现原理（一）

## 7. proxy 与双向绑定 | 模仿 reactive 实现原理（二）

## 8. proxy 与双向绑定 | 模仿 reactive 实现原理（三）

## 9. proxy 与双向绑定 | 优化 reactive

## 10. proxy 与双向绑定 | reactivity 响应式对象
有什么用？
一个半成品的双向绑定

调色盘是 mvvm 模式下的一个经典案例，开发者只需关注输入和绑定的关系



## 11. 使用 Range 实现 DOM 精确操作 | 基本拖拽

## 12. 使用 Range 实现 DOM 精确操作 | 正常流里的拖拽

CSSOM?

CSS Object Model

