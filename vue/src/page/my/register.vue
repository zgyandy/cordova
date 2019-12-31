<template>
  <div class="registerPage">
    <div class="box">注册页</div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped lang="less">
  .keyframes(shad, {
    0% {
      .boxShadow(@color: rgba(255, 0 , 0, 0.4); @spread: 0rem;)
    }
    100% {
      .boxShadow(@color: rgba(255, 0 , 0, 0.4); @spread: 0.4rem;)
    }
  });
  .box {
    width: 0.4rem;
    height: 0.4rem;
    background: red;
    background-size: 50%;
    margin: 0.5rem auto;
    border-radius: 50%;
    .animate(shad; @dur: 2s; @dir: alternate);
    &:hover {
      background: green;
    }
  }

</style>