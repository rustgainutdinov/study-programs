<template>
  <el-col :sm="12" :md="14" :lg="10" :xl="10" class="hidden-xs-only">
    <img :src="imagePath" alt="university" class="photo"/>
  </el-col>
</template>

<script>
  export default {
    name: "index",
    props: ['itemData'],
    data() {
      return {
        imagePath: 'https://образовательные-программы.рф/get_image?image_path=universities/default/index.jpg&compress_percent=80&compress_width=600&compress_height=600'
      }
    },
    methods: {
      checkImg(titleInEnglish) {
        var path = 'universities/' + titleInEnglish + '/index.jpg';
        this.$axios.$head('/get_image', {
          params: {
            image_path: path
          }
        })
          .then(result => {
            this.imagePath = 'https://образовательные-программы.рф/get_image?image_path=' + path + '&compress_percent=80&compress_width=500&compress_height=500';
          })
          .catch(result => {
            console.log('error');
          })
      },
      toProgramCard(path) {
        console.log(path);
        this.$router.push(
          {
            path: '/program_about/' + path,
          }
        )
      }
    },
    mounted() {
      this.checkImg(this.itemData.short_title_in_english);
    },
  }
</script>

<style scoped>

</style>
