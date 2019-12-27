---
title: Regex.Replace只替换字符串一次
date: 2019-08-08
sidebar: 'auto'
author: SN
categories:
 - Csharp
tags:
 - Csharp
publish: true
---
## 概述

想说替换一个字符串里的某段字符，并且只替换一次。
想自己写又麻烦，后来看了下才发现Regex.Replace里有很多其他的参数都没注意。
C#执行一次替换，可以使用这则表达式来实现，正则的Replace有6中重载版本，可以指定替换次数了开始位置。比较类型在构造正则表单时时指定，不在Replace方法中指定。

### Regex构造函数
```csharp
    Regex(string pattern)
    Regex(string pattern,RegexOptions options)
```

### 参数说明
pattern：要匹配的正则表达式模式
options：指定是否要编译，忽略大小写等等

Regex.Replace方法
### csharp
```csharp
Regex.Replace(string input,string replacement)
Regex.Replace(string input,string replacement,int count)
Regex.Replace(string input,string replacement,int count,int startat)
Regex.Replace(string input,MatchEvaluator evaluator)
Regex.Replace(string input,MatchEvaluator evaluator,int count)
Regex.Replace(string input,MatchEvaluator evaluator,int count,int startat)
```


### 参数说明x
input：要修改的字符串
replacement：替换字符串
count：进行替换的最大次数
startat：输入字符串开始搜索的位置
evaluator：在每一步计算替换的MatchEvaluator。就是一个函数代理，参数为Match类型，匹配的数据。


### csharp
```csharp
asp.net--C#字符串只执行一次替换的示例代码
string s = "aaa";
Regex r = new Regex("a");
s=r.Replace(s,"b",1);
Response.Write(s);//输出baa
```