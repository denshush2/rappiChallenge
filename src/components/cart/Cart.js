export default {
  name: 'Cart',
  components: {},
  props: {
    toggleCart:{
      type: Boolean
    }
  },
  async beforeMount(){

  },
  data () {
    return {
      total: 0
    }
  },
  computed:{
    products(){
      return this.$store.state.Cart.products
    }
  },
  watch:{
    products(){
      this.countTotal()
    }
  },
  mounted () {
    this.$store.subscribe((mutation, state)=>{
      // console.log('event', mutation)
      if(mutation.type === 'addToCartOldProduct'){
        for (var i = 0; i < this.products.length; i++) {
          if (mutation.payload.product.id == this.products[i].id) {
            this.countTotal()
            this.$forceUpdate()
          }
        }
      }
    })
  },
  methods: {
    countTotal(){
      this.total = 0
      for (var i = 0; i < this.products.length; i++) {
        this.total = this.total + parseFloat(this.products[i].price.substr(1).replace(',','.'))*this.products[i].inCart
      }
      // console.log('counted')
    },
    remove(product){
      this.countTotal()
      this.$store.dispatch('removeFromCart', product)
      this.$forceUpdate()
    },
    removeOne(product){
      this.$store.dispatch('removeOneFromCart', product)
      this.countTotal()
      this.$forceUpdate()
    },
    addToCart(product){
      this.countTotal()
      this.$store.dispatch('addToCart', product)
      this.$forceUpdate()
    }
  }
}
