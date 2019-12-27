(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{187:function(n,t,a){"use strict";a.r(t);var e=a(0),s=Object(e.a)({},(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[n._v("#")]),n._v(" 使用")]),n._v(" "),a("h3",{attrs:{id:"一、概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、概述"}},[n._v("#")]),n._v(" 一、概述")]),n._v(" "),a("ul",[a("li",[n._v('1、Windows Form（简称WinForm）\n是微软.NET平台下用于开发"图形界面"应用程序的组件。')]),n._v(" "),a("li",[n._v("2、C/S架构\n客户机（"),a("code",[n._v("Client")]),n._v("）/服务器("),a("code",[n._v("Server")]),n._v(")，是软件系统体系结构。")])]),n._v(" "),a("blockquote",[a("p",[n._v("通过它可以充分利用两端硬件环境的优势，将任务合理分配到Client端和Server端来实现，降低了系统的通讯开销。")])]),n._v(" "),a("h3",{attrs:{id:"二、在vs中新建窗体程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、在vs中新建窗体程序"}},[n._v("#")]),n._v(" 二、在VS中新建窗体程序")]),n._v(" "),a("h4",{attrs:{id:"_1、认识窗体程序（第一个窗体程序）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、认识窗体程序（第一个窗体程序）"}},[n._v("#")]),n._v(" 1、认识窗体程序（第一个窗体程序）")]),n._v(" "),a("p",[n._v("1）窗体设计器：设置窗体界面(经常操作)\n每个窗体都有对应的后台代码\n"),a("code",[n._v("shift + F7 / F7")]),n._v("：查看源码\n注：在窗体后台代码中，存在方法："),a("code",[n._v("InitializeComponent()")])]),n._v(" "),a("blockquote",[a("p",[n._v("它的作用是：对当前窗体的控件进行初始化工作，此方法不能丢，否则窗体不能正常显示控件，如果要重载构造方法 ，在重载构造方法中也必须调用此方法。")])]),n._v(" "),a("p",[n._v("F12查看方法的定义")]),n._v(" "),a("h4",{attrs:{id:"工具箱：包含了程序所需的控件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工具箱：包含了程序所需的控件"}},[n._v("#")]),n._v(" 工具箱：包含了程序所需的控件")]),n._v(" "),a("p",[n._v("操作：\n2.1）选择控件，向窗体设计器拖动\n2.2）双击控件\n注：在"),a("code",[n._v("WinForm")]),n._v("中，所有的控件，包括窗体都是对象")]),n._v(" "),a("h4",{attrs:{id:"解决方案资源管理器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方案资源管理器"}},[n._v("#")]),n._v(" 解决方案资源管理器")]),n._v(" "),a("p",[n._v("3.1）项目\n3.2）"),a("code",[n._v("Properties")]),n._v("：对当前项目的属性进行设置\n3.3）引用\n3.4）"),a("code",[n._v("Resources")]),n._v("：资源信息\n3.5）窗体程序 --\x3e "),a("code",[n._v("Xxxx.cs")]),n._v("\n3.6）主程序（窗体程序的入口）："),a("code",[n._v("Programe.cs")]),n._v("，设置启动窗体：")]),n._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("static")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("void")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("Main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n​ Application"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("EnableVisualStyles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n​ Application"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("SetCompatibleTextRenderingDefault")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n​ Application"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("Run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("new")]),n._v(" 窗体名称"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n")])])]),a("h4",{attrs:{id:"属性面板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性面板"}},[n._v("#")]),n._v(" 属性面板")]),n._v(" "),a("p",[n._v("对控件进行相关的设置(经常操作)\n选择不同的控件，属性面板的属性会不一样\n左边是属性名，右边是属性值（需要用户设置）")]),n._v(" "),a("p",[n._v("事件：单击，双击，鼠标移动，离开，经过，键盘相关事件\n表示触发程序执行的某件事发生的信号，如单击\n控件包含：属性，方法，事件")]),n._v(" "),a("h3",{attrs:{id:"开发窗体程序的步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发窗体程序的步骤"}},[n._v("#")]),n._v(" 开发窗体程序的步骤")]),n._v(" "),a("ul",[a("li",[n._v("1）新建窗体程序项目")]),n._v(" "),a("li",[n._v("2）打开窗体设备器，添加控件(工具箱)")]),n._v(" "),a("li",[n._v("3）选择控件，设置属性\n注：在实际开发中，一般都会给控件取一个有意义的名字，便于调用")]),n._v(" "),a("li",[n._v("4）选择控件，添加相应事件(单击，双击，鼠标移动，离开，经过，键盘相关事件)")]),n._v(" "),a("li",[n._v("5）在事件方法中，编写代码实现业务功能\n基于面向对象的思想来编写程序\n控件是对象\n对象名.属性 = 值 ;\n对象名.方法() ;\n控件名.属性 = 值 ;\n控件名.方法() ;")]),n._v(" "),a("li",[n._v("6）根据需求重复以上工作")]),n._v(" "),a("li",[n._v("7）运行、测试")])]),n._v(" "),a("h4",{attrs:{id:"_3、在后面章节，我们主要学习控件-对象-的三方面的内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、在后面章节，我们主要学习控件-对象-的三方面的内容"}},[n._v("#")]),n._v(" 3、在后面章节，我们主要学习控件(对象)的三方面的内容")]),n._v(" "),a("p",[n._v("1)属性\n2)方法\n3)事件")]),n._v(" "),a("h3",{attrs:{id:"三、窗体（form）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、窗体（form）"}},[n._v("#")]),n._v(" 三、窗体（Form）")]),n._v(" "),a("h4",{attrs:{id:"常用属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用属性"}},[n._v("#")]),n._v(" 常用属性")]),n._v(" "),a("p",[n._v("1）窗体名称："),a("code",[n._v("Name")]),n._v("\n注：在实例开发中，不要使用默认的名字，建议定义一个有意义的名称，方便调用\n命名规范："),a("code",[n._v("frmXxxx")]),n._v("\n2）窗体标题 : "),a("code",[n._v("Text")]),n._v("\n3）背景颜色 : "),a("code",[n._v("BackColor")]),n._v("\n4）设置窗体背景图片："),a("code",[n._v("BackgroundImage")]),n._v(" "),a("code",[n._v("BackgroundImageLayout")]),n._v("：设置背景图片布局\n5）修改窗体的大小："),a("code",[n._v("Size（Width、Height）")]),n._v("\n6）设置按Enter键时所单击窗体上的按钮："),a("code",[n._v("AcceptButton")]),n._v("\n7）窗体的图标："),a("code",[n._v("Icon*.ico")]),n._v("\n8）窗体边框样式："),a("code",[n._v("FormBorderStyle")]),n._v(" "),a("code",[n._v("Fixed3D")]),n._v("：固定的三维边框\n"),a("code",[n._v("FixedDialog")]),n._v("：固定的对话框样式的粗边框\n"),a("code",[n._v("FixedSingle")]),n._v("：固定的单行边框\n"),a("code",[n._v("FixedToolWindow")]),n._v("：不可调整大小的工具窗口边框\n"),a("code",[n._v("None")]),n._v("：无边框\n"),a("code",[n._v("Sizable")]),n._v("：可调整大小的边框\n"),a("code",[n._v("SizableToolWindow")]),n._v("：可调整大小的工具窗口边框")]),n._v(" "),a("p",[n._v("9）控件窗体的显示位置："),a("code",[n._v("StartPosition")]),n._v(" "),a("code",[n._v("CenterParent")]),n._v("：窗体在其父窗体中居中\n"),a("code",[n._v("CenterScreen")]),n._v("：窗体在屏幕中居中\n"),a("code",[n._v("Manual")]),n._v("：由Location属性确定\n"),a("code",[n._v("WindowsDefaultBounds")]),n._v("：Windows默认位置，其边界由Windows默认决定。\n"),a("code",[n._v("WindowsDefaultLocation")]),n._v("：Windows默认位置，其尺寸在窗体大小中指定。\n10）控件窗体的最大化和最小化\n"),a("code",[n._v("MaximizeBox MinimizeBox")])]),n._v(" "),a("p",[n._v("11）设置窗体启动时，默认是最大化还是最小化：WindowState\n"),a("code",[n._v("Normal")]),n._v("：还原窗口\n"),a("code",[n._v("Minimized")]),n._v("：最小化窗口\n"),a("code",[n._v("Maximized")]),n._v("：最大化窗口")]),n._v(" "),a("p",[n._v("12）控件窗体总在最前："),a("code",[n._v("TopMost")]),n._v("\n13）设置窗体透明度："),a("code",[n._v("Opacity")])]),n._v(" "),a("h4",{attrs:{id:"窗体的方法（必须要实例化对象访问）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#窗体的方法（必须要实例化对象访问）"}},[n._v("#")]),n._v(" 窗体的方法（必须要实例化对象访问）")]),n._v(" "),a("p",[n._v("1）显示窗体\n模式窗体："),a("code",[n._v("ShowDialog()")]),n._v("：只有关闭当前窗口才能访问另一个窗口\n非模式窗体："),a("code",[n._v("Show()")]),n._v("\n2）"),a("code",[n._v("Hide()")]),n._v("：隐藏窗体，不破坏窗体，也不释放资源\n3）"),a("code",[n._v("Close()")]),n._v("：关闭窗体，释放资源")]),n._v(" "),a("h4",{attrs:{id:"事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件"}},[n._v("#")]),n._v(" 事件")]),n._v(" "),a("p",[n._v("1）"),a("code",[n._v("Activated")]),n._v("：窗体激活\n2）"),a("code",[n._v("Load")]),n._v("：窗体加载\n3）"),a("code",[n._v("FormClosing")]),n._v("：窗体关闭")]),n._v(" "),a("h3",{attrs:{id:"第二章（上）：控件与窗体"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二章（上）：控件与窗体"}},[n._v("#")]),n._v(" 第二章（上）：控件与窗体")]),n._v(" "),a("h4",{attrs:{id:"文本编辑控件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文本编辑控件"}},[n._v("#")]),n._v(" 文本编辑控件")]),n._v(" "),a("p",[n._v("1、标签："),a("code",[n._v("Label")]),n._v("\n1）作用：用于显示文字（标签、标题）\n2）常用属性：\n"),a("code",[n._v("Text")]),n._v("：设置显示的文本内容\n"),a("code",[n._v("ForeColor")]),n._v("：设置前景颜色\n"),a("code",[n._v("AutoSize")]),n._v("：是否自动调整大小\n"),a("code",[n._v("Font")]),n._v("：设置字体")]),n._v(" "),a("h4",{attrs:{id:"按钮：button"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#按钮：button"}},[n._v("#")]),n._v(" 按钮：Button")]),n._v(" "),a("p",[n._v("1）作用：提供用户通过单击来执行各种各样的操作\n2）常用属性：\n"),a("code",[n._v("BackgroundImage")]),n._v("：背景图像\n"),a("code",[n._v("BackgroundImageLayout")]),n._v("：设置背景图像的布局样式\n"),a("code",[n._v("FlatStyle")]),n._v("：设置平面样式外观\n"),a("code",[n._v("Text")]),n._v("：设置显示的文本内容\n"),a("code",[n._v("TextAlign")]),n._v("：对齐方式\n"),a("code",[n._v("Enabled")]),n._v(" : 设置按钮是否可用")]),n._v(" "),a("h4",{attrs:{id:"常用事件："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用事件："}},[n._v("#")]),n._v(" 常用事件：")]),n._v(" "),a("p",[n._v("click")]),n._v(" "),a("h5",{attrs:{id:"文本框：textbox"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文本框：textbox"}},[n._v("#")]),n._v(" 文本框：TextBox")]),n._v(" "),a("p",[n._v("1）作用\n提供用户输入数据，或显示数据\n默认单行\n最多可以接收32767个字符\n不包括制表符、图片\n可以实现密码输入效果\n2）常用属性\nText：设置/获取文本框中的内容\nMaxLength：输入最大字符数\nReadOnly：是否只读（不可编辑）\nPasswordChar：密码字符\nMultiLine：是否为多行文本框\nScrollBars：为多行文本框时，设置滚动条")]),n._v(" "),a("h4",{attrs:{id:"常用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用方法"}},[n._v("#")]),n._v(" 常用方法")]),n._v(" "),a("p",[n._v("Focus()：获取焦点\nClear()：清除文本框内容")]),n._v(" "),a("h4",{attrs:{id:"常用事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用事件"}},[n._v("#")]),n._v(" 常用事件")]),n._v(" "),a("p",[n._v("TextChanged：Text属性更改时发生\nleave：当焦点离开控件时触发")]),n._v(" "),a("h4",{attrs:{id:"富文本框：richtextbox"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#富文本框：richtextbox"}},[n._v("#")]),n._v(" 富文本框：RichTextBox")]),n._v(" "),a("h5",{attrs:{id:"作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用"}},[n._v("#")]),n._v(" 作用")]),n._v(" "),a("p",[n._v("功能同上，比TextBox功能更强大\n默认是多行\n最多可以接收2147483647个字符\n包括制表符、图片\n无法实现密码输入效果\n2）常用属性\n3）常用方法\n4）常用事件")]),n._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("Bitmap")]),n._v(" bmp "),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("new")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("Bitmap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[n._v('@"D:\\test\\20140226082603.jpg"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\nClipboard"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("SetDataObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),n._v("bmp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("DataFormats"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("Format")]),n._v(" dataFormat "),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" DataFormats"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("GetFormat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),n._v("DataFormats"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("Bitmap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[n._v("//格式")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("if")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),n._v("richTextBox1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("CanPaste")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),n._v("dataFormat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v("\n​ richTextBox1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("Paste")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),n._v("dataFormat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n")])])]),a("h3",{attrs:{id:"图片框：picturebox"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片框：picturebox"}},[n._v("#")]),n._v(" 图片框：PictureBox")]),n._v(" "),a("p",[n._v('作用\n显示图片\n支持bmp、jpeg、gif、png等格式\n常用属性\nName : 控件名称，前缀pic\nImage : 控件显示的图片\nImage.FromFile("c:\\1.jpg") ;\nSizeMode：控制PictureBox将如何处理图片位置和控件大小\n3）常用方法\n）常用事件')]),n._v(" "),a("h3",{attrs:{id:"定时器-timer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定时器-timer"}},[n._v("#")]),n._v(" 定时器:Timer")]),n._v(" "),a("p",[n._v("作用\n控制每隔一段时间做某些操作\n常用属性\nName : 控件名称\nEnabled : 启用定时器\nInterval : 设置时间间隔，单位是毫秒\n1秒 = 1000毫秒\n常用方法\n常用事件\nTick : 每隔一段时间，所做的事情在此事件中实现\n操作步骤：\n第一：拖Timer控件到窗体中\n第二：设置时间间隔--Interval\n第三：添加Tick事件，实现每间隔一段时间所做事情（功能）\n第四：启用定时器--Enabled=true ;\n注：\n1>各个控件必须指定Name属性值，便于调用\n2>控件就是对象，因此，可以通过以下代码来设置属性:\n设置属性：控件名.属性 = 值 ;\n获取属性: 数据类型 变量名 = 控件名.属性 ;\n3>控件都有以下三个特性:\n属性\n方法 -> [数据类型 变量名 = ]控件名.方法名([参数列表]) ;\n事件\n4>不规则窗体的移动\n鼠标坐标位置：MousePosition\n窗体坐标位置：Location\n坐标对象：Point\n鼠标按下事件：MouseDown\n鼠标移动事件：MouseMove")]),n._v(" "),a("h3",{attrs:{id:"第二章（下）：继续控件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二章（下）：继续控件"}},[n._v("#")]),n._v(" 第二章（下）：继续控件")]),n._v(" "),a("h4",{attrs:{id:"选择控件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选择控件"}},[n._v("#")]),n._v(" 选择控件")]),n._v(" "),a("p",[n._v("1、单选框：RadioButton\n1）作用：互斥选择一个内容\n2）常用属性\nChecked：是否已经选择\nText：显示内容\nAppearance : 显示样式\n3）常用事件\nCheckedChaged：更改选择时发生\nClick : 单击事件\n注：在当前窗体默认只有一组单选框，可以结合GroupBox和Panel控件实现多组单选框。")]),n._v(" "),a("p",[n._v("2、多选框类：CheckBox\n1）作用：选择多个内容\n2）常用属性：\nChecked：选择\nText：内容\nAppearance : 显示样式\n3）常用事件\nCheckedchanged：更改选择时发生")]),n._v(" "),a("h4",{attrs:{id:"列表控件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#列表控件"}},[n._v("#")]),n._v(" 列表控件")]),n._v(" "),a("p",[n._v("1、下拉列表(组合框)：ComboBox\n1）作用：用于下拉显示数据\n2）常用属性：\nItems：下拉列表的所有内容\nItems.Count : 选项数量\nMaxDroDownItems：设置下拉显示内容的数量\nDropDownStyle：设置下拉列表框样式（不可编辑）\nSelectedItem：当前选定的内容\nSelectedIndex：设置/获取列表选中内容的下标索引(从0开始)\n3）常用方法\nComboBox对象.FindString(内容) : 查找内容对应的下标位置（从0开始），如果找不到返回-1；\nComboBox对象.FindString(内容,下标位置) : 从指定下标位置开始查找内容对应的下标位置，如果找不到返回-1；\nComboBox对象.Items.Add(内容) : 添加内容；\nComboBox对象.Items.AddRange(new string[]{项1,项2,...,项n}) ；\nComboBox对象.Items.Insert(下标索引,内容) : 在指定索引位置添加内容；\nComboBox对象.Items.Remove(内容) : 删除内容；\nComboBox对象.Items.RemoveAt(下标索引) : 根据下标索引删除内容；\nComboBox对象.Items.Clear() : 清空内容；\n4）常用事件\nSelectedIndexChanged：改变下拉列表框时发生的事件")]),n._v(" "),a("p",[n._v("2、列表选择控件：ListBox\n1）作用：把数据以列表的形式显示，用户可以选择其中的数据\n​ 2）常用的属性：\nItems：列表框的所有内容，是ArrayList类对象，内容是字符串\nItems.Count：所有选项的数量\nSelectedItems：获取包含ListBox中当前选定项的集合\nSelectedItems.Count : 选中选项的数量\nSelectedIndex : 设置/获取列表选中内容的下标索引(从0开始)\nSelectedItem ：返回当前选定的某一项，如果没选中，则发生异常\nText : 返回当前选定的某一项，如果没选中，则返回空字符串\nSelectionMode：设置可选的条目数\nSorted：是否以字母的顺序排序")]),n._v(" "),a("p",[n._v("3）常用的方法\n同ComboBox控件\nListBox对象.SetSelected(下标索引,bool) ： 选择或取消选择某项内容。")]),n._v(" "),a("h4",{attrs:{id:"菜单栏和快捷菜单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#菜单栏和快捷菜单"}},[n._v("#")]),n._v(" 菜单栏和快捷菜单")]),n._v(" "),a("p",[n._v("1、菜单栏：MenuStrip\n文件(&F)：添加快捷提示 -> alt + F\n-：菜单分隔符\nShortcutKeys：设置快捷键\n2、快捷菜单：ContextMenu\n第一：设置菜单 (同上)\n第二：关联控件 -> ContextMenuStrip属性")]),n._v(" "),a("h3",{attrs:{id:"四、多窗体的实现（重点、难点）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、多窗体的实现（重点、难点）"}},[n._v("#")]),n._v(" 四、多窗体的实现（重点、难点）")]),n._v(" "),a("p",[n._v("1、面向对象的复习\n1）类和对象\n类：类是对象的概括(类是对象的模板)->抽象的、模糊的、不具体的\n对象：对象是类的实例->具体的，实际存在的\n注：概括:有用的，本质的，共同的\n学生是一个类\n每个学生都是一个对象\n面向对象的操作步骤：")]),n._v(" "),a("p",[n._v("第一：定义类(对象的概括)\n[访问修饰符] class 类名\n{\n​ //1.字段 -> 类（对象）的具体数据（信息）\n​ private 数据类型 字段名 ;\n​ //2.属性 -> 是对字段的封装，对字段数据进行访问\n​ public 数据类型 属性名\n​ {\n​ set {字段名=value;}\n​ get {return 字段名;}\n​ }\n​ //3.方法 -> 是类（对象）实现的功能（业务）\n​ [访问修饰符] 数据类型 方法名([数据类型 形参1,...,数据类型 形参N])\n​ {\n​ 方法体 -> 具体功能的实现\n​ [return 数据;]\n​ }\n​ 注：在方法内，如果没有返回值，则数据类型声明为void\n​ }\n​ 注：\n​ 类的访问修饰符：public 、 internal（默认）\n​ 类名、属性名、方法名使用帕斯卡名称规则\n​ 字段名使用驼峰名称规则\n​ 属性与字段息息相关(名称一般一样)\n​ 特殊方法:构造方法\n​ 方法名与类名相同\n​ 没有返回值\n​ 不能手动调用，在实例化对象时自动调用\n​ 在实例化对象的同时，初始化对象\n​ 在类中，如果用户没有定义构造方法，则默认存在一个构造方法\n​ 语法如下：\n​ public 方法名类名\n​ {\n​ }")]),n._v(" "),a("p",[n._v("第二：实例化对象（创建对象）\n类名 对象名 = new 类名() ;")]),n._v(" "),a("p",[n._v("第三：初始化对象 -> 给对象的字段赋值\n对象名.属性 = 值 ;")]),n._v(" "),a("p",[n._v("第四：操作 -> 调用方法\n[数据类型 变量名 = ]对象名.方法名([参数列表]) ;")]),n._v(" "),a("p",[n._v("2、建立多窗体程序\n//第一：创建窗体对象\n窗体类 窗体对象 = new 窗体类() ;\n//第二：显示窗体\n窗体对象.Show() ;\n或\n窗体对象.ShowDialog() ;\n或\nif(窗体对象==null || 窗体对象.IsDisposed)\n{\n​ 窗体对象 = new 窗体类() ;\n​ 窗体对象.Show() ;\n}")]),n._v(" "),a("p",[n._v("3、传参 -> 构造方法\n第一：创建窗体对象，把数据放在构造方法中传递\n窗体类 窗体对象 = new 窗体类(数据1,数据2,...,数据n) ;\n注：\n​ 在窗体类中，默认只有一个缺省的构造方法（没有参数的构造方法）\n​ 在窗体类中，必须存在对应的构造方法，且InitializeComponent()不能丢\n第二：在窗体类中，定义对应参数的构造方法\n第三：在窗体类中，定义对应的全局变量，接收构造方法获取的参数数据\n第四：使用传递过来的数据->调用全局变量\n第五：调用方法，显示窗体\n窗体对象.Show() ;\n注意：\n1）如果要传递多个数据，且这些数据都是相关的，我们一般把这些数据封装成相关的对象进行传递。\n2）如果在第二个窗体中，要操作第一个窗体，怎么办呢？\n在创建第二个窗体实例对象时，通过构造方法，把第一个窗体传递过去：\n窗体类 窗体对象 = new 窗体类(this) ;\n窗体类 窗体对象 = new 窗体类(this,数据1,...,数据N) ;\n4、返回值")]),n._v(" "),a("h3",{attrs:{id:"第三章：文件的读写"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三章：文件的读写"}},[n._v("#")]),n._v(" 第三章：文件的读写")]),n._v(" "),a("p",[n._v("一、概述\n1、流：相当于一个管道，C#程序通过流来读写文件\n流，分为：\n输入流 : 相当于程序而言，数据从文件写入到程序这个过程\n输出流 : 相当于程序而方，数据从程序输出到文件中的过程")]),n._v(" "),a("p",[n._v("2、FileStream对象\nFileStream对象表示在磁盘或网络路径上指向文件的流（指向要操作的文件）;\n在FileStream的基础上，使用StreamReader或StreamWriter实现文件的读写（字节方式）。\nFileStream 对象 = new FileStream(String path,FileModel model[,FileAccess access,FileShare share])")]),n._v(" "),a("p",[n._v("参数说明：\npath：指向要操作的文件（路径+文件名）\nmodel：打开文件的方式\naccess：访问文件的方式\nshare：文件共享方式")]),n._v(" "),a("p",[n._v("二、文件的读取（StreamReader）\n1、语法\nStreamReader 对象 = new StreamReader(Stream stream[,Encoding.字符编码]) ;\nStreamReader 对象 = new StreamReader(filename[,Encoding.字符编码]) ;")]),n._v(" "),a("p",[n._v("参数说明：\nstream : 要读取的文件流（FileStrem是其中的Stream）\nfilename : 路径+文件名\nEncoding : 字符编码")]),n._v(" "),a("p",[n._v("2、方法\nReadLine() : 一行一行地读取文件，读到文件的末尾时，返回null\nReadToEnd() : 从文件的开始到末尾，一次性读取\nClose() : 关闭流")]),n._v(" "),a("p",[n._v("三、文件的写入（StreamWriter）\n1、语法：\nStreamWriter 对象 = new StreamWriter(Stream stream) ;\nStreamWriter 对象 = new StreamWriter(Stream stream,bool append,Encoding encoding) ;\nStreamWriter 对象 = new StreamWriter(string filename,bool append,Encoding encoding) ;\n参数说明：\nstream : 要写入文件的流\nappend : 是否追加\nencoding : 字符编码\nfilename : 路径+文件名")]),n._v(" "),a("p",[n._v("2、方法\nWrite() : 写入数据\nWriteLine() : 写入数据并换行\nflush() : 清空缓冲区\nClose() : 关闭流")]),n._v(" "),a("h4",{attrs:{id:"快速文件操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速文件操作"}},[n._v("#")]),n._v(" 快速文件操作")]),n._v(" "),a("p",[n._v('1、文件写入\n1）File.AppendAllText(string path,string content,Encoding encoding)\npath : 路径+文件\ncontent : 向文件添加的内容\nencoding : 编码\n添加内容到文件，如果文件存在，追加内容到文件，最后关闭文件；\n如果文件不存在，则创建文件并添加内容到文件，最后关闭文件\nFile.AppendAllText("e:\\bb.txt","你好",Encoding.Default);')]),n._v(" "),a("p",[n._v('2）File.WriteAllBytes(string path,byte[] bytes)\nFile.WriteAllBytes("e:\\bb.txt", Encoding.Default.GetBytes("你好"));\n3）File.WriteAllLines(string path,string[] content,Encoding encoding) ;\nstring[] str = { "我", "好" };\nFile.WriteAllLines("e:\\bb.txt", str, Encoding.Default);\n4）File.WriteAllText(string path,string content,Encoding encoding) ;\nFile.WriteAllText("e:\\bb.txt", "好好学习", Encoding.Default);')]),n._v(" "),a("p",[n._v('2、文件读取\n1）File.ReadAllText(string path[,Encoding encoding]) ;\nString str = File.ReadAllText("e:\\bb.txt",Encoding.Default);')]),n._v(" "),a("p",[n._v('2）File.ReadAllBytes(string path) ;\nbyte[] str = File.ReadAllBytes("e:\\bb.txt");')]),n._v(" "),a("p",[n._v("MessageBox.Show(System.Text.Encoding.Default.GetString(str));")]),n._v(" "),a("p",[n._v('3）File.ReadAllLines(string path[,Encoding encoding]) ;\nstring[] str = File.ReadAllLines("e:\\bb.txt", Encoding.Default);\nMessageBox.Show(string.Join(",",str));')]),n._v(" "),a("p",[n._v("3、文件操作\n1）File.Encrypt(string path) ： 加密文件\n2）File.Decrypt(string path) ： 解密文件\n3）File.Exists(string path) ： 判断文件是否存在\n4）File.Delete(string path) ： 删除文件\n5）File.Copy(string sourceFile,String DestFile) ： 复制文件")]),n._v(" "),a("h3",{attrs:{id:"第四章：ado-net"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第四章：ado-net"}},[n._v("#")]),n._v(" 第四章：ADO.NET")]),n._v(" "),a("p",[n._v("一、ADO.NET概述\n1、概述\n（ActiveX Data Objects），数据库访问的方法和技术（组件）。\n2、组成\n1）.NET框架数据提供程序(.NET Framework Data Provider)\n2）数据集(DataSet)\n注：\n2.1）以上两个组成部分包含相关的数据库操作对象，如：\nConnection：连接数据库\nCommand：执行SQL语句\nDataReader：读取查询结果\nDataAdapter：桥接数据库与数据集的联系，把数据库中的数据填充到DataSet中\nDataSet： 数据在内存中缓存")]),n._v(" "),a("p",[n._v("2.2）SQL Server的数据提供程序中，其命名空间为：System.Data.SqlClient\nSqlXxxxx")]),n._v(" "),a("p",[n._v("二、连接对象（SqlConnection）\n连接SQL Server数据库\nSystem.Data.SqlClient")]),n._v(" "),a("p",[n._v("三、配置文件\n1、在项目中新建一个配置文件，命名为：App.config\n右键项目 -> 添加 -> 新建项 -> 应用程序配置文件 -> 确定\n注意：如果项目中已经存在App.config文件，则不需要添加\n2、在App.config文件中，进行配置\n方式一：")]),n._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("<")]),n._v("connectionStrings"),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v(">")]),n._v("\n​ "),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("add")]),n._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[n._v('"dbstr"')]),n._v(" connectionString"),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[n._v('"Server=.;uid=sa;pwd=;DataBase=abc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v(">")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("/")]),n._v("connectionStrings"),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v(">")]),n._v("\n")])])]),a("p",[n._v('说明：\n1）connectionStrings : 表示定义连接字符串\n2）add : 添加具体的连接字符串\nname : 字符串的名称\nconnectionString : 连接字符串的具体内容\n3）相当于在App.config文件中定义：\nstring dbstr = "Server=.;uid=sa;pwd=;DataBase=abc" ;')]),n._v(" "),a("p",[n._v("方式二：")]),n._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("<")]),n._v("appSettings"),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v(">")]),n._v("\n​ "),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("add")]),n._v(" key"),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[n._v('"connStr"')]),n._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("value")]),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[n._v('"Server=.;uid=sa;pwd=;DataBase=abc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v(">")]),n._v("\n​ "),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("add")]),n._v(" key"),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[n._v('"age"')]),n._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("value")]),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[n._v('"18"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v(">")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("/")]),n._v("appSettings"),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v(">")]),n._v("\n")])])]),a("p",[n._v('3.在程序中，读取App.config文件中的连接信息\nstring str1 = ConfigurationSettings.AppSettings["dbstr"];\nstring str2 = ConfigurationManager.AppSettings["dbstr"];\nstring str3 = ConfigurationManager.ConnectionStrings["dbstr"].ConnectionString;\n注意：需要在项目中，添加引用System.Configuration，操作如下：\n右键项目 -> 添加 -> 引用 -> 勾选System.Configuration -> 确定')]),n._v(" "),a("p",[n._v("四、异常处理\n特殊的程序控制语句： 程序出错了，保证程序能正常的执行，而不会被终止")]),n._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("try")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n​ 有可能发生错误的代码 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n​ conn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("Open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n​ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("\n​ conn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("Close")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n​ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n​ "),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("Xxxxx")]),n._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v("\n​ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n​ 对错误进行相关的处理\n​ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n​ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("[")]),n._v("\n​ "),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("finally")]),n._v("\n​ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n​ 不管正确与否，都会被执行"),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("->")]),n._v("一般用于释放资源\n​ conn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("Close")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n​ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n​ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("]")]),n._v("\n​ 注：Xxxxx表示的异常的种类\n​ Exception "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(":")]),n._v(" 能捕获所有的异常\n")])])]),a("h3",{attrs:{id:"第五章：知识巩固"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第五章：知识巩固"}},[n._v("#")]),n._v(" 第五章：知识巩固")]),n._v(" "),a("p",[n._v("一、Connection对象\n1、使用SqlConnection对象连接数据库\n第一步：字义连接数据库字符串\n第二步：创建连接对象并，打开数据库连接，详细参数如下表所示：\n第三步：做相关操作\n参数\t说明\nProvider\t这个属性用于设置或返回连接提供程序的名称，仅用于OleDBConnection对象\nConnection Timeout\t在终止尝试并产生异常前，等连接到服务器的连接时间长度（以秒为单位），默认值是15秒\nInitial Catalog或DataBase\t连接数据库的名称\nData Source或Server\t连接打开使用的SQL Server名称\nPassword或pwd\t连接数据的密码\nUser ID或uid\tSQL SERVER 登录帐户")]),n._v(" "),a("p",[n._v("2．使用OleDbConnection对象连接数据库\n第一步：定义连接数据库字符串\n第二步：打开数据库连接，详细参数如下表所示：\n第三步：相关操作")]),n._v(" "),a("h3",{attrs:{id:"第六章：复习提升"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第六章：复习提升"}},[n._v("#")]),n._v(" 第六章：复习提升")]),n._v(" "),a("p",[n._v("一、Command对象（SqlCommand）\n1、作用\n设置和执行SQL语句的对象。\n2、常用属性\nCommandType：获取和设置Command对象要执行命令的类型\nCommandText：获取和设置要对数据源执行的SQL语句或存储过程名或表名\nCommandTimeOut：获取和设置在终止对执行命令的尝试并生成错误之前的待时间\nConnection：获取或设置Command对象使用的Connection对象的名称\nParameters： 获取Command对象需要使用的参数集合\nTransaction：获取或设置将在SqlCommand对象执行的SqlTransaction对象")]),n._v(" "),a("p",[n._v("3、常用方法\nExecuteNonQuery：用户执行非Select命令，返回受影响的数据行数\nExecuteScalar：用于执行Select命令，返回数据中第一行第一列的值\nExecuteReader：执行Select命令，并返回一个DataReader对象")]),n._v(" "),a("p",[n._v("4、使用\n类名 对象名 = new 类名() ;\nSqlCommand cmd = new SqlCommand() ;\nSqlCommand cmd = new SqlCommand(string sql) ;\nSqlCommand cmd = new SqlCommand(string sql,SqlConnection conn) ;\nSqlCommand cmd = new SqlCommand(string sql,SqlConnection conn,SqlTransaction tran) ;")]),n._v(" "),a("p",[n._v('5、实现CRUD的操作\n第一：创建连接对象 -> SqlConnection\n1）定义连接字符串\nstring dbstr = "server=.;uid=sa;pwd=123;database=xsgl" ;\n2）创建SqlConnection并设置连接字符串\nSqlConnection conn = new SqlConnection(dbstr) ;')]),n._v(" "),a("p",[n._v('3）打开连接\nconn.Open() ;\n第二：创建语句对象 -> SqlCommand\n1）创建语句对象\nSqlCommand cmd = new SqlCommand() ;\n2）设置属性\ncmd.CommandText = "SQL语句" ;\ncmd.Connection = 连接对象 ;')]),n._v(" "),a("p",[n._v("第三：执行SQL语句 -> 返回受影响的记录数/DataReader对象\n命令对象.ExecuteNonQuery() ;\n或\n命令对象.ExecuteScalar() ;\n或\n命令对象.ExecuteReader() ;\n第四：关闭对象\n连接对象.Close() ;")]),n._v(" "),a("h4",{attrs:{id:"md5加密"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#md5加密"}},[n._v("#")]),n._v(" MD5加密")]),n._v(" "),a("p",[n._v('1、引用命名空间\nusing System.Security.Cryptography ;\n2、操作\n//第一：创建Md5加密对象\nMD5CryptoServiceProvider md5 = new MD5CryptoServiceProvider();\n//第二：把加密的数据转换为字节数组\nbyte[] bytes = Encoding.UTF8.GetBytes("明文");\n//第三：对字节数组进行加密\nbyte[] newBytes = md5.ComputeHash(bytes);\n//第四:把字符数组转换字符串，输出结果\nMessageBox.Show(BitConverter.ToString(bytes));')]),n._v(" "),a("p",[n._v("注：MD5加密后，得到一个32位的十六进制的字符串")]),n._v(" "),a("p",[n._v("三、Parameter对象（SqlParameter）\n1、作用：给SQL语句设置参数\n2、好处\n1）操作方便\n2）防止SQL注入，提高安全性\n3）提高查询执行性能\n3、使用-创建对象（构造方法）\nSqlParameter param = new SqlParameter() ;\nSqlParameter param = new SqlParameter(参数名称,数据类型) ;\nSqlParameter param = new SqlParameter(参数名称,数据) ;\nSqlParameter param = new SqlParameter(参数名称,数据类型,大小) ;")]),n._v(" "),a("p",[n._v("4、常用属性\nDirection：获取或设置一个值，该值表示参数是只可输入、只可输出、双向还是存储过程返回值参数。\nParameterName：获取或设置参数的名称。\nSize：获取或设置列中数据的最大大小。\nSqlDbType：获取或设置参数的数据类型，语法：SqlDbType.Xxxx。\nValue：获取或设置该参数的值。")]),n._v(" "),a("p",[n._v("5、常用方法\nCommand对象.Parameters.add(Parameter对象) ;\nCommand对象.Parameters.AddRange(Parameter对象数组) ;")]),n._v(" "),a("p",[n._v('6、操作\n第一：定义参数化的SQL语句,参数的语法：@参数名称\nstring sql = "insert into student(name,age) values (@xm,@age)" ;')]),n._v(" "),a("p",[n._v('第二：创建SqlParameter对象或SqlParameter对象数组\nSqlParameter param1 = new SqlParameter("@xm","张三") ;\nSqlParameter param2 = new SqlParameter("@age",18) ;\n或\nSqlParameter[] ps =\n{\n​ new SqlParameter("@xm","张三"),\n​ new SqlParameter("@age",18)\n}')]),n._v(" "),a("p",[n._v("第三：添加参数\nCommand对象.Parameters.add(param1) ;\nCommand对象.Parameters.add(param2) ;\n或\nCommand对象.Parameters.AddRange(ps) ;")]),n._v(" "),a("p",[n._v("四、DataReader对象（SqlDataReader）\n1、作用：读取查询的数据\n2、特点\n只读（而DataSet可读可写）\n以流的方式，单向读取\n一次只能读取一条记录\n3、使用\n通过Command对象的ExecuteReader()方法返回（创建）DataReader对象\nSqlDataReader reader = new SqlDataReader() ;\n4、常用属性\nFieldCount：返回列数（字段数量）\nHasRows：是否存在数据（记录、行）\nIsClosed：DataReader对象是否关闭")]),n._v(" "),a("p",[n._v('5、常用方法\nRead()：读取记录中的数据\nClose()：关闭DataReader对象\nGetValue(字段的下标索引)：获取指定字段的数据\nGetValues()：获取全部字段的数据\nIsNull("userId")：判断指定字段的数据是否为Null值')]),n._v(" "),a("p",[n._v("6、操作\n第一：执行查询的SQL语句，获取DataReader对象的实例\nSqlDataReader reader = Command对象.ExecuteReader() ;")]),n._v(" "),a("p",[n._v("第二：循环的读到数据\nwhile(reader.read()\n{\n​ //读取数据\n}")]),n._v(" "),a("p",[n._v('注：读取数据的方式有：\n方式一：通过下标读取(下标从0开始)\n数据类型 变量 = (数据类型)SqlDataReader对象[下标] ;\n方式二：通过字段名称读取\n数据类型 变量 = (数据类型)SqlDataReader对象["字段名称"] ;')]),n._v(" "),a("p",[n._v("第三：关闭SqlDataReader对象\nreader.Close() ;")]),n._v(" "),a("h3",{attrs:{id:"第七章：记事本开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第七章：记事本开发"}},[n._v("#")]),n._v(" 第七章：记事本开发")]),n._v(" "),a("p",[n._v("https://www.cnblogs.com/xdzy/p/9458683.html")]),n._v(" "),a("h4",{attrs:{id:"文章来源-https-www-cnblogs-com-xdzy-p-9457848-html"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文章来源-https-www-cnblogs-com-xdzy-p-9457848-html"}},[n._v("#")]),n._v(" 文章来源 https://www.cnblogs.com/xdzy/p/9457848.html")])])}),[],!1,null,null,null);t.default=s.exports}}]);