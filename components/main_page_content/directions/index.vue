<template>
  <section class="section">
    <el-row class="directions-title container">
      <Title/>
      <DirectionItems/>
    </el-row>
  </section>
</template>

<script>
  import Title from '@/components/main_page_content/directions/title';
  import DirectionItems from '@/components/main_page_content/directions/directions_items';

  export default {
    name: "index",
    components: {
      Title,
      DirectionItems
    },
    data() {
      return {}
    }
  }
</script>

<style lang="scss">
  .directions-title {
    padding-top: 60px;
    .text {
      padding-bottom: 50px;

      h2 {
        text-align: center;
      }

      h4 {
        text-align: center;
        font-weight: 200;
      }
    }
  }

  .directions {
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    align-items: stretch;

    .direction {
      background: #f2f6fb;
      padding: 30px;
      width: calc(33.33% - 31px);
      margin: 15px 15px;
      color: #eee;

      .title {
        font-weight: 500;
        margin-bottom: 0;
      }
    }

    .direction:nth-child(1), .direction:nth-child(4), .direction:nth-child(7) {
      width: calc(33.33% - 16px);
      margin-left: 0;
    }

    .direction:nth-child(3n) {
      width: calc(33.33% - 16px);
      margin-right: 0;
    }

    .direction:hover {
      cursor: pointer;
    }
  }

  @media screen and (max-width: 991px) {
    .directions {
      .direction, .direction:nth-child(1n) {
        width: calc(50% - 16px);
        margin-left: 15px;
        margin-right: 0;
      }

      .direction:nth-child(1), .direction:nth-child(3), .direction:nth-child(5), .direction:nth-child(7), .direction:nth-child(9) {
        width: calc(50% - 16px);
        margin-left: 0;
        margin-right: 15px;
      }
    }
  }

  @media screen and (max-width: 567px) {
    .directions {
      .direction, .direction:nth-child(1n) {
        width: 100%;
        margin-left: 0;
        margin-right: 0;
      }
    }
  }

  @media screen and (max-width: 467px) {
    .directions-title {
      padding-top: 30px;
      .text {
        padding-bottom: 30px;

        h2 {
          text-align: left;
        }

        h4 {
          text-align: left;
        }
      }
    }
  }
</style>