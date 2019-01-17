<template>
  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
    <el-row>
      <StatisticsItem
        v-for="(statisticsItem, key, i) in statistics"
        :key="i"
        :itemData="statisticsItem"/>
    </el-row>
  </el-col>
</template>

<script>
  import StatisticsItem from '@/components/main_page_content/search_block/statistics/item'

  export default {
    name: "index",
    components: {
      StatisticsItem
    },
    data() {
      return {
        statistics: [
          {
            digit: 1458,
            title: 'образовательных организаций'
          },
          {
            digit: 23167,
            title: 'программ высшего образования'
          },
          {
            digit: 4246000,
            title: 'студентов'
          },
          {
            digit: 245000,
            title: 'профессоров и преподавателей'
          }
        ]
      }
    },
    methods: {}
  }
</script>

<style scoped>

</style>