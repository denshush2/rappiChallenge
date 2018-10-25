export default {
  name: 'NavBar',
  components: {},
  props: {
    toggleToolBar:{
      type: Boolean
    },
    toggleCart:{
      type: Boolean
    }
  },
  beforeMount(){

  },
  data () {
    return {
      title: this.$store.state.storeName,
    }
  },
  computed: {
    totalInCart(){
      return this.$store.state.Cart.products.length
    }
  },
  mounted () {
    
  },
  methods: {
    toggleToolBarSwitch(){
      this.$emit('toggleToolBarSwitch', !this.toggleToolBar)
    },
    toggleCartSwitch(){
      // console.log('toogled')
      this.$emit('toggleCartSwitch', !this.toggleCart)
    }
  }
}
