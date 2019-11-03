import Vue from 'vue'

import App from './astDemo/resource.vue'

console.log('执行了Vue')
new Vue({
  el: '#app',
  render: h => h(App)
})