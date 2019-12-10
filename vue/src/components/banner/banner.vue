<template>
    <mt-swipe :auto="time">
      <mt-swipe-item v-for="(item, key) in banner" v-show="item['position'] *1 == 3" :key="key">
        <a :href="item.url ? item.url : 'javascript:;'">
          <img v-lazy="item.photo" :alt="item.title">
        </a>
      </mt-swipe-item>
    </mt-swipe>
</template>

<script>
export default {
  props: {
    time: {
      default: 4000,
      type: Number
    },
    banner: {
      defautl: () => new Array()
    }
  }
}
</script>

<style>
  .mint-swipe-indicators {
    bottom: .23rem;
  }
  .mint-swipe-indicator {
    width: 0.17rem;
    height: 0.17rem;
    border-radius: 100%;
    background: #fff;
    margin: 0 0.1rem;
    opacity: 1;
  }
  .mint-swipe-indicator.is-active {
    background: #e10030;
    opacity: 1;
  }
</style>
