export default {
  pages: [
    'pages/news/news',
    'pages/index/index',
    'pages/community/community'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#888',
    selectedColor: '#000',
    backgroundColor: '#fff',
    borderStyle: 'white',
    list: [
      {
        pagePath: 'pages/news/news',
        text: '新闻',
        iconPath: 'images/news.png',
        selectedIconPath: 'images/news-on.png'
      },
      {
        pagePath: 'pages/community/community',
        text: '社区',
        iconPath: 'images/community.png',
        selectedIconPath: 'images/community-on.png'
      }
    ]
  }
}
