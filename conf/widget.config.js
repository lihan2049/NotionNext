/**
 * 悬浮在网页上的挂件
 */
module.exports = {
  THEME_SWITCH: process.env.NEXT_PUBLIC_THEME_SWITCH || false, // 是否显示切换主题按钮
  // Chatbase 是否显示chatbase机器人 https://www.chatbase.co/
  CHATBASE_ID: process.env.NEXT_PUBLIC_CHATBASE_ID || null,
  // WebwhizAI 机器人 @see https://github.com/webwhiz-ai/webwhiz
  WEB_WHIZ_ENABLED: process.env.NEXT_PUBLIC_WEB_WHIZ_ENABLED || false, // 是否显示
  WEB_WHIZ_BASE_URL:
    process.env.NEXT_PUBLIC_WEB_WHIZ_BASE_URL || 'https://api.webwhiz.ai', // 可以自建服务器
  WEB_WHIZ_CHAT_BOT_ID: process.env.NEXT_PUBLIC_WEB_WHIZ_CHAT_BOT_ID || null, // 在后台获取ID
  DIFY_CHATBOT_ENABLED: process.env.NEXT_PUBLIC_DIFY_CHATBOT_ENABLED || false,
  DIFY_CHATBOT_BASE_URL: process.env.NEXT_PUBLIC_DIFY_CHATBOT_BASE_URL || '',
  DIFY_CHATBOT_TOKEN: process.env.NEXT_PUBLIC_DIFY_CHATBOT_TOKEN || '',

  // 悬浮挂件
  WIDGET_PET: process.env.NEXT_PUBLIC_WIDGET_PET || true, // 是否显示宠物挂件
  WIDGET_PET_LINK:
    process.env.NEXT_PUBLIC_WIDGET_PET_LINK ||
    'https://cdn.jsdelivr.net/npm/live2d-widget-model-wanko@1.0.5/assets/wanko.model.json', // 挂件模型地址 @see https://github.com/xiazeyu/live2d-widget-models
  WIDGET_PET_SWITCH_THEME:
    process.env.NEXT_PUBLIC_WIDGET_PET_SWITCH_THEME || false, // 点击宠物挂件切换博客主题

  SPOILER_TEXT_TAG: process.env.NEXT_PUBLIC_SPOILER_TEXT_TAG || '', // Spoiler文本隐藏功能，如Notion中 [sp]希望被spoiler的文字[sp]，填入[sp] 即可

  // 音乐播放插件
  MUSIC_PLAYER: process.env.NEXT_PUBLIC_MUSIC_PLAYER || true, // 是否使用音乐播放插件
  MUSIC_PLAYER_VISIBLE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_VISIBLE || true, // 是否在左下角显示播放和切换，如果使用播放器，打开自动播放再隐藏，就会以类似背景音乐的方式播放，无法取消和暂停
  MUSIC_PLAYER_AUTO_PLAY:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_AUTO_PLAY || false, // 是否自动播放，不过自动播放时常不生效（移动设备不支持自动播放）
  MUSIC_PLAYER_LRC_TYPE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_LRC_TYPE || '0', // 歌词显示类型，可选值： 3 | 1 | 0（0：禁用 lrc 歌词，1：lrc 格式的字符串，3：lrc 文件 url）（前提是有配置歌词路径，对 meting 无效）
  MUSIC_PLAYER_CDN_URL:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_CDN_URL ||
    'https://jsd.onmicrosoft.cn/gh/Daleveral/csslivb/jsv2.js',
  MUSIC_PLAYER_ORDER: process.env.NEXT_PUBLIC_MUSIC_PLAYER_ORDER || 'list', // 默认播放方式，顺序 list，随机 random
  MUSIC_PLAYER_AUDIO_LIST: [
    // 示例音乐列表。除了以下配置外，还可配置歌词，具体配置项看此文档 https://aplayer.js.org/#/zh-Hans/
    {
          name: 'なんでもないや',
          artist: 'Akie秋绘',
          url: 'http://music.163.com/song/media/outer/url?id=450795499.mp3',
          cover: '/images/aplayer.png'
    },
    {
          name: '风を共に舞う気持ち',
          artist: 'Falcom Sound Team jdk',
          url: 'https://music.163.com/song/media/outer/url?id=731419.mp3',
          cover: '/images/aplayer.png'
    },
    {
          name: '王都グランセル',
          artist: 'Falcom Sound Team jdk',
          url: 'https://music.163.com/song/media/outer/url?id=731355.mp3',
          cover: '/images/aplayer.png'
    },
    {
          name: 'Bohemian Rhapsody',
          artist: 'Queen',
          url: 'http://music.163.com/song/media/outer/url?id=1868553.mp3',
          cover: '/images/aplayer.png'
    },
    {
          name: 'On a Slow Boat to China',
          artist: 'Luke Thompson',
          url: 'http://music.163.com/song/media/outer/url?id=27591140.mp3',
          cover: '/images/aplayer.png'
    },
    {
          name: 'Liekkas',
          artist: 'Sofia Jannok',
          url: 'http://music.163.com/song/media/outer/url?id=3413895.mp3',
          cover: '/images/aplayer.png'
    },
        {
          name: 'That Girl',
          artist: 'Olly Murs',
          url: 'http://music.163.com/song/media/outer/url?id=864650750.mp3',
          cover: '/images/aplayer.png'
    },
    {
          name: '忽然之间',
          artist: '莫文蔚',
          url: 'http://music.163.com/song/media/outer/url?id=27937466.mp3',
          cover: '/images/aplayer.png'
    },
    {
          name: 'You Raise Me Up',
          artist: 'Westlife',
          url: 'http://music.163.com/song/media/outer/url?id=20707713.mp3',
          cover: '/images/aplayer.png'
    },
    {
          name: 'Mr.Moustafa',
          artist: 'Alexandre Desplat',
          url: 'http://music.163.com/song/media/outer/url?id=28289088.mp3',
          cover: '/images/aplayer.png'
    },
        {
          name: 'Here with You',
          artist: 'Asher Monroe',
          url: 'http://music.163.com/song/media/outer/url?id=27583305.mp3',
          cover: '/images/aplayer.png'
    },
    {
          name: 'Imagine',
          artist: 'John Lennon',
          url: 'http://music.163.com/song/media/outer/url?id=1476431.mp3',
          cover: '/images/aplayer.png'
    },
    {
          name: 'Hey Jude',
          artist: 'The Beatles',
          url: 'http://music.163.com/song/media/outer/url?id=5201810.mp3',
          cover: '/images/aplayer.png'
    },
    {
          name: 'Summer',
          artist: '久石让',
          url: 'http://music.163.com/song/media/outer/url?id=1867107328.mp3',
          cover: '/images/aplayer.png'
    },
    {
          name: 'Yellow',
          artist: 'Coldplay',
          url: 'http://music.163.com/song/media/outer/url?id=26807310.mp3',
          cover: '/images/aplayer.png'
    },
    {
          name: 'Here Comes the Sun',
          artist: 'The Beatles',
          url: 'http://music.163.com/song/media/outer/url?id=28100002.mp3',
          cover: '/images/aplayer.png'
    }
  ],
  MUSIC_PLAYER_METING: process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING || false, // 是否要开启 MetingJS，从平台获取歌单。会覆盖自定义的 MUSIC_PLAYER_AUDIO_LIST，更多配置信息：https://github.com/metowolf/MetingJS
  MUSIC_PLAYER_METING_SERVER:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_SERVER || 'netease', // 音乐平台，[netease, tencent, kugou, xiami, baidu]
  MUSIC_PLAYER_METING_ID:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_ID || '60198', // 对应歌单的 id
  MUSIC_PLAYER_METING_LRC_TYPE:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_LRC_TYPE || '1', // 已废弃！！！可选值： 3 | 1 | 0（0：禁用 lrc 歌词，1：lrc 格式的字符串，3：lrc 文件 url）

  // 一个小插件展示你的facebook fan page~ @see https://tw.andys.pro/article/add-facebook-fanpage-notionnext
  FACEBOOK_PAGE_TITLE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_TITLE || null, // 邊欄 Facebook Page widget 的標題欄，填''則無標題欄 e.g FACEBOOK 粉絲團'
  FACEBOOK_PAGE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE || null, // Facebook Page 的連結 e.g https://www.facebook.com/tw.andys.pro
  FACEBOOK_PAGE_ID: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID || '', // Facebook Page ID 來啟用 messenger 聊天功能
  FACEBOOK_APP_ID: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || '' // Facebook App ID 來啟用 messenger 聊天功能 获取: https://developers.facebook.com/
}
