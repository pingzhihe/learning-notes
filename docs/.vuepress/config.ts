import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'
import searchPlugin from '@vuepress/plugin-search'
import { markdownMathPlugin } from '@vuepress/plugin-markdown-math'

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
        children: [
          {text: 'Shortkeys', link: '/guide/shortkeys.md'},
        ],
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
      {
        text: 'Quantum Computing',
        link: '/quantum-computing/',
        children: [
          {text: 'Quantum algorithms', link: "/quantum-computing/shor's algotighm.md"},
        ],
      },
    ],
  }),
  bundler: viteBundler(),
  plugins: [
    searchPlugin(),
    markdownMathPlugin(),
  ],
})
