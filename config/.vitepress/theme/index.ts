import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import Stats from '../components/Stats.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // Регистрируем кастомные компоненты
    app.component('Stats', Stats)
  }
} satisfies Theme