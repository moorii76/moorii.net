module.exports = {
  locales: {
    '/': {
      lang: 'ja',
      title: 'moorii.net',
      description: 'my profile website'
    }
  },
  head: [['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]],
  themeConfig: {
    sidebar: false,
    search: false,
    nav: [
      { text: 'Experience', link: '/experience' },
      { text: 'Portfolio', link: '/portfolio' },
      {
        text: 'Extra',
        items: [
          { text: 'Twitter', link: 'https://twitter.com/moorii_76' },
          { text: 'GitHub', link: 'https://github.com/moorii76' },
          { text: 'Qiita', link: 'https://qiita.com/moorii' }
        ]
      }
    ]
  }
}
