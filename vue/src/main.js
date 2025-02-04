import { createApp } from 'vue'

// Ahoi
import { createAhoi } from 'ahoi-vue'
import { createTemplate } from 'ahoi-vue/template'
import { createRouter } from 'ahoi-vue/router'
import { createMeta } from 'ahoi-vue/meta'
import { createI18n } from 'ahoi-vue/i18n'
import { createForm } from 'ahoi-vue/form'
import { createTracker } from 'ahoi-vue/tracker'

// config
import config from './config/ahoi.js'

// component, css
import App from 'ahoi-vue/components/AhoiRouterViewLayout.vue'
import './assets/main.sass'

Promise.resolve()
.then(() => {
  return createAhoi(
    config,
    createTemplate(),
    createRouter(),
    createMeta(),
    createI18n(),
    createForm(),
    createTracker(),
  )
})
.then((Api) => {
  createApp(App)
    .use(Api)
    .mount('body')
})
.catch((E) => {
  console.log(E)
  console.error('Error loading website')
})