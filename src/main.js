import Vue from 'vue'
import App from './App.vue'
import moneyFilter from "@/filters/money.filter.js"

Vue.config.productionTip = false
Vue.filter("money", moneyFilter)

new Vue({
  render: h => h(App),
}).$mount('#app')
