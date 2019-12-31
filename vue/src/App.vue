<template>
  <div id="app">
    <NavBar :pathName="pathName" v-if="$store.state.navBl"></NavBar>
    <router-view/>
    <FootBar :pathName="pathName" v-if="$store.state.footBl"></FootBar>
  </div>
</template>

<script>
import NavBar from './components/common/navBar'
import FootBar from './components/common/footBar'
export default {
  name: 'App',
  data() {
    return {
      pathName: ''
    }
  },
  mounted() {
    // document.addEventListener("backbutton", function () {
    //   alert('backg button')
    // }, false)
  },
  methods: {
    navFn(name) {
      switch (true) {
        case /^home/.test(name) :
          this.$store.commit('navTitle', '职坐标');
          break;
        case /list$/.test(name) : 
          this.$store.commit('navState', {menu: true, back: false, crumbs: true})
          break;
        case /^video/.test(name) : 
          this.$store.commit('navTitle', '讲堂');
          break;
        case /^knowledge/.test(name) : 
          this.$store.commit('navTitle', '知识');
          break;
        case /^job/.test(name) : 
          this.$store.commit('navTitle', '职通车');
          break;
        case /^my/.test(name) :
          this.$store.commit('navTitle', '我的');
          break;
        default :
          this.$store.commit('navTitle', '职坐标');
      }
    }
  },
  components: {
    FootBar, NavBar
  },
  watch: {
    $route: function (to) {
      this.pathName = to.name;
      this.navFn(to.name);
      // 滚动到顶部
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  },
}
</script>

<style>
  #app {
    width: 7.5rem;
    margin: 0 auto;
    overflow: hidden;
  }
</style>
