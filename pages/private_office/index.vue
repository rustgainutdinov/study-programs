<template>
  <div>
    <p>{{ userData }}</p>
    <nuxt-link to="/">to main page</nuxt-link>
  </div>
</template>

<script>
  export default {
    name: "index",
    middleware: ['auth'],
    computed: {
      userData(){
        return this.$store.getters.getUserData
      }
    }
  }
</script>

<style scoped>

</style>
