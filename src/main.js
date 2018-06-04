// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import mandMobile from 'mand-mobile'
// import 'mand-mobile/lib/mand-mobile.css'
import './assets/mand-mobile.css'
import * as FastClick from 'fastclick'

import router from './router'
import store from './store'
import './styles/global.styl'
import App from './App'

FastClick.attach(document.body)

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(mandMobile)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
