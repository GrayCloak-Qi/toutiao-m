import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入图标样式
import './styles/index.less'
import './styles/icon.less'

// 引入vant核心组件
import Vant from 'vant'

// 引入vant样式
import 'vant/lib/index.css'

// 引入动态设置rem组件
import 'amfe-flexible'

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
