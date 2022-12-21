import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import router from './router'
import Meta from 'vue-meta'
import VueScrollmagic from 'vue-scrollmagic'
import { loadLocaleMessages } from '@/utils/i18n'
import { BootstrapVue } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(VueI18n)
Vue.use(Meta)
Vue.use(VueScrollmagic)
Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)

const i18n = new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'zh-CN',
  // fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'zh-CN',
  messages: loadLocaleMessages()
})

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
