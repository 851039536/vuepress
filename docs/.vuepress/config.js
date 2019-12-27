module.exports = {

  title: '少年',
  description: 'How are you young!',
  evergreen: true,
  theme: 'reco',

  plugins: [
    ["@vuepress-reco/back-to-top", true],
    //["@vuepress-reco/vuepress-plugin-kan-ban-niang"], //看板
    ["@vuepress-reco/vuepress-plugin-loading-page", true], //动态加载
    // ["@aplayer"],
    ["@vuepress-reco/vuepress-plugin-bgm-player",
      {
        audios: [
          {
            name: '世间美好与你环环相扣',
            artist: '柏松/听闻余生',
            url: '/mp3/0459_045c_520c_330c359473365e50a368ef0d43bc612f.mp3',
            cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
          },

          {
            name: '给未来的自己(Live)',
            artist: '杨宗纬',
            url: '/mp3/5502_b286_a6b7_d0bd953daa9525eb89e82e0b5fd4cfce.mp3',
            cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
          },

          {
            name: '小半',
            artist: '小',
            url: '/mp3/2d15_d9fd_57cd_6679396a63ff496ecef0453b25612dfa.mp3',
            cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
          },
        ]
      }
    ],
    ['@vuepress-reco/comments', {
      solution: 'valine',
      options: {
        appId: '00Re4LOukbFG29XJPXGEbzhm-gzGzoHsz',// your appId
        appKey: 'cmLAV9Ck1jiymaSfFtWRdzaL', // your appKey

      }
    }],

    [
      "ribbon",
      {
        size: 90, // 彩带的宽度，默认为 90
        opacity: 0.2, // 彩带的不透明度，默认为 0.3
        zIndex: -1 // 彩带的 z-index 属性，默认值为 -1
      }
    ],

    [
      "dynamic-title",
      {
        showIcon: "/favicon.ico",
        showText: "(/≧▽≦/)咦！又好了！",
        hideIcon: "/failure.ico",
        hideText: "(●—●)喔哟，崩溃啦！",
        recoverTime: 2000
      }
    ]
  ],
  themeConfig: {
    sidebar: 'auto',
    //主题颜色选择器
    themePicker: false,
    // 博客配置
    blogConfig: {
      category: {
        location: 2,     // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认文案 “分类”
      },
      tag: {
        location: 3,     // 在导航栏菜单中所占的位置，默认3
        text: '标签'      // 默认文案 “标签”
      }
    },
    nav: require("./nav.js"),
    sidebar: require("./sidebar.js"),

    sidebarDepth: 2,
    //displayAllHeaders: true, // 默认值：false 显示所有页面的标题链接
    lastUpdated: 'Last Updated',

    // 备案号
    record: '© 2019. All Rights Reserved. 粤ICP备19130826号 ',
    // 项目开始时间，只填写年份
    startYear: '2017',
    // author全局作者姓名
    author: 'SN',
    // huawei: true,
    type: 'blog',
    friendLink: [
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: 'recoluan@qq.com',
        link: 'https://www.recoluan.com'
      },
      // ...
    ]

  }
}



