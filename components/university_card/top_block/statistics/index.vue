<template>
  <div class="statistics">
    <Item
      v-for="(itemData, key, i) in statisticsData"
      :key="i"
      :itemData="itemData"
    />
  </div>
</template>

<script>
  import Item from '@/components/university_card/top_block/statistics/item'

  export default {
    name: "index",
    props: ['programData'],
    components: {
      Item
    },
    data() {
      return {
        studyFrom: null,
        statisticsData: [
          {
            icon: {
              title: 'extension',
              style: {
                color: '#2196f2'
              }
            },
            description: 'Нименование программы',
            title: this.programData.code + ' ' + this.programData.title_of_training_area
          },
          {
            icon: {
              title: 'widgets',
              style: {
                color: '#019587'
              }
            },
            description: 'Форма обучения',
            title: this.programData.study_forms_title
          },
          {
            icon: {
              title: 'poll',
              style: {
                color: '#f39304'
              }
            },
            description: 'Средний балл',
            title: this.programData.passing_score
          },
          {
            icon: {
              title: 'group',
              style: {
                color: '#4cad50'
              }
            },
            description: 'Конкурс на бесплатное обучение',
            title: this.programData.competition
          },
          {
            icon: {
              title: 'school',
              style: {
                color: '#9b26af'
              }
            },
            description: 'Уровень образования',
            title: this.programData.study_programs_title
          },
          {
            icon: {
              title: 'monetization_on',
              style: {
                color: '#3f51b5'
              }
            },
            description: 'Стоимость обучения',
            title: this.programData.cost_of_education
          },
        ]
      }
    },
    created() {
      console.log(this.programData);
    }
  }
</script>

<style scoped>

</style>