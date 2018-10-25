import Vue from 'vue'
export default {
	async loadCartProducts({state}){
		let localCart = await Vue.localStorage.get('ElBaratonCart')
		console.log('local Cart', localCart)
		if(localCart){
			console.log('localCart')
			return localCart
		}
		else{
			console.log('return empty state', state.products)
			return state.products
		}
	},
	removeFromCart({state, commit}, product){
		for (var i = 0; i < state.products.length; i++) {
			if(state.products[i].id == product.id){
				console.log('product FIND', product.id, i)
				commit('removeFromCart', i)
				// founded =true
			}
		}
	},
	removeOneFromCart({state, commit}, product){
		for (var i = 0; i < state.products.length; i++) {
			if(state.products[i].id == product.id){
				console.log('product FIND', product.id, i)
				commit('removeOneFromCart', i)
				// founded =true
			}
		}
	},
	addToCart({state,commit}, product){
		console.log('state', state.products)
		if(state.products.length === 0){
			commit('addToCartNewProduct', product)
		}
		else{
			let founded = false
			for (var i = 0; i < state.products.length; i++) {
				if(state.products[i].id == product.id){
					console.log('product FIND', product.id, i)
					commit('addToCartOldProduct', {position: i , product: product})
					founded =true
				}
			}
			if (!founded) {
				commit('addToCartNewProduct', product)
			}
			// 
		}
	}
};
