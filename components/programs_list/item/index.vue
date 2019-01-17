<template>
  <el-collapse-item
    :title="title"
    :name="name"
  >
    <div
      v-for="(program, key, i) in programsList"
      :key="i"
      class="text"
      @click="redirectTo(program)"
    >
      {{ program.programNumber }} {{ program.title }}
    </div>
  </el-collapse-item>
</template>

<script>
  export default {
    name: "index",
    props: ['title', 'name', 'programsList', 'linkTo'],
    methods: {
      redirectTo(program) {
        if (this.linkTo == 'program_about') {
          this.redirectToProgramCard(program.programLink)
        } else {
          this.redirectToSearch(program.programNumber,)
        }
      },
      redirectToSearch(searchText) {
        this.$router.push(
          {
            path: '/search', query: {
              search_text: searchText,
              match_mode: 'sph_match_phrase'
            }
          }
        )
      },
      redirectToProgramCard(programId) {
        this.$router.push(
          {
            path: '/program_about/' + programId
          }
        )
      }
    },
  }
</script>

<style scoped>

</style>