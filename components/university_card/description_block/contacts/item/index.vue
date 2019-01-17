<template>
  <div class="item">
    <div class="icon">
      <i class="material-icons" :style="itemData.icon.style">{{ itemData.icon.title }}</i>
    </div>
    <div class="description">
      <span class="light-color">{{ itemData.description }}</span>
      <span class="dark-color">{{ text }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    props: ['itemData'],
    computed: {
      text() {
        return this.itemData.text ? this.itemData.text : 'нет данных';
      }
    }
  }
</script>

<style scoped>

</style>