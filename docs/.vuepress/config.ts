import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  base: '/learning-notes/',
  lang: 'en-US',
  title: 'Learning Notes',
  description: 'A note taking web site',
  theme: defaultTheme({
    navbar: [
      { text: 'Home', link: '/' },
    ],
    sidebar: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Rust Learning',
        link: '/rust-learning/',
        children: [
          {text: 'Number Types',  // display on the side bar
            link: '/rust-learning/Num-type.md',
          },
        ],
      },
    ],
  }),
  bundler: viteBundler(),
})