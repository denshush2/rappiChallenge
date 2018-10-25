import NavBar from '../nav-bar/NavBar.vue'
import ToolBar from '../tool-bar/ToolBar.vue'
import Cart from '../cart/Cart.vue'


export default {
  name: 'Main',
  components: {
    NavBar,
    ToolBar,
    Cart
  },
  beforeMount(){
  },
  data () {
    return {
      toggleToolBar: false,
      toggleCart: false
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    toggleToolBarSwitch(value){
      this.toggleToolBar = value

    },
    toggleCartSwitch(value){
      this.toggleCart = value

    }
  }
}
