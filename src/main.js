import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elementui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/icon_font/iconfont.css'

Vue.config.productionTip = false
Vue.use(elementui)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
