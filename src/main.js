// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import mandMobile from 'mand-mobile'
import 'mand-mobile/lib/mand-mobile.css'
// import './assets/mand-mobile.css'
import * as FastClick from 'fastclick'
import VueI18n from 'vue-i18n'
import VueClipboard from 'vue-clipboard2'

import router from './router'
import store from './store'
import messages from './data/translation'
import { localStore } from './utils'
import './styles/global.styl'
import App from './App'

FastClick.attach(document.body)

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(mandMobile)
Vue.use(VueI18n)
Vue.use(VueClipboard)

const i18n = new VueI18n({
  locale: localStore('MAND_MOBILE_PALETTE') || 'zh',
  messages
})

store.dispatch('GET_THEMES_STORE')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
