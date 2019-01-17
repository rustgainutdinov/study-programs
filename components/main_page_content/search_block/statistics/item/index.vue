<template>
  <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6" class="statistics">
    <p class="h2"><span class="large">{{ itemData.digit }}</span></p>
    <p class="h4">{{ itemData.title }}</p>
  </el-col>
</template>

<script>
  export default {
    name: "index",
    props: ['itemData'],
    data() {
      return {
        digit: 0
      }
    }
  }
</script>

<style scoped>

</style>