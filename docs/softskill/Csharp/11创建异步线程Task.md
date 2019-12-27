---
title: 创建异步线程Task
date: 2018-08-26
sidebar: 'auto'
author: SN
categories:
 - Csharp
tags:
 - Csharp
publish: true
---

## 使用
-  **无返回值的方式**
**方式1:**
```csharp
var t1 = new Task(() => TaskMethod("Task 1"));
t1.Start();
Task.WaitAll(t1);//等待所有任务结束
```
**注:**
> 任务的状态:
Start之前为:Created
Start之后为:WaitingToRun 

**方式2:**

```csharp
Task.Run(() => TaskMethod("Task 2"));
```

**方式3:**

```csharp
Task.Factory.StartNew(() => TaskMethod("Task 3")); 直接异步的方法 
```
或者
```csharp
var t3=Task.Factory.StartNew(() => TaskMethod("Task 3"));
Task.WaitAll(t3);//等待所有任务结束
```
**注:**
> 任务的状态:
Start之前为:Running
Start之后为:Running


//标记为长时间运行任务,则任务不会使用线程池,而在单独的线程中运行。

```csharp
Task.Factory.StartNew(() => TaskMethod("Task 5"),    T   askCreationOptions.LongRunning);
```



### async/await的实现方式:
```csharp
async static void AsyncFunction()
{
      await Task.Delay(1);
      Console.WriteLine("使用System.Threading.Tasks.Task执行异步操作.");
      for (int i = 0; i < 10; i++)
      {
        Console.WriteLine(string.Format("AsyncFunction:i={0}", i));
      }
}

 public static void Main()
  {
    Console.WriteLine("主线程执行业务处理.");
    AsyncFunction();
    Console.WriteLine("主线程执行其他处理");
  }

```


**带返回值的方式**

**方式4:**

```csharp
Task<int> task = CreateTask("Task 1");
task.Start(); 
int result = task.Result;
```


** //创建任务**

```csharp
 Task<int> getsumtask = new Task<int>(() => Getsum());
 //启动任务,并安排到当前任务队列线程中执行任务 (System.Threading.Tasks.TaskScheduler)
 getsumtask.Start();
 Console.WriteLine("主线程执行其他处理");
 //等待任务的完成执行过程。
 getsumtask.Wait();
 //获得任务的执行结果
```

** async/await的实现:**

```csharp
 async static Task<int> AsyncGetsum()
  {
    await Task.Delay(1);
    int sum = 0;
    return sum;
  
 public static void Main()
  {
    var ret1 = AsyncGetsum();
    int result = ret1.Result;         //阻塞主线程
    Console.WriteLine("任务执行结果：{0}", result);
  }

```



### 组合任务.ContinueWith

//创建一个任务

```csharp
Task<int> task = new Task<int>(() =>
{
  int sum = 0;
  Console.WriteLine("使用Task执行异步操作.");
  return sum;
});
```

 //启动任务,并安排到当前任务队列线程中执行任务(System.Threading.Tasks.TaskScheduler)

```csharp
 task.Start();
 Console.WriteLine("主线程执行其他处理");
 //任务完成时执行处理。
 Task cwt = task.ContinueWith(t =>
 {
   Console.WriteLine("任务完成后的执行结果：{0}", t.Result.ToString());
 });
 task.Wait();
 cwt.Wait();
```

### 任务的串行: 



```csharp
 ConcurrentStack<int> stack = new ConcurrentStack<int>();
 //t1先串行
 var t1 = Task.Factory.StartNew(() =>
 {
   stack.Push(1);
   stack.Push(2);
 });


 //t2,t3并行执行
 var t2 = t1.ContinueWith(t =>
 {
   int result;
   stack.TryPop(out result);
   Console.WriteLine("Task t2 result={0},Thread id {1}", result, Thread.CurrentThread.ManagedThreadId);
});

 //t2,t3并行执行
 var t3 = t1.ContinueWith(t =>
 {
   int result;
   stack.TryPop(out result);
   Console.WriteLine("Task t3 result={0},Thread id {1}", result, Thread.CurrentThread.ManagedThreadId);
 });

//等待t2和t3执行完
Task.WaitAll(t2, t3);

//t7串行执行
var t4 = Task.Factory.StartNew(() =>
{
  Console.WriteLine("当前集合元素个数：{0},Thread id {1}", stack.Count, Thread.CurrentThread.ManagedThreadId);
});
 t4.Wait();
}
```

###  子任务
```csharp

Task<string[]> parent = new Task<string[]>(state =>
 {
   Console.WriteLine(state);
   string[] result = new string[2];
   //创建并启动子任务
   new Task(() => { result[0] = "我是子任务1。"; }, TaskCreationOptions.AttachedToParent).Start();
  new Task(() => { result[1] = "我是子任务2。"; }, TaskCreationOptions.AttachedToParent).Start();
   return result;
 }, "我是父任务，并在我的处理过程中创建多个子任务，所有子任务完成以后我才会结束执行。");
 //任务处理完成后执行的操作
 parent.ContinueWith(t =>
 {
   Array.ForEach(t.Result, r => Console.WriteLine(r));
 });

 //启动父任务
 parent.Start();
 //等待任务结束 Wait只能等待父线程结束,没办法等到父线程的ContinueWith结束
 //parent.Wait();
 Console.ReadLine();
 }

```


**动态并行(TaskCreationOptions.AttachedToParent) 父任务等待所有子任务完成后 整个任务才算完成**

```csharp
using System;
using System.Threading;
using System.Threading.Tasks;

namespace ConsoleApp1
{
  class Node
  {
    public Node Left { get; set; }
    public Node Right { get; set; }
    public string Text { get; set; }
  }

class Program
{
  static Node GetNode()
  {
    Node root = new Node
    {
      Left = new Node
      {
        Left = new Node
        {
          Text = "L-L"
        },
        Right = new Node
        {
          Text = "L-R"
        },
        Text = "L"
      },
      Right = new Node
      {
        Left = new Node
        {
          Text = "R-L"
        },
        Right = new Node
        {
          Text = "R-R"
        },
        Text = "R"
      },
      Text = "Root"
    };
    return root;
  }

    static void Main(string[] args)
    {
      Node root = GetNode();
      DisplayTree(root);
    }

    static void DisplayTree(Node root)
    {
      var task = Task.Factory.StartNew(() => DisplayNode(root),
        CancellationToken.None,
        TaskCreationOptions.None,
        TaskScheduler.Default);
      task.Wait();
    }

    static void DisplayNode(Node current)
    {

      if (current.Left != null)
        Task.Factory.StartNew(() => DisplayNode(current.Left),
        CancellationToken.None,
        TaskCreationOptions.AttachedToParent,
        TaskScheduler.Default);
      if (current.Right != null)
        Task.Factory.StartNew(() => DisplayNode(current.Right),
        CancellationToken.None,
        TaskCreationOptions.AttachedToParent,
        TaskScheduler.Default);
      Console.WriteLine("当前节点的值为{0};处理的ThreadId={1}", current.Text,  Thread.CurrentThread.ManagedThreadId);
    }
  }
}
```