export default {
	searchProducts({dispatch, commit, state, rootState}, id){
		// console.log('searching by', id)
		// let searchedProducts = state.products.map((product)=>{
		// 	if(id === product.sublevel_id){
		// 		console.log('product', product.name)
		// 	}
		// })
		dispatch('searchInSublevel', id)

	},
	searchInSublevel({rootState, dispatch, state}, {id, menu = rootState.Menu.categories}){
		// console.log('Search In sublevel', menu)
		menu.map((section)=>{
			
			if (section.id == id) {
				// console.log('Menu', section)
				// dispatch('searchInSublevel', id)
			}
			else{
				if (section.sublevels) {
					// console.log('it has sublevels in', section.name)
					dispatch('searchInSublevel', {id: id, menu: section.sublevels})
				}
				else{
					// console.log('no more sublevels in', section.name)
				}
			}
		})

	}
};
