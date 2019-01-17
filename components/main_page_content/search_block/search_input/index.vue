<template>
  <div class="search-bar">
    <el-autocomplete
      v-model="searchResult"
      :fetch-suggestions="querySearchAsync"
      placeholder="Введите ключевое слово "
      @select="handleSelect"
    >
      <el-button slot="append" icon="el-icon-search" class="search-bar-button" @click="sendSearchResult"></el-button>
    </el-autocomplete>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        searchResult: '',
      }
    },
    methods: {
      querySearchAsync(queryString, cb) {
        this.$axios.$get('/search', {
          params: {
            search_text: queryString,
            limit: 5,
            query: 'search_select_titles_only'
          }
        })
          .then(result => {
            if (result.statusCode !== '023ms7fbgs54bw9y' || result.data == null) {
              console.log(result);
            }
            var searchResults = [];
            result.data.forEach((item) => {
              searchResults.push({
                value: item.short_title + " " + item.title_of_the_education_program,
                link: item.programs_id
              })
            });
            cb(searchResults);
          })
          .catch(e => {
            console.log(e);
          });
      },
      handleSelect(item) {
        console.log(item);
      },
      sendSearchResult() {
        var searchText = this.searchResult;
        this.$router.push({
          path: 'search', query: {
            search_text: searchText
          }
        });
      }
    },
    mounted() {
    }
  }
</script>

<style scoped>

</style>