<template>
  <section>
    <div class="container">
      <List :listData="listData"/>
    </div>
  </section>
</template>

<script>
  import List from '@/components/universities_list';

  export default {
    name: "index",
    components: {
      List
    },
    props: ['listData']
  }
</script>

<style lang="scss">
</style>