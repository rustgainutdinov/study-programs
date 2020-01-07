<template>
  <el-col v-xxs="{ span: 24, offset: 0 }" :xs="12" :sm="12" :md="8" :lg="8" :xl="8">
    <div class="card">
      <div
        :style="'background: url(' + imagePath + ')  center center / cover no-repeat;'"
        class="photo"
        @click="toProgramCard(itemData.programs_id)">
      </div>
      <div class="text">
        <p class="university-title" @click="toProgramCard(itemData.programs_id)">
          {{itemData.title_of_the_education_program }}
        </p>
        <p class="prog-num">{{ universityTitle }}</p>
        <div class="main-description">
          <div class="item">
            <div class="icon">
              <i class="material-icons" style="color: #f39304;">poll</i>
            </div>
            <div class="description">
              <span class="light-color">Средний балл ЕГЭ</span>
              <span class="dark-color">{{ passingScore }}</span>
            </div>
          </div>
          <div class="item">
            <div class="icon">
              <i class="material-icons" style="color: #3f51b5;">monetization_on</i>
            </div>
            <div class="description">
              <span class="light-color">Стоимость обучения</span>
              <span class="dark-color">{{ costOfEducation }}</span>
            </div>
          </div>
          <div class="item">
            <div class="icon">
              <i class="material-icons" style="color: #4cad50;">group</i>
            </div>
            <div class="description">
              <span class="light-color">Конкурс</span>
              <span class="dark-color">{{ competition }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </el-col>
</template>

<script>
  export default {
    name: "index",
    props: ['itemData'],
    data() {
      return {
        imagePath: 'https://образовательные-программы.рф/get_image?image_path=universities/default/index.jpg&compress_percent=90&compress_width=1000&compress_height=300'
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
            this.imagePath = 'https://образовательные-программы.рф/get_image?image_path=' + path + '&compress_percent=90&compress_width=1000&compress_height=400';
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
    computed: {
      passingScore() {
        return this.itemData.passing_score != 0 ? this.itemData.passing_score : 'нет данных';
      },
      costOfEducation() {
        return this.itemData.cost_of_education != 0 ? this.itemData.cost_of_education + ' руб' : 'нет данных';
      },
      competition() {
        return this.itemData.competition != 0 ? this.itemData.competition : 'нет данных';
      },
      universityTitle() {
        return this.itemData.abbreviation_name ? this.itemData.abbreviation_name : this.itemData.short_title;
      }
    }
  }
</script>

<style scoped>

</style>
