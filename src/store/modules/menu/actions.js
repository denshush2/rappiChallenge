import axios from '../../../axios'
export default {
	async loadMenu(){
		let categories = await axios.get('categories.json')
		console.log('CATEGORIEs', categories)
		return categories.data.categories
	},
	async orderProducts({dispatch, commit}, id){
		commit('deleteProducts')
		let categories = await dispatch('getCategories')
		let products = await dispatch('getProducts')
		let ids=[]
		let idsInSearch =[]
		for (var i = 0; i < categories.categories.length; i++) {
			idsInSearch = await dispatch('getProductsByCategory', {category: categories.categories[i].sublevels, id:id})
			ids.push(...idsInSearch)
		}
		console.log('IDS', ids)
		await dispatch('searchProductsByIds',{products: products.products, ids: ids})
	},
	async searchProductsByIds({commit},{products: products,ids: ids}){
		let searchedProducts = []
		console.log('SEARCH', ids)
		for (var i = 0; i < ids.length; i++) {
			for (var p = 0; p < products.length; p++) {
				if (products[p].sublevel_id == ids[i]) {
					commit('setToCurrentProducts', products[p])
					console.log('ADD', products[p])
				}
			}
			console.log('ID FINNISHED')
		}
	},
	async getProductsByCategory({dispatch,commit}, {category: category, id:id, idFounded = false, ids=[]}){
		console.log('Category', category, idFounded)
		console.log('asd', id, idFounded)
		for (var i = 0; i < category.length; i++) {
			if(idFounded == true){
				console.log('FOUNDED X2', ids)
				ids.push(category[i].id)
			}
			if(category[i].id == id){
				idFounded = true
				console.log('FOUNDED', ids)
			}
			console.log('sublevel', category[i].id)
			if(category[i].sublevels){
				dispatch('getProductsByCategory', {category:category[i].sublevels, id:id, idFounded:idFounded, ids:ids})
			}
			else{
				console.log('no hay sublevels', ids)
			}
		}
		console.log('IIIDDDSSS', ids)
		return ids
		// if (category.sublevels) {
		// 	for (var i = 0; i < category.sublevels.length; i++) {
		// 		console.log('sublevels', category.sublevels)
		// 	}
		// }
		// else{
		// 	console.log('no hay sublevels')
		// }
		// console.log('category', category)
		// dispatch('loopSublevels', category)
		
		// console.log('ids', ids)
		// r
		// for (var i = 0; i < category.length; i++) {
		// 	console.log('Name', category[i].name)
		// }
	},
	async loopSublevels({}, category){
		// console.log('looping', category)
	},
	async orderCategories({dispatch, commit},{categories, products, level = 0}){
		for (let i = 0; i < categories.length; i++) {			
			// console.log('category', categories[i].name)
			await commit('setCategories', {category: categories[i], level: level})
			// console.log('categories', categories[i].name, categories[i].sublevels)
			// let productsOrdered = await dispatch('searchProductsById', {categoryIndex: i, id: categories[i].id, products: products})
			// // console.log('products Sliced', productsOrdered)
			// if (categories[i].sublevels) {
			// 	console.log('Sublevel of ', categories[i].name, categories[i].sublevels)
			// 	await dispatch('orderCategories', {categories: categories[i].sublevels, products:productsOrdered, level: level+1})
			// }
			if (categories[i].sublevels) {
				// console.log('Has Sublevels')
				await dispatch('orderCategories',{categories:categories[i].sublevels, products: [], level: level+1})
			}
		}
	},
	async searchProductsById({commit}, {categoryIndex, id, products}){
		// console.log('products123', products)
		for (let i = 0; i < products.length; i++) {
			if (products[i].sublevel_id === id) {
				// console.log('productsName', products[i].name)
				await commit('setProductsToCategory',{categoryIndex: categoryIndex, product: products[i]})
				products.splice(i,1)
			}
		}
		return products

	},
	async getCategories(){
		let categories = await axios.get('categories.json')
		return categories.data
	},
	async getProducts(){
		let products = await axios.get('products.json')
		return products.data
	},
	searchProductsInCategory({rootState, commit}, {index, categoryId}){
		// console.log('search in category', categoryId)
		for (let i = 0; i < rootState.Products.products.length ; i++) {
			if(rootState.Products.products[i].sublevel_id == categoryId){
				commit('setProductsToCategory',{categoryIndex: index, product: rootState.Products.products[i]})
				commit('deleteProductFromList', i)
				// console.log('Sublevel ', rootState.Products.products[i].name)
			}
		}
	}
};
