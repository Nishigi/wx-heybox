export default {
  pages: [
    'pages/article/article',
    'pages/news/news',
    'pages/index/index',
    'pages/community/community',
    'pages/community-info/community-info',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#cdcdcd',
    selectedColor: '#515151',
    backgroundColor: '#fff',
    borderStyle: 'white',
    list: [
      {
        pagePath: 'pages/news/news',
        text: '新闻',
        iconPath: 'images/icon/news.png',
        selectedIconPath: 'images/icon/news-on.png'
      },
      {
        pagePath: 'pages/community/community',
        text: '社区',
        iconPath: 'images/icon/community.png',
        selectedIconPath: 'images/icon/community-on.png'
      }
    ]
  }
}
