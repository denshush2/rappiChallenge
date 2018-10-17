export default {
	deleteProductFromList(state, id){
		state.products.splice(id, 1)
	}
};
