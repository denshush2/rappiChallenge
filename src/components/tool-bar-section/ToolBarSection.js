export default {
  name: 'ToolBarSection',
  components: {},
  props: {
    level: Object,
    section: String
  },
  beforeMount(){
    console.log('SECTION', this.section)
  },
  data () {
    return {
      activeRoute: this.$router.currentRoute.params.levelName,
      activeName: this.level.name.replace(/ /g,"-").toLowerCase()
    }
  },
  computed: {
  },
  mounted () {
    console.log()
  },
  methods: {
    clickSection(){
      console.log('NAME', this)
      name = this.level.name.replace(/ /g,"-").toLowerCase()
      this.$router.push({name:'Section', params: {levelName: name, level: this.level}})
    },
    selectMenu(){
      console.log('select menu')
    }

  }
}
