<template>
  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
    <el-row>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <Statistics :programData="programData"/>
        <resize-observer @notify="resizeOnLoad"/>
      </el-col>
      <el-col :xs="24" :sm="16" :md="16" :lg="16" :xl="16">
        <div class="main-image">
          <div class="image" :style="'background: url(' + imagePath + ')  center center / cover no-repeat;'"></div>
        </div>
      </el-col>
    </el-row>
  </el-col>
</template>

<script>
  import Statistics from '@/components/university_card/top_block/statistics'

  export default {
    name: "index",
    components: {
      Statistics
    },
    props: ['programData'],
    data() {
      return {
        imagePath: 'https://образовательные-программы.рф/get_image?image_path=universities/default/index.jpg&compress_percent=80&compress_width=1000&compress_height=1000'
      }
    },
    mounted() {
      this.resizeOnLoad();
      this.checkImg(this.programData.short_title_in_english);
    },
    updated() {
      this.resizeOnLoad();
    },
    methods: {
      resizeOnLoad() {
        var blocks = document.getElementsByClassName('statistics');
        console.log(blocks[0].clientHeight);
        var timerId = setInterval(() => {
          if (blocks[0].clientHeight && blocks[0].clientHeight !== 0) {
            clearInterval(timerId);
            document.getElementsByClassName('main-image')[0].style.height = blocks[0].clientHeight + 'px';
          }
        }, 10);
        setTimeout(function () {
          clearInterval(timerId);
        }, 1000);
      },
      checkImg(titleInEnglish) {
        var path = 'universities/' + titleInEnglish + '/index.jpg';
        this.$axios.$head('/get_image', {
          params: {
            image_path: path
          }
        })
          .then(result => {
            this.imagePath = 'https://образовательные-программы.рф/get_image?image_path=' + path + '&compress_percent=80&compress_width=1000&compress_height=1000';
          })
          .catch(result => {
            console.log('error');
          })
      }
    }
  }
</script>

<style scoped>

</style>
