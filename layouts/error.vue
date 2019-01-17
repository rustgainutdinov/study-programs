<template>
  <div class="error-container">
    <h1>ошибка 404</h1>
  </div>
</template>

<script>
  export default {
    name: "error"
  }
</script>

<style scoped lang="scss">
  .error-container {
    margin: auto;
    width: 500px;
    margin-top: 200px;
    text-align: center;

    h1 {
      color: red;
    }
  }
</style>
