module.exports = [
  { text: '主页', link: '/', icon: 'reco-home' },

  { text: '时间轴', link: '/timeline/', icon: 'reco-date' },

  {
    text: '博客', icon: 'reco-bokeyuan',
    items: [
      { text: '博客园', link: 'https://www.cnblogs.com/' },
      { text: '个人博客', link: 'https://www.cnblogs.com/ouyangkai' },
    ]
  },
  {
    text: '导航站', icon: 'reco-menu',
    items: [
      { text: '学习导航站', link: 'http://oykperson.xyz:8084/' },
      {
        text: '.NET Core 官方指南', link: 'https://docs.microsoft.com/zh-cn/'
      },
      {
        text: 'VuePress图标', link: '/about/icon/1.md'
      },
      {
        text: '个性图库', link: '/about/img/1.md'
      },
      {
        text: 'vuepress1.x入门使用', link: '/about/vueperess/1.md'
      },
      {
        text: 'vuepress插件使用', link: '/about/vueperess/2.md'
      },
      {
        text: 'vuepress主题站', link: 'https://vuepress.tools/'
      },
      {
        text: 'NPM包管理工具', link: 'https://www.npmjs.com/'
      },
    ]
  },
  { text: '关于', link: '/about/', icon: 'reco-faq' },
  // {
  //   text: '技能', link: '/softskill/', icon: 'reco-suggestion',
  //   // items: [
  //   //   { text: '后端开发术语大全', link: '/softskill/' },
  //   // ]
  // },

]


