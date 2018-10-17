import Vue from 'vue'
import Vuex from 'vuex'

//Import Modules
import Menu from './modules/menu'
import Products from './modules/products'

Vue.use(Vuex)

export default new Vuex.Store({
	modules:{
		Menu,
    Products
	},
	//Initial store for app
  	state: {
  		storeName: 'El Baratón'
  	},
  	mutations: {

  	},
  	actions: {

  	}
})
