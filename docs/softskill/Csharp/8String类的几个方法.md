---
title: String类的几个方法
date: 2019-08-08
sidebar: 'auto'
author: SN
categories:
 - Csharp
tags:
 - Csharp
publish: true
---

## String类的几个方法

```csharp
String.IndexOf
String.IndexOf 方法 (Char, Int32, Int32)
```
> 报告指定字符在此实例中的第一个匹配项的索引。搜索从指定字符位置开始，并检查指定数量的字符位置。

```csharp
String.IndexOf(value, startIndex, count)
```
### 参数
- value：要查找的 Unicode 字符。
- startIndex：搜索起始位置。
- count：要检查的字符位置数。

**返回值(Int32)**：
- 如果找到该字符，则为 value 的索引位置；否则如果未找到，则为 -1。

### 示例
```csharp
string str = "深圳市盈基实业有限公司国际通邓事文*深圳市盈基实业有限公司国际通邓事文";
Label1.Text = str.IndexOf("中国").ToString();//返回 -1 
Label1.Text = str.IndexOf("盈基").ToString();//返回 3 
Label1.Text = str.IndexOf("盈基",10).ToString();//返回21 说明：这是从第10个字符开始查起。
Label1.Text = str.IndexOf("邓",15,10).ToString();//返回 -1
Label1.Text = str.IndexOf("邓",15,20).ToString();//返回 -32 说明：从第15个字符开始查找，要查找的范围是从第15个字符开始后20个字符，即从第15-35个字符中查找。
String.LastIndexOf
String.LastIndexOf 方法
```
报告指定的 Unicode 字符或 String 在此实例中的最后一个匹配项的索引位置。


### 名称	说明

- String.LastIndexOf (Char)	报告指定 Unicode 字符在此实例中的最后一个匹配项的索引位置。
- String.LastIndexOf (String)	报告指定的 String 在此实例内的最后一个匹配项的索引位置。
- String.LastIndexOf (Char, Int32)	报告指定 Unicode 字符在此实例中的最后一个匹配项的索引位置。该搜索从指定字符位置开始。
- String.LastIndexOf (String, Int32)	报告指定的 String 在此实例内的最后一个匹配项的索引位置。该搜索从指定字符位置开始。
- String.LastIndexOf (String, StringComparison)	报告指定字符串在当前 String 对象中最后一个匹配项的索引。一个参数指定要用于指定字符串的搜索类型。
- String.LastIndexOf (Char, Int32, Int32)	报告指定的 Unicode 字符在此实例内的子字符串中的最后一个匹配项的索引位置。搜索从指定字符位置开始，并检查指定数量的字符位置。
- String.LastIndexOf (String, Int32, Int32)	报告指定的 String 在此实例内的最后一个匹配项的索引位置。搜索从指定字符位置开始，并检查指定数量的字符位置。
- String.LastIndexOf (String, Int32, StringComparison)	报告指定字符串在当前 String 对象中最后一个匹配项的索引。参数指定当前字符串中的起始搜索位置，以及要用于指定字符串的搜索类型。
- String.LastIndexOf (String, Int32, Int32, StringComparison)	报告指定的 String 对象在此实例内的最后一个匹配项的索引位置。参数指定当前字符串中的起始搜索位置、要搜索的当前字符串中的字符数量，以及要用于指定字符串的搜索类型。



### 示例：
```csharp
string str = "深圳市盈基实业有限公司国际通邓事文*深圳市盈基实业有限公司国际通邓事文";
Label1.Text = str.LastIndexOf("邓文").ToString();//返回-1
Label1.Text = str.LastIndexOf("邓").ToString();//返回32
Label1.Text = str.LastIndexOf("邓"，8).ToString();//返回-1
Label1.Text = str.LastIndexOf("邓"，20).ToString();//返回14
Label1.Text = str.LastIndexOf("邓"，33).ToString();//返回32
```

说明：在指定的范围内查找字符，这个范围是上面的输入的参数，理解为，从索引0开始到指定的数值位置范围内查找最后一个匹配的的字符串的位置。示例中，0-8中没有“邓”字，所以返回-1，0-20范围中，有一个“邓”字在索引14位置上，0-33范围中有两个“邓”字，因为LastIndexOf是返回最后一个匹配项索引位置，所以返32，而不是14。


- String.Substring
- String.Substring 方法
- 从此实例检索子字符串。

### 名称	说明

- String.Substring (Int32)	从此实例检索子字符串。子字符串从指定的字符位置开始。
- String.Substring (Int32, Int32)	从此实例检索子字符串。子字符串从指定的字符位置开始且具有指定的长度。


### 示例：
```csharp
string str = "深圳市盈基实业有限公司国际通邓事文*深圳市盈基实业有限公司国际通邓事文";
Label1.Text = str.Substring(11);//返回 “国际通邓事文*深圳市盈基实业有限公司国际通邓事文”
Label1.Text = str.Substring(11,7);//返回 “国际通邓事文*”
```

### 总结一下：
- IndexOf、LastIndexOf都是返回一个位置，是个整数值；找不到都返回-1；
- IndexOf是从左向右查，LastIndexOf是从右向左查，不管是IndexOf还是LastIndexOf，索引序列都是从左到右的(起始值是0)
- Substring是字符串截取，返回值是一个截取后的字符串。