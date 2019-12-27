---
title: 关于博客
date: 2019-12-26
sidebar: false
author: SN
publish: false
prev: false
next: false
---

## 快速上手

**自定义容器**
> VuePress 内置了三种不同状态的自定义容器，分别有tip、warning和danger三种类型，在紧挨着类型的旁边，可以设置自定义容器标题，不写的话默认为TIP，它们的书写规则如下所示

::: tip 提醒
这里是tip容器
:::

::: warning 警告
这里是警告容器
:::

::: danger 危险
这里是危险容器
:::

### 代码块高亮和行号
##### 代码块高亮
在Markdown中，我们可以如下所示来进行代码块的高亮设置(类型后跟一个花括号)

`` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
``

### 这里是Emoji表情 :tada:
:100: :rocket: :smile: :smile: :laughing: :blush: :frowning: :worried: :sleeping: :stuck_out_tongue: :persevere: :innocent: :cry: :alien: :sob: :yellow_heart: :joy: :blue_heart: :grey_exclamation: :question: :exclamation: :anger: :facepunch: :running: :fist: :couple: :v: :family: :wave: :two_men_holding_hands: :man: :woman: :girl: :boy: :crying_cat_face: :joy_cat: :pouting_cat: :japanese_ogre: :thought_balloon: :speech_balloon: :busts_in_silhouette: :sunny: :umbrella: :cloud: :snowflake: :monkey_face: :boar: :cow: :pig_nose: :honeybee: :ant: :beetle: :snail: :dragon_face: :ox: :mouse2: :pig2: :fallen_leaf: :herb: :mushroom: :cactus: :full_moon: :waning_gibbous_moon: :last_quarter_moon: :waning_crescent_moon: :school_satchel: :dolls: :gift_heart: :bamboo: :balloon: :crystal_ball: :cd: :dvd: :hourglass: :mega: :loudspeaker: :mute: :low_brightness: :credit_card: :electric_plug: :money_with_wings: :battery: :e-mail: :calling: :inbox_tray: :chart_with_upwards_trend: :bar_chart: :bookmark_tabs: :page_with_curl: :green_book: :blue_book: :orange_book: :notebook: :horse_racing: :bicyclist: :mountain_bicyclist: :golf: :black_joker: :flower_playing_cards: :dart: :game_die: :necktie: :tshirt: :shirt: :fishing_pole_and_fish: :coffee: :womans_clothes: :sake: :tea: :rice_ball: :honey_pot: :rice_cracker: :apple: :fish_cake: :lollipop: :sushi: :candy: :house: :tokyo_tower: :airplane: :house_with_garden: :japan: :helicopter: :school: :mount_fuji: :steam_locomotive: :office: :sunrise_over_mountains: :tram: :ambulance: :slot_machine: :gb: :atm: :fire_engine: :atm: :ru: :it: :beginner: :oncoming_police_car: :police_car: :construction: :es: :one: :abc: :two: :arrow_lower_left: :three: :arrow_lower_right: :fast_forward: :secret: :congratulations: :information_source: :ok: :m: :sparkle: :ophiuchus: :clock1230: :tm: :black_small_square: :x: :white_small_square: :six_pointed_star: :clock2: :eight_pointed_black_star: :heart_decoration: :negative_squared_cross_mark: :clock230: :heavy_exclamation_mark: :black_medium_small_square: :small_red_triangle_down:



### Github风格的表格
有时候我们想要在.md文件中列一些简单的表格，可以像下面这样配置

| 序号          | 订单编号      | 订单金额|
| -------------|:-------------:| ------:|
| 1             | 20180101     | $1600  |
| 2             | 20180102     |   $12  |
| 3             | 20180103     |    $1  |

### 自动生成目录

我们有时候希望根据标题自动生成目录，可以使用[[toc]]来输出我们的目录，它默认只列举h2标题和h3标题

[[toc]]


### 外部链接

[百度一下](https://www.baidu.com) 

### Badge(角标)

#### Vue <Badge text="2.5.0+"/> 
#### Vuex <Badge text="beta" type="warn" vertical="top"/> 
#### Vue-Resource<Badge text="废弃" vertical="middle" type="error"/>





