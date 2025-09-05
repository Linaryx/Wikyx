import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Заквиель",
  base: '/Wikyx/',
  description: "Спидранит всё, начиная с игр и заканчивая сквадами на твиче. Снимает интересные видео по майнкрафту и стримит на Twitch и YouTube",
  
  themeConfig: {
    siteTitle: 'Заквиель',
    
    nav: [
      { text: 'Главная', link: '/' },
      {
        text: 'Тесты',
        items: [
          { text: 'Тест шрифта', link: '/font-test' },
          { text: 'Markdown', link: '/markdown-examples' },
          { text: 'API Examples', link: '/api-examples' }
        ]
      }
    ],

    sidebar: {
      '/': [
        {
          text: 'Тесты',
          items: [
            { text: 'Тест шрифта', link: '/font-test' },
            { text: 'Markdown', link: '/markdown-examples' },
            { text: 'API Examples', link: '/api-examples' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'youtube', link: 'https://www.youtube.com/@zakvielchannel' },
      { icon: 'twitch', link: 'https://www.twitch.tv/zakvielchannel' },
      { icon: 'telegram', link: 'https://t.me/zakvielchannel' }
    ],

    footer: {
      message: 'Linaryx dev',
      copyright: 'Copyright © 2025'
    }
  },

  // Настройки для кастомных шрифтов и SEO
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap' }],
    ['meta', { name: 'theme-color', content: '#646cff' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'ru_RU' }],
    ['meta', { name: 'og:title', content: 'Заквиель - Стример и Ютубер' }],
    ['meta', { name: 'og:site_name', content: 'Заквиель Wiki' }],
    ['meta', { name: 'og:image', content: '/Wikyx/img/LogoDark.png' }],
    ['meta', { name: 'og:url', content: 'https://zakviel.wiki/' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Заквиель - Стример и Ютубер' }],
    ['meta', { name: 'twitter:description', content: 'Спидранит всё, начиная с игр и заканчивая сквадами на твиче. Снимает интересные видео по майнкрафту и стримит на Twitch и YouTube' }],
    ['meta', { name: 'keywords', content: 'заквиель, zakviel, стример, ютубер, майнкрафт, спидран, twitch, youtube, игры' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/Wikyx/favicon.ico' }],
    ['link', { rel: 'shortcut icon', type: 'image/x-icon', href: '/Wikyx/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', href: '/Wikyx/favicon.ico' }]
  ],

  // Настройки генерации сайтмапы
  sitemap: {
    hostname: 'https://zakviel.wiki'
  }
  
  // Примечание: Предупреждение о Inter шрифте - это нормально,
  // так как мы используем кастомные шрифты вместо стандартного Inter
})
