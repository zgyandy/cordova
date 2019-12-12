<template>
  <div>
    my page
    <button @click.stop="getPict">拍照</button>
    <img class="photo" ref="img" :src="url" alt="">
    <div>{{url}}</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        url: ''
      }
    },
    methods: {
      getPict() {
        this.getPicture ((imgUrl) => {
          this.url = imgUrl
        }, (message) => {
          throw message
        }, {
          quality: 50,
          destinationType: Camera.DestinationType.FILE_URI,
          sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
          allowEdit: true,
          targetWidth: 70,
          targetHeight: 70,
        })
      }
    },
  }
</script>

<style scoped>
  .photo {
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
  }
</style>