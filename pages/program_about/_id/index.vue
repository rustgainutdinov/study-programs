<template>
  <div>
    <ProgramAbout
      :programData="searchResult"
    />
  </div>
</template>

<script>
  import ProgramAbout from '@/components/university_card';

  export default {
    name: "index",
    components: {
      ProgramAbout,
    },
    asyncData(context) {
      return context.$axios.$get('/execute',
        {
          params: {
            query: 'get_program_by_id',
            data: {
              programs_id: context.params.id
            }
          }
        })
        .then(result => {
          if (result.statusCode !== '023ms7fbgs54bw9y' || result.data == null) {
            return {
              searchResult: []
            }
          }
          return {
            searchResult: result.data[0],
          }
        })
        .catch(e => {
          console.log(e);
          return {
            searchResult: []
          }
        })
    },
    created() {
      console.log(this.searchResult);
    }
  }
</script>

<style scoped>

</style>