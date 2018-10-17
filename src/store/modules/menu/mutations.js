export default {
	setCategoryName(state, {id, name}){
		console.log('set Name', id, name)
		if(id < state.searchedMenu.length){
			state.searchedMenu[id].name = name
		}
		else{
			state.searchedMenu.push({
				name: name
			})
		}
	},
	setProductsToCategory(state, {categoryIndex, product}){
		if(state.searchedMenu[categoryIndex].products){
			state.searchedMenu[categoryIndex].products.push(product)	
		}
		else{
			state.searchedMenu[categoryIndex].products = []
			state.searchedMenu[categoryIndex].products.push(product)
		}	
	}
};
