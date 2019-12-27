(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{260:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"要点："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#要点："}},[t._v("#")]),t._v(" 要点：")]),t._v(" "),a("p",[t._v("1.用npm操作会有各种问题，用yarn取代之;\n　　2.yarn可以用npm全局安装,而npm是node环境自带，node环境去官网下载安装;\n　　3.没有必要全局安装vuepress")]),t._v(" "),a("h3",{attrs:{id:"操作："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作："}},[t._v("#")]),t._v(" 操作：")]),t._v(" "),a("p",[t._v("1.新建一个空文件夹，这里我取名叫learn-vuepress,注意项目名不要写成驼峰写法（learnVuepress），因为在依赖项配置里面，这样的项目名称是不合法的。在项目目根目录下新建名为docs的空文件夹，在docs文件夹内，再建一个.vuepress文件夹。结构如下：")]),t._v(" "),a("p",[t._v("如果不想这样用命令行来建文件夹，那就手动来，也是一样的。最后就是这样子，三层结构。")]),t._v(" "),a("p",[t._v("2.初始化依赖配置表。也就是说初始化一个package.json。这里执行 yarn init -y。-y代表“yes”，也就是无询问初始化配置表。")]),t._v(" "),a("p",[t._v("3.为项目的生产环境安装vuepress。控制台运行yarn add -D vuepress@next。即为生产环境安装vuepress，同时node_modules也会下载好，一步到位。")]),t._v(" "),a("p",[t._v("4.在package.json里面添加如下键值对：")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"docs:dev"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress dev docs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"docs:build"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress build docs"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这个键值对就很明显地告诉我们：运行yarn run docs:dev，项目就可以跑起来了。")]),t._v(" "),a("p",[t._v("5.在docs根目录下添加md文件，这是进入项目在没有手动选择任何路径时，也就是处于/根路径时的默认入口展示页面。")]),t._v(" "),a("p",[t._v("6.在docs的根目录再建模块文件夹，模块文件夹里面为具体的md文件，想取什么名字都行。")]),t._v(" "),a("p",[t._v("7.在每个md文件书写相应的内容，都以一级标题开头。")]),t._v(" "),a("p",[t._v("8.在.vuepress根目录下新建public目录，这通常用来存个favicon啥的，而config.js则是重头戏了。")]),t._v(" "),a("p",[t._v("9.配置config.js\n　　完整代码：")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'学习vuepress'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//网站标题")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("base")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//打包后的base路径")]),t._v("\n    themeConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//主题配置")]),t._v("\n        head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'link'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" rel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'icon'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" href"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/favicon.ico'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//引入favicon")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        search"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//不要搜索框")]),t._v("\n        sidebarDepth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        sidebar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//侧边栏")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'介绍'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              collapsable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              children"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'后端'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                collapsable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                children"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/back-end/node.md'")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'前端'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              collapsable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              children"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" \n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/font-end/html.md'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/font-end/css.md'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/font-end/javascript.md'")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("在sidebar的第一项中，我们引入了README.md文件")]),t._v(" "),a("h2",{attrs:{id:"vuepress-theme-reco"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-theme-reco"}},[t._v("#")]),t._v(" vuepress-theme-reco")]),t._v(" "),a("h3",{attrs:{id:"安装和引用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装和引用"}},[t._v("#")]),t._v(" 安装和引用")]),t._v(" "),a("p",[a("strong",[t._v("Install")]),t._v(" "),a("code",[t._v("npm install vuepress-theme-reco -dev--save")])]),t._v(" "),a("p",[a("strong",[t._v("or")]),t._v(" "),a("code",[t._v("yarn add vuepress-theme-reco")])]),t._v(" "),a("p",[a("strong",[t._v("Usage")]),t._v("\n// .vuepress/config.js")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  theme"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'reco'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"front-matter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#front-matter"}},[t._v("#")]),t._v(" Front Matter")]),t._v(" "),a("p",[t._v("一个完整的 Front Matter 案例：")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\ntitle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 烤鸭的做法\ndate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("08")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("08")]),t._v("\nsidebar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'auto'")]),t._v("\ncategories"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" 烹饪\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" 爱好\ntags"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" 烤\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" 鸭子\nkeys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'123456'")]),t._v("\npublish"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\n")])])]),a("h4",{attrs:{id:"title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#title"}},[t._v("#")]),t._v(" title")]),t._v(" "),a("p",[t._v("description: 文章标题，放弃通过一级目录定义标题的方式，改在 Front Matter 中定义。")]),t._v(" "),a("h4",{attrs:{id:"date"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#date"}},[t._v("#")]),t._v(" date")]),t._v(" "),a("p",[t._v("description: 文章创建日期，格式 2019-08-08 或 2019-08-08 08:08:08。\n####sidebar\ndescription: 是否开启侧边栏。")]),t._v(" "),a("h4",{attrs:{id:"categories"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#categories"}},[t._v("#")]),t._v(" categories")]),t._v(" "),a("p",[t._v("description: 所属分类。")]),t._v(" "),a("h4",{attrs:{id:"tags"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tags"}},[t._v("#")]),t._v(" tags")]),t._v(" "),a("p",[t._v("description: 所属标签。")]),t._v(" "),a("h4",{attrs:{id:"keys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keys"}},[t._v("#")]),t._v(" keys")]),t._v(" "),a("p",[t._v("description: 文章加密密码。")]),t._v(" "),a("h4",{attrs:{id:"publish"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#publish"}},[t._v("#")]),t._v(" publish")]),t._v(" "),a("p",[t._v("description: 文章是否发布。")]),t._v(" "),a("h4",{attrs:{id:"sticky-1-1-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sticky-1-1-2"}},[t._v("#")]),t._v(" sticky 1.1.2+")]),t._v(" "),a("p",[t._v("description: 文章置顶。\ntype: number\nsort type: 降序，可以按照 1, 2, 3, ... 来降低置顶文章的排列优先级")]),t._v(" "),a("h3",{attrs:{id:"内置搜索"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内置搜索"}},[t._v("#")]),t._v(" 内置搜索")]),t._v(" "),a("p",[t._v("你可以通过设置 themeConfig.search: false 来禁用默认的搜索框，或是通过 themeConfig.searchMaxSuggestions 来调整默认搜索框显示的搜索结果数量：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  themeConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    search"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    searchMaxSuggestions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("内置搜索只会为页面的标题、h2 和 h3 构建搜索索引，如果你需要全文搜索，你可以使用 Algolia 搜索。")]),t._v(" "),a("h3",{attrs:{id:"最后更新时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最后更新时间"}},[t._v("#")]),t._v(" 最后更新时间")]),t._v(" "),a("p",[t._v("你可以通过 themeConfig.lastUpdated 选项来获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  themeConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    lastUpdated"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Last Updated'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// string | boolean")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("}\n请注意，themeConfig.lastUpdated 默认是关闭的，如果给定一个字符串，它将会作为前缀显示（默认值是：Last Updated）。\n"),a("strong",[t._v("使用须知")]),t._v("\n由于 lastUpdated 是基于 git 的, 所以你只能在一个基于 git 的项目中启用它。")]),t._v(" "),a("h3",{attrs:{id:"上-下一篇链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上-下一篇链接"}},[t._v("#")]),t._v(" 上 / 下一篇链接")]),t._v(" "),a("p",[t._v("上一篇和下一篇文章的链接将会自动地根据当前页面的侧边栏的顺序来获取。你也可以使用 YAML front matter 来明确地重写或者禁用它：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\nprev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("some"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("other"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("page\nnext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\n")])])]),a("h3",{attrs:{id:"特定页面的自定义布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特定页面的自定义布局"}},[t._v("#")]),t._v(" 特定页面的自定义布局")]),t._v(" "),a("p",[t._v("默认情况下，每个 *.md 文件将会被渲染在一个 ")]),a("div",{staticClass:"page"},[t._v(" 容器中，同时还有侧边栏、自动生成的编辑链接，以及上 / 下一篇文章的链接。如果你想要使用一个完全自定义的组件来代替当前的页面（而只保留导航栏），你可以再次使用 YAML front matter 来指定这个组件。"),a("p"),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\nlayout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" SpecialLayout\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\n")])])]),a("p",[t._v("这将会为当前的页面渲染 .vuepress/components/SpecialLayout.vue 布局。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);