<template>
  <div>
    <section
      class="section universities-carousel light-blue-bg"
      v-show="this.bestPrograms.length != 0 && bestPrograms != null">
      <BestUniversitiesSlider :bestPrograms="bestPrograms"/>
    </section>
    <section>
      <div class="container">
        <UniversitiesList :listData="searchResult" title="Результаты поиска"/>
        <el-button class="load_more" type="primary" round @click="loadMore">Загрузить больше</el-button>
      </div>
    </section>
  </div>
</template>

<script>
  import UniversitiesList from '@/components/universities_list';
  import BestUniversitiesSlider from '@/components/paid_programs_carousel';

  export default {
    layout: 'default',
    components: {
      UniversitiesList,
      BestUniversitiesSlider
    },
    data() {
      return {
        offset: 0
      }
    },
    watchQuery: true,
    async asyncData(context) {
      var programsId = '';
      let searchResult = await context.$axios.$get('/search', {
        params: {
          search_text: context.query.search_text,
          limit: 10,
          match_mode: context.query.match_mode,
          query: 'select_programs_data_for_search_list'
        }
      })
        .then(result => {
          if (result.statusCode !== '023ms7fbgs54bw9y' || result.data == null) {
            return [];
          }
          return result.data;
        })
        .catch(_ => {
          return [];
        });

      searchResult.forEach((item, i) => {
        if (i !== 0) {
          programsId += "', '";
        }
        programsId += item.programs_id;
      });
      let bestPrograms = await context.$axios.$get('/execute', {
        params: {
          query: 'get_programs_for_best',
          data: {
            programs_id: programsId
          }
        }
      })
        .then(result => {
          if (result.statusCode !== '023ms7fbgs54bw9y' || result.data == null) {
            return [];
          }
          return result.data;
        })
        .catch(_ => {
          return [];
        });
      return {
        searchResult,
        bestPrograms
      }
    },
    methods: {
      loadMore() {
        this.offset += 10;
        console.log(this.$route);
        this.$axios.$get('/search', {
          params: {
            search_text: this.$route.query.search_text,
            limit: 10,
            offset: this.offset,
            match_mode: this.$router.match_mode,
            query: 'select_programs_data_for_search_list'
          }
        })
          .then(result => {
            if (result.statusCode !== '023ms7fbgs54bw9y' || result.data == null) {
              this.searchResult = [];
            }
            result.data.forEach((item) => {
              this.searchResult.push(item);
            })
          })
          .catch(_ => {
            this.searchResult = [];
          });
      }
    }
  }
</script>

<style lang="scss">
  $mainColor: #3f51b5;
  $mainColorHover: #5c6bc0;

  .load_more {
    display: block;
    margin: 30px auto 0;
    background: $mainColor;
    border: none;
  }

  .load_more:hover, .load_more:focus {
    background: $mainColorHover;
  }
</style>
