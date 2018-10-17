export default {
	orderProducts({dispatch, rootState, commit, state}, section = state.categories, path= []){
		console.log('order Products', state)
		section.map((category, index)=>{
			console.log('category ', category, index)
			commit('setCategoryName', {id: index, name: category.name})
			dispatch('searchProductsInCategory', {index: index, categoryId: category.id})
			if(category.sublevels){
				console.log('SUBLEVELS', category.sublevels)
				// dispatch('orderProducts', category.sublevels)
			}
		})
		
	},
	searchProductsInCategory({rootState, commit}, {index, categoryId}){
		console.log('search in category', categoryId)
		for (let i = 0; i < rootState.Products.products.length ; i++) {
			if(rootState.Products.products[i].sublevel_id == categoryId){
				commit('setProductsToCategory',{categoryIndex: index, product: rootState.Products.products[i]})
				commit('deleteProductFromList', i)
				console.log('Sublevel ', rootState.Products.products[i].name)
			}
		}
	}
};
