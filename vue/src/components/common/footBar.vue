<template>
  <div class="footBox">
    <div class="footBar">
      <ul>
        <li>
          <router-link :to="{name: 'home'}">
            <img class="foundIcon" v-show="pathName == 'found'" src="../../assets/img/found1.png" alt="发现">
            <img class="foundIcon" v-show="pathName !== 'found'" src="../../assets/img/found.png" alt="发现">
            <p :class="{redColor : pathName == 'found'}">发现</p>
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'video'}">
            <img class="forumIcon" v-show="pathName === 'forum'" src="../../assets/img/video1.png" alt="讲堂">
            <img class="forumIcon" v-show="pathName !== 'forum'" src="../../assets/img/video.png" alt="讲堂">
            <p :class="{redColor : pathName == 'forum'}">讲堂</p>
          </router-link>
        </li>
        <li>
          <a :href="$store.state.domain + '/mall/'">
            <img class="mallIcon" src="../../assets/img/mall.png" alt="商城">
            <p>商城</p>
          </a>
        </li>
        <li>
          <a :href="$store.state.domain + '/job/'">
            <img class="konwledgeIcon" src="../../assets/img/jobGray.png" alt="就业">
            <p>就业</p>
          </a>
        </li>
        <li>
          <a :href="$store.state.domain + '/my/'">
            <img v-if="$store.state.footUser" class="myIcon" src="../../assets/img/my1.png" alt="我的">
            <img v-else class="myIcon" src="../../assets/img/my.png" alt="我的">
            <p>我的</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["pathName"]
};
</script>

<style scoped lang="less">
.footBox {
  width: 7.5rem;
  height: 0.98rem;
  .footBar {
    width: 7.5rem;
    height: 0.98rem;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    -o-transform: translate(-50%, 0);
    -ms-transform: translate(-50%, 0);
    -moz-transform: translate(-50%, 0);
    -webkit-transform: translate(-50%, 0);
    background: #fff;
    border-top: 1px solid #dadada;
    z-index: 90;
    ul {
      height: 0.98rem;
      display: flex;
      display: -webkit-flex;
      justify-content: space-around;
      align-items: center;
      text-align: center;
      li {
        width: 0.6rem;
        font-size: 0.2rem;
        line-height: 0.4rem;
        a {
          color: #000;
        }
        .foundIcon {
          width: 0.49rem;
          height: 0.36rem;
        }
        .forumIcon {
          width: 0.39rem;
          height: 0.39rem;
        }
        .mallIcon {
          width: 0.38rem;
          height: 0.38rem;
        }
        .konwledgeIcon {
          width: 0.36rem;
          height: 0.38rem;
        }
        .myIcon {
          width: 0.4rem;
          height: 0.38rem;
        }
      }
    }
  }
}
</style>
