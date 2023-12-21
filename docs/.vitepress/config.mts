import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Go 数据结构与算法",
  description: "Go 数据结构与算法，围绕着基于 Go 语言使用泛型实现各种数据结构与算法的主题去编写内容。",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '关于本书', link: '/about/about.md' },
    ],
    sidebar: [
      {
        items: [
          {text: '关于本书', link: '/about/about.md'},
        ]
      },
      {
        text: '第一章：数据结构',
        items: [
          {text: '链表', link: '/linked_list/linked_list.md'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/chenmingyong0423' }
    ]
  },
})
