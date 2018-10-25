export default {
	setCategoryName(state, {id, name}){
		// console.log('set Name', id, name)
		if(id < state.searchedMenu.length){
			state.searchedMenu[id].name = name
		}
		else{
			state.searchedMenu.push({
				name: name
			})
		}
	},
	deleteProducts(state){
		state.currentProducts = []
	},
	setToCurrentProducts(state, product){
		console.log('asdasdsad')
		state.currentProducts.push(product)
	},
	setCategories(state, {category, level}){
		let subCategory = state.menu
		if (level == 0) {
			subCategory.push({id: category.id, name:category.name,})
		}
		for (var i = 0; i < level; i++) {
			subCategory.sublevels = category
			// console.log('Category Level', subCategory.sublevels, level)
			
		}
		// subCategory.push(category)
		// console.log('cate', subCategory, level)
	},
	setProductsToCategory(state, {categoryIndex, product}){
		// console.log('categoryIndex', categoryIndex, 'product', product)
		if(state.menu[categoryIndex].products){
			state.menu[categoryIndex].products.push(product)	
		}
		else{
			state.menu[categoryIndex].products = []
			state.menu[categoryIndex].products.push(product)
		}	
	}
};
