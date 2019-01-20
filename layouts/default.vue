<template>
  <div>
    <Navigation/>
    <nuxt/>
    <Footer/>
  </div>
</template>

<script>
  import Navigation from '@/components/navigation';
  import Footer from '@/components/footer';

  export default {
    name: "index",
    components: {
      Navigation,
      Footer
    },

  }
</script>

<style>
  .el-row::before {
    content: none !important;
  }
</style>

