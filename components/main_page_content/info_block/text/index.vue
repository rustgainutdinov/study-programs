<template>
  <el-col :sm="12" :md="12" :lg="12" :xl="12" class="text">
    <h1><span class="large">Пусть меня научат...</span></h1>
    <h4 class="poem">Книгу переворошив,<br>
      намотай себе на ус -<br>
      все работы хороши,<br>
      выбирай на вкус!</h4>
    <p class="h4">В.Маяковский «Кем быть?» 1928 год</p>
    <nuxt-link :to="{path: '/', hash: '#search'}">
      <button type="primary" class="default-button large-button">Перейти к поиску</button>
    </nuxt-link>
  </el-col>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style scoped>

</style>