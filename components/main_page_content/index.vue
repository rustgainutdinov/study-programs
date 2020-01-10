<template>
  <div>
    <InfoBlock/>
    <SearchBlock/>
    <DirectionBlock/>
  </div>
</template>

<script>
  import InfoBlock from '@/components/main_page_content/info_block';
  import SearchBlock from '@/components/main_page_content/search_block';
  import DirectionBlock from '@/components/main_page_content/directions';

  export default {
    name: "index",
    components: {
      InfoBlock,
      SearchBlock,
      DirectionBlock
    }
  }
</script>

<style scoped>

</style>
