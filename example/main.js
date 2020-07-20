import Vue from 'vue'
import App from './App.vue'

import XColorPicker from '@'
Vue.use(XColorPicker)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
