<template>
  <div class="carousel-item">
    <el-row class="carousel-item-inside">
      <ImageBlock :itemData="itemData"/>
      <resize-observer @notify="$emit('resizeSlider')"/>
      <TextBlock :programData="itemData"/>
      <resize-observer @notify="$emit('resizeSlider')"/>
    </el-row>
    <resize-observer @notify="$emit('resizeSlider')"/>
  </div>
</template>

<script>
  import ImageBlock from '@/components/paid_programs_carousel/item/image'
  import TextBlock from '@/components/paid_programs_carousel/item/text'

  export default {
    name: "index",
    props: ['itemData'],
    components: {
      ImageBlock,
      TextBlock
    },
    methods: {
      handleResize() {
        console.log('resize');
      }
    }
  }
</script>

<style lang="scss">
  .carousel-item-inside {
    position: relative;
  }
</style>