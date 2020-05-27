import Vue from 'vue'
import App from './App.vue'
import LyUI from '../packages'
Vue.config.productionTip = false
Vue.use(LyUI)
new Vue({
  render: h => h(App)
}).$mount('#app')
