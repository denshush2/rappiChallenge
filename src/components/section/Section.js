export default {
  name: 'Section',
  components: {},
  props: [],
  beforeMount(){
    // this.$store.dispatch('orderProducts')
  },
  data () {
    return {
      section: {}
    }
  },
  watch:{
    $route(val){
      // console.log('route',val.params)
      this.section = val.params
      this.$store.dispatch('orderProducts', this.$route.params.id)
      // this.$store.getters.getProductsById(val.params.level.id)
      
    }
  },
  updated(){
    console.log('Update', this.$route)
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    addToCart(product){
      // console.log('Add', product)
      this.$store.dispatch('addToCart', product)
    }
  }
}
