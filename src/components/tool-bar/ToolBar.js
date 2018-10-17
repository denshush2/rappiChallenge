import ToolBarSection from '../tool-bar-section/ToolBarSection.vue'

export default {
  name: 'ToolBar',
  components: {
    ToolBarSection
  },
  props:{
    toggleToolBar: Boolean
  }
  ,
  beforeMount(){
    this.menu = this.$store.getters.getMenu
    console.log(this.$store)
  },
  data () {
    return {
      menu:[],
      // menuHtml:``
    }
  },
  computed: {
  },
  mounted () {
    // this.drawMenu()
    console.log('menu', this.menu)
  },

  methods: {
    clickSection(category){
      name = category.name.replace(/ /g,"-").toLowerCase()
      this.$router.push({name:'Section', params: {levelName: name, level: category}})
    }
  }
}
