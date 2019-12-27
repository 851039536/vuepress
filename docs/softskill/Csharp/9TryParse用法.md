---
title: TryParse用法
date: 2019-08-08
sidebar: 'auto'
author: SN
categories:
 - Csharp
tags:
 - Csharp
publish: true
---

## 使用

- 形式（以decimal为例）： decimal.TryParse(str1,out num1)
- 功能：将str1转化成decimal类型，若转化成功，将值赋给num1，并返回true;
- 若转化失败，返回false。


### 例1.

```csharp
decimal num1=0;
bool a=decimal.TryParse("123",out num1);
```

> 能够转化成功，结果为 a 的值为true，num1的值为123.


### 例2.

```csharp
decimal num1=0;
bool a=decimal.TryParse("ABC",out num1);
```

> 转化失败，结果为 a 的值为false，num1的值仍为0；.