/**
 * 另一个落地页主题
 */
const CONFIG = {

  // 默认只展示Logo文字，如果设置了logo图片，会在文字左侧显示图标
  STARTER_LOGO: '', // 普通logo图片 示例：/images/starter/logo/logo.svg
  STARTER_LOGO_WHITE: '', // 透明底浅色logo 示例： /images/starter/logo/logo-white.svg

  // MENU ， 菜单部分不在此处配置，请在Notion数据库中添加MENU

  // 英雄区块导航
  STARTER_HERO_ENABLE: true, // 开启英雄区
  STARTER_HERO_TITLE_1: '上海市麻醉与脑功能调控重点实验室', // 英雄区文字
  STARTER_HERO_TITLE_2: '欢迎关注本实验室！', // 英雄区文字
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  STARTER_HERO_BUTTON_1_TEXT: '开始畅游', // 英雄区按钮
  STARTER_HERO_BUTTON_1_URL: 'https://www.pubtools.top/archive', // 英雄区按钮
  STARTER_HERO_BUTTON_2_TEXT: '关注Github', // 英雄区按钮
  STARTER_HERO_BUTTON_2_URL: 'https://github.com/pubtools', // 英雄区按钮
  STARTER_HERO_BUTTON_2_ICON: '/images/starter/github.svg', // 英雄区按钮2的图标，不需要则留空

  STARTER_HERO_PREVIEW_IMAGE: '/images/starter/pubtools.png', // 产品预览图 ，默认读取public目录下图片

  // 顶部右侧导航暗流
  //STARTER_NAV_BUTTON_1_TEXT: 'Sign In',
  //STARTER_NAV_BUTTON_1_URL: '/signin',

  //STARTER_NAV_BUTTON_2_TEXT: 'Sign Up',
  //STARTER_NAV_BUTTON_2_URL: '/signup',

  // 特性区块
  STARTER_FEATURE_ENABLE: true, // 特性区块开关
  STARTER_FEATURE_TITLE: '实验室介绍', // 特性
  STARTER_FEATURE_TEXT_1: '主任致辞', // 特性
  STARTER_FEATURE_TEXT_2: '上海市麻醉与脑功能调控重点实验室于2022年获批，对标世界顶尖的生物医学领域研究机构。重点实验室以培养具有国际视野、原始创新、德才兼备的创新人才为目标，实行医工交叉、多学科融合、以服务国家大健康战略和临床为导向开展前沿科学研究。', // 特性

  STARTER_FEATURE_1_TITLE_1: '聚焦麻醉与脑功能调控', // 特性1
  STARTER_FEATURE_1_TEXT_1: '以“麻醉与脑功能调控”为研究核心，开展麻醉机制与脑功能、脆弱脑与麻醉、麻醉深度监测与精准麻醉、人工智能与麻醉优化的基础和临床研究，产出具有国际影响力的重大成果。', // 特性1
  STARTER_FEATURE_1_BUTTON_TEXT: '了解更多', // 特性1
  STARTER_FEATURE_1_BUTTON_URL: 'https://www.pubtools.top/info', // 特性1

  STARTER_FEATURE_2_TITLE_1: '促进科研成果的有效转化', // 特性2
  STARTER_FEATURE_2_TEXT_1: '解决影响麻醉手术安全与术后中远期转归的诸多科学问题，实现精准麻醉。', // 特性2
  STARTER_FEATURE_2_BUTTON_TEXT: '了解更多', // 特性2
  STARTER_FEATURE_2_BUTTON_URL: 'https://www.pubtools.top/info', // 特性2

  STARTER_FEATURE_3_TITLE_1: '多学科交叉大型实验平台建设', // 特性3
  STARTER_FEATURE_3_TEXT_1: '建设和进一步发展对社会高度开放的多学科交叉大型实验平台，为麻醉学和神经科学的发展提供有力支撑。', // 特性3
  STARTER_FEATURE_3_BUTTON_TEXT: '了解更多', // 特性3
  STARTER_FEATURE_3_BUTTON_URL: 'https://www.pubtools.top/info', // 特性3

  STARTER_FEATURE_4_TITLE_1: '依托同济大学和上海市政府', // 特性4
  STARTER_FEATURE_4_TEXT_1: '依托同济大学和上海市政府重大科技基础设施和技术优势，开展具有特色的多学科交叉前沿研究。聚集一支集麻醉学、神经科学、材料学、人工智能等领域相关学科前沿人才的交叉学科团队；培养具有国际影响力的中青年领军人才，向社会传播医学知识和科学精神。', // 特性4
  STARTER_FEATURE_4_BUTTON_TEXT: '了解更多', // 特性4
  STARTER_FEATURE_4_BUTTON_URL: 'https://www.pubtools.top/info', // 特性4

  //STARTER_FEATURE_5_TITLE_1: '培养交叉学科团队', // 特性5
  //STARTER_FEATURE_5_TEXT_1: '聚集一支集麻醉学、神经科学、材料学、人工智能等领域相关学科前沿人才的交叉学科团队；培养具有国际影响力的中青年领军人才，向社会传播医学知识和科学精神。', // 特性5
  //STARTER_FEATURE_5_BUTTON_TEXT: '了解更多', // 特性5
  //STARTER_FEATURE_5_BUTTON_URL: 'https://www.pubtools.top/info', // 特性5

  // 首页ABOUT区块
  STARTER_ABOUT_ENABLE: true, // ABOUT区块开关
  STARTER_ABOUT_TITLE: '组织架构',
  STARTER_ABOUT_TEXT: '',
  STARTER_ABOUT_BUTTON_TEXT: '了解更多',
  STARTER_ABOUT_BUTTON_URL: 'https://www.pubtools.top/info',
  STARTER_ABOUT_IMAGE_1: '/images/starter/zzjgM.png',
  STARTER_ABOUT_IMAGE_2: '/images/starter/about/about-image-02.jpg',
  STARTER_ABOUT_TIPS_1: '7000+',
  STARTER_ABOUT_TIPS_2: '上海市重点实验室',
  STARTER_ABOUT_TIPS_3: '正在运行',

  // 首页价格区块
  STARTER_PRICING_ENABLE: true, // 价格区块开关
  STARTER_PRICING_TITLE: '人才政策',
  STARTER_PRICING_TEXT_1: '全面的人才计划',
  STARTER_PRICING_TEXT_2: '',

  STARTER_PRICING_1_TITLE: '学科带头人',
  STARTER_PRICING_1_PRICE: '30-120',
  STARTER_PRICING_1_PRICE_CURRENCY: '万元',
  STARTER_PRICING_1_PRICE_PERIOD: '每年',
  STARTER_PRICING_1_HEADER: '类型',
  STARTER_PRICING_1_FEATURES: 'A类,B类,C类', // 英文逗号隔开
  STARTER_PRICING_1_BUTTON_TEXT: '了解更多',
  STARTER_PRICING_1_BUTTON_URL: 'https://www.pubtools.top/join',

  STARTER_PRICING_2_TAG: '推荐',
  STARTER_PRICING_2_TITLE: '专业技术骨干',
  STARTER_PRICING_2_PRICE: '20-40',
  STARTER_PRICING_2_PRICE_CURRENCY: '万元',
  STARTER_PRICING_2_PRICE_PERIOD: '每年',
  STARTER_PRICING_2_HEADER: '类型',
  STARTER_PRICING_2_FEATURES: 'D类,E类', // 英文逗号隔开
  STARTER_PRICING_2_BUTTON_TEXT: '了解更多',
  STARTER_PRICING_2_BUTTON_URL: 'https://www.pubtools.top/join',

  STARTER_PRICING_3_TITLE: '规培青年人才',
  STARTER_PRICING_3_PRICE: '6-15',
  STARTER_PRICING_3_PRICE_CURRENCY: '万元',
  STARTER_PRICING_3_PRICE_PERIOD: '每年',
  STARTER_PRICING_3_HEADER: '类型',
  STARTER_PRICING_3_FEATURES: '初级,中级', // 英文逗号隔开
  STARTER_PRICING_3_BUTTON_TEXT: '了解更多',
  STARTER_PRICING_3_BUTTON_URL: 'https://www.pubtools.top/join',

  // 首页用户测评区块
  STARTER_TESTIMONIALS_ENABLE: true, // 测评区块开关
  STARTER_TESTIMONIALS_TITLE: '学生反馈',
  STARTER_TESTIMONIALS_TEXT_1: '我们的学生怎么说',
  STARTER_TESTIMONIALS_TEXT_2: '通过帮助手册、交流社群以及科研咨询，大家成功发表了自己的SCI',
  STARTER_TESTIMONIALS_STAR_ICON: '/images/starter/testimonials/icon-star.svg', // 评分图标

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TESTIMONIALS_ITEMS: [
    {
      STARTER_TESTIMONIALS_ITEM_TEXT: '感谢院长的指点，已经用起来了！ ',
      STARTER_TESTIMONIALS_ITEM_AVATAR: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0d33d169-f932-41ff-ac6b-88a923c08e02%2F%25E5%25A4%25B4%25E5%2583%258F.jfif?table=collection&id=7787658d-d5c0-4f34-8e32-60c523dfaba3&width=400',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '黄**',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '博士后',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT: '一直在学习中，太感谢院长了',
      STARTER_TESTIMONIALS_ITEM_AVATAR: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F6c096b44-beb9-48ee-8f92-1efdde47f3a3%2F338962f1-d352-49c7-9a1b-746e35a7005c%2Fhf.png?table=block&id=ce5a48a9-d77a-4843-a3d9-a78cd4f794ce&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '郑**',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '博士',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    }
  ],

  //   FAQ 常见问题模块
  STARTER_FAQ_ENABLE: false, // 常见问题模块开关
  STARTER_FAQ_TITLE: '常见问题解答',
  STARTER_FAQ_TEXT_1: '科研中有任何问题吗？请看这里',
  STARTER_FAQ_TEXT_2: '我们收集了常见的用户疑问',

  STARTER_FAQ_1_QUESTION: 'NotionNext有帮助文档吗？',
  STARTER_FAQ_1_ANSWER: 'NotionNext提供了<a href="https://docs.tangly1024.com/about" className="underline">帮助文档</a>，操作<a href="https://www.bilibili.com/video/BV1fM4y1L7Qi/" className="underline">演示视频</a>，以及<a href="https://docs.tangly1024.com/article/chat-community" className="underline">交流社群</a>来协助您完成网站的搭建部署',

  STARTER_FAQ_2_QUESTION: '部署后要如何编写文章？',
  STARTER_FAQ_2_ANSWER: '您可以在Notion中之间添加或修改类型为Post的页面，内容将被实时同步在站点中，详情参考<a className="underline" href="https://docs.tangly1024.com/article/start-to-write">《帮助文档》</a>',

  STARTER_FAQ_3_QUESTION: '站点部署失败，更新失败？',
  STARTER_FAQ_3_ANSWER: '通常是配置修改错误导致，请检查配置或者重试操作步骤，或者通过Vercel后台的Deployments中找到错误日志，并向网友求助',

  STARTER_FAQ_4_QUESTION: '文章没有实时同步？',
  STARTER_FAQ_4_ANSWER: '先检查Notion_Page_ID是否正确配置，其次由于博客的每个页面都有独立缓存，刷新网页后即可解决',

  // 团队成员区块
  STARTER_TEAM_ENABLE: false, // 团队成员区块开关
  STARTER_TEAM_TITLE: '团队成员',
  STARTER_TEAM_TEXT_1: '我们的开发者团队',
  STARTER_TEAM_TEXT_2: 'NotionNext 由众多开源技术爱好者们共同合作完成，感谢每一位<a className="underline" href="https://github.com/tangly1024/NotionNext/graphs/contributors">贡献者</a>',

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TEAM_ITEMS: [
    {
      STARTER_TEAM_ITEM_AVATAR: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa06c61bb-980e-4180-bc18-c15f92c78bb4%2Ftangly1024.jpg?table=collection&id=8e7acf17-de09-4fa1-abde-b5b80ad4a813&t=8e7acf17-de09-4fa1-abde-b5b80ad4a813&width=100&cache=v2',
      STARTER_TEAM_ITEM_NICKNAME: 'Tangly',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Developer'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-01.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Melissa Tatcher',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Marketing Expert'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-02.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Stuard Ferrel',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Digital Marketer'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-03.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Eva Hudson',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Creative Designer'
    }
  ],

  // 博客文章区块
  STARTER_BLOG_ENABLE: true, // 首页博文区块开关
  STARTER_BLOG_TITLE: '学习专区',
  STARTER_BLOG_COUNT: 3, // 首页博文区块默认展示前3篇文章
  STARTER_BLOG_TEXT_1: '最近的学习资料',
  STARTER_BLOG_TEXT_2: '这里会发布一些关于科研中常见问题的最新动态！',

  // 联系模块
  STARTER_CONTACT_ENABLE: true, // 联系模块开关
  STARTER_CONTACT_TITLE: '联系我们',
  STARTER_CONTACT_TEXT: '诚挚地欢迎您！',
  STARTER_CONTACT_LOCATION_TITLE: '我们的位置',
  STARTER_CONTACT_LOCATION_TEXT: '中国，上海',
  STARTER_CONTACT_EMAIL_TITLE: '我们如何帮助您？',
  STARTER_CONTACT_EMAIL_TEXT: '1037388002@qq.com',

  // 嵌入外部表单
  STARTER_CONTACT_MSG_EXTERNAL_URL: 'https://noteforms.com/forms/skablabuserdata-kadbbq', // 基于NoteForm创建，将留言数据存在Notion中
  //   自定义留言表单，以下几个配置暂时废弃
  //   STARTER_CONTACT_MSG_TITLE: '向我们留言',
  //   STARTER_CONTACT_MSG_NAME: '姓名',
  //   STARTER_CONTACT_MSG_EMAIL: '邮箱地址',
  //   STARTER_CONTACT_MSG_PHONE: '联系电话',
  //   STARTER_CONTACT_MSG_TEXT: '消息内容',
  //   STARTER_CONTACT_MSG_SEND: '发送消息',
  //   STARTER_CONTACT_MSG_THANKS: '感谢您的留言',

  // 合作伙伴的图标
  STARTER_BRANDS_ENABLE: false, // 合作伙伴开关
  STARTER_BRANDS: [
    {
      IMAGE: '/images/starter/brands/graygrids.svg',
      IMAGE_WHITE: '/images/starter/brands/graygrids-white.svg',
      URL: 'https://graygrids.com/',
      TITLE: 'graygrids'
    },
    {
      IMAGE: '/images/starter/brands/lineicons.svg',
      IMAGE_WHITE: '/images/starter/brands/lineicons-white.svg',
      URL: 'https://lineicons.com/',
      TITLE: 'lineicons'
    },
    {
      IMAGE: '/images/starter/brands/uideck.svg',
      IMAGE_WHITE: '/images/starter/brands/uideck-white.svg',
      URL: 'https://uideck.com/',
      TITLE: 'uideck'
    },
    {
      IMAGE: '/images/starter/brands/ayroui.svg',
      IMAGE_WHITE: '/images/starter/brands/ayroui-white.svg',
      URL: 'https://ayroui.com/',
      TITLE: 'ayroui'
    },
    {
      IMAGE: '/images/starter/brands/tailgrids.svg',
      IMAGE_WHITE: '/images/starter/brands/tailgrids-white.svg',
      URL: '"https://tailgrids.com/',
      TITLE: 'tailgrids'
    }
  ],

  STARTER_FOOTER_SLOGAN: '国际领先的麻醉与围术期医学中心大型综合性多学科研究基地',

  // 页脚三列菜单组
  STARTER_FOOTER_LINK_GROUP: [
    {
      TITLE: '关于我们',
      LINK_GROUP: [
        { TITLE: '官方主页', URL: '/#home' },
        { TITLE: '操作文档', URL: 'https://www.pubtools.top/archive' },
        { TITLE: '帮助支持', URL: 'https://www.pubtools.top/help' },
        { TITLE: '合作申请', URL: 'https://www.pubtools.top/collaborate' }
      ]
    },
    {
      TITLE: '主管单位',
      LINK_GROUP: [
        { TITLE: '上海市第四人民医院', URL: 'https://www.sh4th.com/index.html' },
        { TITLE: '同济大学', URL: 'https://www.tongji.edu.cn/' },
        { TITLE: '上海市政府', URL: 'https://www.shanghai.gov.cn/' }
      ]
    },
    {
      TITLE: '科研平台',
      LINK_GROUP: [
        { TITLE: '双膜片钳电生理平台', URL: '' },
        { TITLE: '小动物手术麻醉监护平台', URL: '' },
        { TITLE: '显微成像平台', URL: '' },
        { TITLE: '质谱平台', URL: '' },
        { TITLE: '3D打印与新材料平台', URL: '' },
        { TITLE: '细胞流式平台', URL: '' },
        { TITLE: '代谢分析平台', URL: '' },
        { TITLE: 'SPF动物房与转基因技术平台', URL: '' }
      ]
    }
  ],

  STARTER_FOOTER_BLOG_LATEST_TITLE: '最新文章',

  STARTER_FOOTER_PRIVACY_POLICY_TEXT: '隐私政策',
  STARTER_FOOTER_PRIVACY_POLICY_URL: 'https://www.pubtools.top/privacy-policy',

  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: '法律声明',
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL: 'https://www.pubtools.top/legacy-notice',

  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '服务协议',
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: 'https://www.pubtools.top/terms-of-use',

  // 404页面的提示语
  STARTER_404_TITLE: '我们似乎找不到您要找的页面。',
  STARTER_404_TEXT: '抱歉！您要查找的页面不存在。可能已经移动或删除。',
  STARTER_404_BACK: '回到主页',

  STARTER_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
  STARTER_POST_REDIRECT_URL: 'https://www.pubtools.top/', // 重定向域名
  STARTER_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_STARTER_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
