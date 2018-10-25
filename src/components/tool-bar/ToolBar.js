import ToolBarSection from '../tool-bar-section/ToolBarSection.vue'

export default {
  name: 'ToolBar',
  components: {
    ToolBarSection
  },
  props:[
    'toggleToolBar'
  ],
  async beforeMount(){
    this.menu = await this.$store.dispatch('loadMenu')
  },
  data () {
    return {
      menu:[]
    }
  },
  computed: {
  },
  mounted () {
    // this.drawMenu()
    // console.log('menu', this.menu)
  },

  methods: {
    clickSection(category){
      let name = category.name.replace(/ /g,"-").toLowerCase()
      this.$router.push({name:'Section', params: {levelName: name, level: category}})
    }
  }
}
