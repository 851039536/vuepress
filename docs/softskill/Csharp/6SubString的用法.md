---
title: SubString的用法
date: 2019-08-08
sidebar: 'auto'
author: SN
categories:
 - Csharp
tags:
 - Csharp
publish: true
---
    String.SubString(int index,int length)

    index:开始位置，从0开始
    length:你要取的子字符串的长度
    //如果传入参数为一个长整, 且大于等于0,
    //则以这个长整的位置为起始,
    //截取之后余下所有作为字串.
    //如若传入值小于0,
    //系统会抛出ArgumentOutOfRange异常
    //表明数范围出界
    //如果传入了两个长整参数
    //前一个为参数子串在原串的起始位置
    //后一个参数为子串的长度
    //如不合条件同样出现上述异常

    string my = "daydayup";
    string s1 = my.Substring(0);
    string s2 = my.Substring(3, 5);
    string s3 = my.Substring(7);
    Console.WriteLine(s1);
    Console.WriteLine(s2);
    Console.WriteLine(s3);
    Console.Read();

