---
title: 读写入INI文件
date: 2019-08-08
sidebar: 'auto'
author: SN
categories:
 - Csharp
tags:
 - Csharp
publish: true
---
## 读写入INI文件

### 1.引用写入dll

```c#
 [DllImport("kernel32")]
private static extern long WritePrivateProfileString(string section, string key, string val, string    filePath);
```

   **// 写入ini**

```c#
public void IniWriteValue(string Section, string Key, string Value)
  {
   string inipath = ".CONFIG.INI";
   WritePrivateProfileString(Section, Key, Value, inipath);
  }
```

 #### 调用

```c#
public void IniWriteValues() {
   IniWriteValue("CONFIG", "Comport", ComPort);
  }
```



### 2.引用读取dll

```c#
  [DllImport("kernel32.dll")]
  private static extern int GetPrivateProfileString(string section, string key, string def,  StringBuilder retVal, int size, string INIPath);
```



 #### 调用

```c#
 StringBuilder temp = new StringBuilder(500);
   GetPrivateProfileString("CONFIG", "Player", "", temp, 500, ".\CONFIG.INI");
   Player = temp.ToString();
```

