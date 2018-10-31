export default {
  name: 'Section',
  components: {},
  props: [],
  beforeMount(){
    this.products = this.$store.state.Menu.currentProducts
    // this.$store.dispatch('orderProducts')
  },
  data () {
    return {
      section: {},
      products: this.$store.dispatch('sortBy', this.filters),
      filters:{
        price: 1,
        priceOptions: [
          {
            id:1,
            name: 'Default'
          },
          {
            id:2,
            name: 'Min'
          },
          {
            id:3,
            name: 'Max'
          }
        ],
        available: true,
        quantity:{
          min: 0,
          max: 999
        }
      }
    }
  },
  watch:{
    $route(val){
      // console.log('route',val.params)
      this.section = val.params
      this.$store.dispatch('orderProducts', this.$route.params.id)
      // this.$store.getters.getProductsById(val.params.level.id)
      
    },
    products(val){
      console.log('NEW PRODUCT', val)
      this.products = this.$store.dispatch('sortBy', this.filters)
    }
  },
  async updated(){
    console.log('Update', this.$route)
    //this.products = this.$store.state.Menu.currentProducts
    this.products = await this.$store.dispatch('sortBy', this.filters)
  },
  computed: {

  },
  mounted () {
    console.log('Mounted')
  },
  methods: {
    sortByPrice(){
      this.$store.getters('sortByPrice')

    },
    addToCart(product){
      // console.log('Add', product)
      this.$store.dispatch('addToCart', product)
    }
  }
}
