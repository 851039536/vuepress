---
title: 检查PInvoke签名的调用
date: 2019-08-08
sidebar: 'auto'
author: SN
categories:
 - Csharp
tags:
 - Csharp
publish: true
---

**解决方案：
**
[DllImport("Dll.dll")]改为[DllImport("Dll.dll", CallingConvention=CallingConvention.Cdecl)]

DllImport的CallingConvention的属性,默认值是CallingCovention.Stdcall, 此处更改成Cdecl(c/c++默认调用方式)

---------------------
作者：徐凤竹
来源：CSDN
原文：https://blog.csdn.net/xfz0330/article/details/51477769
版权声明：本文为博主原创文章，转载请附上博文链接！