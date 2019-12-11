<template>
  <div class="footBox">
    <div class="footBar">
      <ul>
        <li>
          <router-link :to="{name: 'home'}">
            <img class="foundIcon" v-show="pathName == 'home'" src="../../assets/img/found1.png" alt="发现">
            <img class="foundIcon" v-show="pathName !== 'home'" src="../../assets/img/found.png" alt="发现">
            <p :class="{redColor : pathName == 'home'}">发现</p>
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'video'}">
            <img class="forumIcon" v-if="pathName.match(/^video/)" src="../../assets/img/video1.png" alt="讲堂">
            <img class="forumIcon" v-else src="../../assets/img/video.png" alt="讲堂">
            <p :class="{redColor : pathName.match(/^video/)}">讲堂</p>
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'knowledge'}">
            <img class="knowledgeIcon" v-if="pathName.match(/^knowledge/)" src="../../assets/img/knowledge1.png" alt="知识">
            <img class="knowledgeIcon" v-else src="../../assets/img/knowledge.png" alt="知识">
            <p :class="{redColor : pathName.match(/^knowledge/)}">知识</p>
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'job'}">
            <img class="jobIcon" v-if="pathName.match(/^job/)" src="../../assets/img/jobRed.png" alt="就业">
            <img class="jobIcon" v-else src="../../assets/img/jobGray.png" alt="就业">
            <p :class="{redColor : pathName.match(/^job/)}">就业</p>
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'my'}">
            <img v-if="pathName.match(/^my/)" class="myIcon" src="../../assets/img/my1.png" alt="我的">
            <img v-else class="myIcon" src="../../assets/img/my.png" alt="我的">
            <p :class="{redColor : pathName.match(/^my/)}">我的</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pathName: {
      default: ''
    }
  }
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

      }
    }
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
  .knowledgeIcon {
    width: 0.36rem;
    height: 0.38rem;
  }
  .myIcon {
    width: 0.4rem;
    height: 0.38rem;
  }
  .jobIcon {
    width: 0.4rem;
    height: 0.38rem;
  }
}
</style>
