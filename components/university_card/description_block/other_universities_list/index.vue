<template>
  <el-col :lg="24" :xl="24">
    <UniversitiesList :listData="listData" title="Это направление в других вузах"/>
  </el-col>
</template>

<script>
  import UniversitiesList from '@/components/universities_list';

  export default {
    name: "index",
    props: ['programData'],
    components: {
      UniversitiesList,
    },
    data() {
      return {
        listData: null
      }
    },
    methods: {
      getListData() {
        this.$axios.$get('/search', {
          params: {
            search_text: this.programData.code,
            limit: 20,
            offset: 0,
            match_mode: 'sph_match_phrase',
            query: 'select_programs_data_for_search_list'
          }
        })
          .then(result => {
            if (result.statusCode === '023ms7fbgs54bw9y' && result.data !== null) {
              this.listData = result.data
            }
          })
          .catch(e => {
            console.log(e)
          });
      }
    },
    created() {
      this.getListData();
    }
  }
</script>

<style scoped>

</style>