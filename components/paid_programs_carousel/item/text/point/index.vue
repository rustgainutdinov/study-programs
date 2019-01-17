<template>
  <el-col v-xxs="{ span: 24, offset: 0 }" :xs="12" :sm="12" :md="12" :lg="8" :xl="8" class="main-description">
    <div class="icon">
      <i class="material-icons" :style="pointData.icon.style">{{ pointData.icon.title }}</i>
    </div>
    <div class="text">
      <span class="light-color">{{ pointData.title }}</span>
      <span class="dark-color">{{ checkData }}</span>
    </div>
  </el-col>
</template>

<script>
  export default {
    name: "index",
    props: ['pointData'],
    computed: {
      checkData() {
        return this.pointData.data ? this.pointData.data : 'нет данных';
      }
    }
  }
</script>

<style scoped>

</style>