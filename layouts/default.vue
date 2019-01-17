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

<style lang="scss">
  $mainColor: #3f51b5;
  $mainColorHover: #5c6bc0;
</style>

