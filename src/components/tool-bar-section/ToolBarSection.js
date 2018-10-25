export default {
  name: 'ToolBarSection',
  components: {},
  props: {
    menu: Array,
    // menu: String
  },
  beforeMount(){
  },
  data () {
    return {
      active: false
      // activeRoute: this.$router.currentRoute.params.levelName,
      // activeName: this.level.name.replace(/ /g,"-").toLowerCase()
    }
  },
  computed: {
    hasSublevels(){
      return this.menu.sublevels && this.menu.sublevels.length
    }
  },
  mounted () {
    // console.log()
  },
  methods: {
    toggle(){
      if(this.hasSublevels){
        // Vue.set(this.menu, 'ToolBarSection',[])
      }
    }
    // clickSection(){
    //   console.log('NAME', this)
    //   name = this.level.name.replace(/ /g,"-").toLowerCase()
    //   this.$router.push({name:'Section', params: {levelName: name, level: this.level}})
    // },
    // selectMenu(){
    //   console.log('select menu')
    // }

  }
}
