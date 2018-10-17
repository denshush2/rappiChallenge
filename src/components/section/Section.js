export default {
  name: 'Section',
  components: {},
  props: [],
  beforeMount(){
    this.$store.dispatch('orderProducts')
  },
  data () {
    return {
      section: {}
    }
  },
  watch:{
    $route(val){
      console.log('route',val.params)
      this.section = val.params
      // this.$store.getters.getProductsById(val.params.level.id)
      
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {

  }
}
