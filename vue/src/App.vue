<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view/>
    <FootBar></FootBar>
  </div>
</template>

<script>
import NavBar from './components/common/navBar'
import FootBar from './components/common/footBar'
export default {
  name: 'App',
  components: {
    FootBar, NavBar
  }
}
</script>

<style>
  #app {
    width: 7.5rem;
    margin: 0 auto;
  }
</style>
