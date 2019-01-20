<template>
  <div>
    <Title :title="title"/>
    <el-row class="universities-list" :gutter="30">
      <listItem
        v-for="listItem in listData"
        :key="listItem.programs_id"
        :itemData="listItem"
      />
    </el-row>
  </div>
</template>

<script>
  import Title from '@/components/universities_list/title';
  import listItem from '@/components/universities_list/item';

  export default {
    name: "index",
    props: ['listData', 'title'],
    components: {
      listItem,
      Title
    }
  }
</script>

<style lang="scss">
  $mainColor: #3f51b5;
  $mainColorHover: #5c6bc0;

  .page-title {
    margin: 0;
    padding-top: 50px;
    padding-bottom: 0;
  }

  .universities-list {
    padding: 40px 0 0;
    display: flex;
    flex-wrap: wrap;

    .card {
      margin-bottom: 30px;
      border-radius: 5px;
      text-align: left;
      box-shadow: 13px 15px 15px 0 rgba(105, 105, 105, .08);
      position: relative;

      .photo {
        display: block;
        height: 250px;
        width: 100%;
        border-bottom: 5px solid #3f51b5;
        border-radius: 5px 5px 0 0;
      }

      .text {
        padding: 20px;

        .prog-num {
          font: 400 14px/1.3em 'Montserrat', sans-serif;
          margin-bottom: 20px;
        }

        .university-title {
          font: 500 20px/1.3em 'Montserrat', sans-serif;
          margin-bottom: 5px;
        }

        .university-title:hover {
          color: $mainColor;
          cursor: pointer;
        }

        .main-description {
          display: flex;
          justify-content: flex-start;
          flex-direction: column;

          .item {
            display: flex;
            margin-bottom: 15px;
            .icon {
              padding-top: 5px;
              height: 40px;
              text-align: left;
              margin-right: 10px;

              i {
                font-size: 30px;
                line-height: 30px;
              }
            }

            .description {

              width: calc(100% - 40px);
              display: flex;
              flex-direction: column;

              .light-color {
                font: 500 13px/1.2em 'Montserrat', sans-serif;
                color: #aaa;
              }

              .dark-color {
                font: 500 15px/1.4em 'Montserrat', sans-serif;
                color: #333;
              }
            }
          }
        }
      }
    }

    .card:hover {
      box-shadow: 3px 4px 15px 0 rgba(105, 105, 105, .08);
      transition: all .3s;
    }
  }

  @media screen and (max-width: 1199px) {
    .page-title {
      padding-top: 40px;
    }
  }

  @media screen and (max-width: 991px) {
    .page-title {
      padding-top: 30px;
    }
  }

  @media screen and (max-width: 767px) {
    .page-title {
      padding-top: 30px;
    }
  }

  @media screen and (max-width: 567px) {
    .page-title {
      padding-top: 20px;
    }
  }
</style>