<template>
  <div class="item">
    <div class="icon">
      <i class="material-icons" :style="itemData.icon.style">{{ itemData.icon.title }}</i>
    </div>
    <div class="description">
      <span class="light-color">{{ itemData.description }}</span>
      <span class="dark-color">{{ passingScore }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['itemData'],
    name: "index",
    computed: {
      passingScore() {
        if (this.itemData.title == 0) {
          return 'нет данных';
        } else {
          return this.itemData.title;
        }
        //return this.itemData.title ? this.itemData.title : 'нет данных';
      },
    }
  }
</script>

<style scoped>

</style>