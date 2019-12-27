module.exports = {

  '/softskill/': [
    ['/', '简介'],
    {
      title: 'Csharp',
      collapsable: true,
      children: require("./softskill/Csharp.js"), //读取c#内容

    },
    {
      title: 'Vue',
      children: require("./softskill/Vue.js"),
    }
    ,
    {
      title: '数据库',
      collapsable: true,
      children: require("./softskill/Database.js"),
    }
    ,
    {
      title: 'WinForm',
      collapsable: true,
      children: require("./softskill/WinForm.js"),
    },

    {
      title: 'Headset',
      children: [

      ]
    },
    {
      title: 'Razor',
      children: require("./softskill/Razor.js"),
    },
    {
      title: 'NetCore',
      children: require("./softskill/NetCore.js"),
    },
    {
      title: 'Axios',
      children: require("./softskill/Axios.js"),
    },
    {
      title: 'EntityFramework',
      children: require("./softskill/EntityFramework.js"),
    },
    {
      title: 'VsCode',
      children: require("./softskill/VsCode.js"),
    },
    {
      title: '前端',
      children: [

      ]
    },
    {
      title: '杂项',
      children: [

      ]
    },
  ],
  // '/about/': [
  //   ['/', '简介'],
  //   {
  //     title: 'tututu',
  //     collapsable: false,
  //     children: require("./about/img.js"), //读取c#内容

  //   },

  // ]
}




