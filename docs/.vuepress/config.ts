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
          {text: 'Basic computing and quantum computing Theory', link: '/quantum-computing/Basic.md'},
          {text: 'Teleportation', link: '/quantum-computing/Teleportation.md'},
          {text: 'QKD and QFT', link:'/quantum-computing/QFT.md'},
          {text: 'QAOA', link: '/quantum-computing/QAOA.md'},
          {text: 'Quantum algorithms', link: "/quantum-computing/shor's algotighm.md"},
          {text: "Week 11", link:"/quantum-computing/week11.md"},
        ],
      },
      {
        text: 'Statical Machine Learning',
        link: '/stat-machine-learning/',
        children: [
          {text: 'Bayesian Linear Regression', link: '/stat-machine-learning/Bayesian.md'},
          {text: 'Linear regression and logistic regresion', link:'/stat-machine-learning/revision.md'},
          {text: 'Bais', link:'/stat-machine-learning/revision-2.md'},
        ],
      },
      {
        text: 'Software Project Management',
        link: '/SPM/',
        children: [
          {text: 'Lecture', link: '/SPM/lec.md'},
        ],
      },
      {
        text: 'AI-planning',
        link:'/AI-planning/',
        children: [
          {text: 'Revision', link: '/AI-planning/revision.md'},
        ],
      }
    ],
  }),
  bundler: viteBundler(),
  plugins: [
    searchPlugin(),
    markdownMathPlugin(),
  ],
})
