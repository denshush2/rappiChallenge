export default {
	removeFromCart(state, position){
		state.products.splice(position, 1)
	},
	removeOneFromCart(state, position){
		console.log('REMOVE', state.products[position])
		state.products[position].inCart--
	},
	addToCartNewProduct(state, product){
		product.inCart = 1
		state.products.push(product)
	},
	addToCartOldProduct(state, {position}){
		state.products[position].inCart++
		state.products = state.products 
		console.log('position', position)
		console.log('product', state.products[position].inCart)
	}
};
