<template>
  <div class="loginPage">
    <dl class="loginData">
      <dt>
        <div><div class="iconBox"><img class="phoneIcon" src="../../assets/img/my/phone.png" alt=""></div><input placeholder="请输入账号" type="text"></div>
        <div><div class="iconBox"><img class="passIcon" src="../../assets/img/my/passw.png" alt=""></div><input placeholder="请输入密码" type="password"></div>
      </dt>
      <dd>登录</dd>
    </dl>
    <div class="redColor forgetPass">忘记密码</div>
    <div class="register" @click.stop="toRegister">手机快速注册</div>
  </div>
</template>

<script>
  export default {
    methods: {
      toRegister() {
        this.$router.push({name: 'register'})
      }
    },
  }
</script>

<style lang="less" scoped>
  .loginData {
    width: 7.1rem;
    margin: 0 auto;
    padding-top: 0.8rem;
    .phoneIcon {
      width: 0.28rem;
      height: 0.44rem;
    }
    .passIcon {
      width: 0.38rem;
      height: 0.43rem;
    }
    dt {
      background: #fff;
      margin-bottom: 0.2rem;
      img {
        display: block;
        margin: 0 auto;
      }
      >div {
        height: 1.08rem;
        .flex(space-between; center);
        border-bottom: 1px solid #dadada;
      }
      >div:last-child {
        border: none;
      }
      .iconBox {
        .flexW(1);
      }
      input {
        height: 0.5rem;
        width: 6.1rem;
        border: none;
        outline: none;
        line-height: 0.5rem;
        font-size: 0.28rem;
        border-left: 1px solid @gray9;
        text-indent: 0.2rem;
      }
    }
    dd {
      height: 0.95rem;
      width: 7.1rem;
      font-size: 0.3rem;
      color: #fff;
      line-height: 0.95rem;
      text-align: center;
      background: @red;
      border-radius: 0.1rem;
    }
  }
  .forgetPass {
    width: 7.1rem;
    margin: 0 auto;
    height: 0.9rem;
    line-height: 0.9rem;
    text-align: right;
  }
  .register {
    height: 0.95rem;
    width: 7.1rem;
    margin: 0 auto;
    .boxModel;
    border-radius: 0.1rem;
    text-align: center;
    font-size: 0.3rem;
    border: 1px solid @red;
    line-height: 0.95rem;
    color: @red;
  }
</style>