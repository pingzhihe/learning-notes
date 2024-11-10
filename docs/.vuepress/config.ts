import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'
import { searchPlugin } from '@vuepress/plugin-search'
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
        collapsible: true,
        children: [
          {text: 'Shortkeys', link: '/guide/shortkeys.md'},
        ],
      },
      {
        text: 'Rust Learning',
        link: '/rust-learning/',
        collapsible: true,
        children: [
          {text: '1.Number Types',  // display on the side bar
            link: '/rust-learning/Num-type.md',
          },
          {text: '2.Ownership', link: '/rust-learning/Ownership.md'},
          {text: '3.Struct', link: '/rust-learning/Struct.md'},
          {text: '4.Enum', link: '/rust-learning/Emun.md'},
          {text: '5.Package-management', link: '/rust-learning/Package-management.md'},
          {text: '6.Vector', link: '/rust-learning/Vector.md'},
          {text: '7.Error handle', link: '/rust-learning/Error-handle.md'},
          {text: '8.Trait  泛型', link: '/rust-learning/Trait.md'},
          {text: '9.Life time', link: '/rust-learning/Life-time.md'},
          {text: '10.Test', link: '/rust-learning/Test.md'},
          {text: '11.Minigrep', link: '/rust-learning/Minigrep.md'},
          {text: '12.Closure 闭包', link: '/rust-learning/Closure.md'},
          
        ],
      },
      {
        text: 'Quantum Computing',
        link: '/quantum-computing/',
        collapsible: true,
        children: [
          {text: 'Basic computing and quantum computing Theory', link: '/quantum-computing/Basic.md'},
          {text: 'Teleportation', link: '/quantum-computing/Teleportation.md'},
          {text: 'QKD and QFT', link:'/quantum-computing/QFT.md'},
          {text: "QFE and Shor's algorithm", link:'/quantum-computing/QFE.md'},
          {text: 'QAOA', link: '/quantum-computing/QAOA.md'},
          {text: 'Quantum algorithms', link: "/quantum-computing/shor's algotighm.md"},
          {text: "Week 11", link:"/quantum-computing/week11.md"},
        ],
      },
      {
        text: 'Statical Machine Learning',
        link: '/stat-machine-learning/',
        collapsible: true,  
        children: [
          {text: 'Bayesian Linear Regression', link: '/stat-machine-learning/Bayesian.md'},
          {text: 'Linear regression and logistic regresion', link:'/stat-machine-learning/revision.md'},
          {text: 'Bais', link:'/stat-machine-learning/revision-2.md'},
          {text: 'SVM, Kernel Methods', link: '/stat-machine-learning/svm.md'},
          {text: 'Precepction and Artificial Neural Network', link:'/stat-machine-learning/ann.md'},
          {text: "Cross validation, experts learning, MAB", link:'/stat-machine-learning/cross-validation.md'},
          {text: "Bayesian inference", link:'/stat-machine-learning/Bayesian-inference.md'},
          {text:'GMM-EM', link:'/stat-machine-learning/GMM-EM.md'},
          {text: "final", link:'/stat-machine-learning/final-revision.md'}
        ],
      },
      {
        text: 'Software Project Management',
        link: '/SPM/',
        collapsible: true,
        children: [
          {text: 'Lecture', link: '/SPM/lec.md'},
          {text: 'Revision', link: '/SPM/revision.md'},
        ],
      },
      {
        text: 'AI-planning',
        link:'/AI-planning/',
        collapsible: true,
        children: [
          {text: 'Classical planning', link: '/AI-planning/revision.md'},
          {text: 'MDP and reinforcement learning', link:'/AI-planning/revision-2.md'},
          {text: 'Game theory and final recap', link:'AI-planning/revision-3.md'}
        ],
      }
    ],
  }),
  bundler: viteBundler(),
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search',
        },
      },
    }),
    markdownMathPlugin(),
  ],
})
