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
    document.addEventListener("backbutton", function () {
      alert('backg button')
    }, false)
  },
  components: {
    FootBar, NavBar
  },
  watch: {
    $route: function (to) {
      this.pathName = to.name
      // 滚动到顶部
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  },
}
</script>

<style>
  #app {
    width: 7.5rem;
    margin: 0 auto;
  }
</style>
