<template>
  <section class="section">
    <el-row class="main-screen container">
      <TextBlock/>
      <AnimationBlock/>
    </el-row>
  </section>
</template>

<script>
  import AnimationBlock from '@/components/main_page_content/info_block/animation'
  import TextBlock from '@/components/main_page_content/info_block/text'

  export default {
    name: "index",
    components: {
      AnimationBlock,
      TextBlock
    }
  }
</script>

<style lang="scss">
  .main-screen {
    padding-top: 0;
    padding-bottom: 40px;

    .text {
      padding-top: 90px;

      h1 {
        margin-left: -4px;
        margin-bottom: 30px;
      }

      .h4 {
        margin-left: 50px;
        font-weight: 200;
        margin-bottom: 40px;

      }

      h4.poem {
        text-align: left;
        font-style: italic;
        font-weight: 200;
        margin-bottom: 10px;
      }
    }
  }

  @media screen and (max-width: 1199px) {
    .main-screen {
      .text {
        padding-top: 80px;
      }
    }
  }

  @media screen and (max-width: 1099px) {
    .main-screen {
      padding-bottom: 30px;

      .text {
        padding-top: 40px;
      }
    }
  }

  @media screen and (max-width: 991px) {
    .main-screen {
      padding-bottom: 20px;

      .text {
        padding-top: 20px;
      }
    }
  }

  @media screen and (max-width: 767px) {
    .main-screen {

      .text {
        padding-top: 0;

        h1 {
          margin-bottom: 20px;
        }

        h4 {
          margin-bottom: 30px;
        }
      }
    }
  }
</style>
