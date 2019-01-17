<template>
  <section class="light-blue-bg section" id="search">
    <el-row class="search container">
      <el-col :xs="{span: 24, offset: 0}" :sm="{span: 20, offset: 2}" :md="{span: 16, offset: 4}"
              :lg="{span: 16, offset: 4}" :xl="{span: 16, offset: 4}">
        <Title/>
        <SearchInput/>
      </el-col>
      <Statistics/>
    </el-row>
  </section>
</template>

<script>
  import Title from '@/components/main_page_content/search_block/title'
  import SearchInput from '@/components/main_page_content/search_block/search_input'
  import Statistics from '@/components/main_page_content/search_block/statistics'

  export default {
    name: "index",
    components: {
      Title,
      SearchInput,
      Statistics
    }
  }
</script>

<style lang="scss">
  .search {
    padding-top: 60px;
    padding-bottom: 60px;

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

    .search-bar {
      padding-bottom: 70px;

      .el-autocomplete {
        width: 100%;
        box-shadow: 0px 1px 15px 1px rgba(69, 65, 78, 0.08);

        input {
          padding: 0 25px;
          width: 100%;
          border: none;
          height: 60px;
          line-height: 60px;
        }

        .el-input-group__append {
          border: none;
        }
      }
    }

    .statistics {
      padding: 20px 0;
      border-right: 1px solid #dddddd;
      text-align: center;

      .h4 {
        font-weight: 200;
      }
    }

    .statistics:last-child {
      border-right: none;
    }
  }

  @media screen and (max-width: 1199px) {
    .search {
      padding-top: 50px;
      padding-bottom: 50px;

      .text {
        padding-bottom: 40px;
      }

      .search-bar {
        padding-bottom: 50px;
      }
    }
  }

  @media screen and (max-width: 991px) {
    .search {
      padding-top: 40px;
      padding-bottom: 40px;

      .text {
        padding-bottom: 30px;
      }

      .search-bar {
        padding-bottom: 30px;
      }
    }
  }

  @media screen and (max-width: 767px) {
    .search {
      padding-top: 20px;
      padding-bottom: 20px;

      .text {
        padding-bottom: 20px;
      }

      .search-bar {
        padding-bottom: 20px;
      }
    }

    .statistics:nth-child(2) {
      border-right: none;
    }

    .statistics:last-child, .statistics:nth-child(3) {
      display: none;
    }
  }

  @media screen and (max-width: 467px) {
    .search {
      padding-top: 20px;
      padding-bottom: 20px;

      .text {
        padding-bottom: 20px;

        h2 {
          text-align: left;
        }

        h4 {
          text-align: left;
        }
      }

      .search-bar {
        padding-bottom: 20px;
      }
    }

    .statistics {

      .h1 .large {
        font-size: 120%;
      }
    }
  }
</style>