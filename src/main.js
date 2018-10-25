import '@babel/polyfill'
import Vue from 'vue'
import VueLocalStorage from 'vue-localstorage'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'

//Local imports
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store/'


Vue.config.productionTip = false
Vue.use(VueLocalStorage)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
