<template>
  <el-row class="container-slider">
    <el-carousel :interval="10000" arrow="always" :autoplay="true">
      <el-carousel-item v-for="(item, key, i) in bestPrograms" :key="i">
        <Item :itemData="item" @resizeSlider="resizeSlider"/>
      </el-carousel-item>
    </el-carousel>
  </el-row>
</template>

<script>
  import Item from '@/components/paid_programs_carousel/item'

  export default {
    name: "index",
    props: ['bestPrograms'],
    components: {
      Item
    },
    mounted() {
      this.resizeOnLoad();

    },
    updated() {
      this.resizeOnLoad();
    },
    methods: {
      resizeOnLoad() {
        var blocks = document.getElementsByClassName('carousel-item-inside');
        var timerId = setInterval(() => {
          if (blocks[0].offsetHeight !== 0) {
            clearInterval(timerId);
            var max = 0;
            for (var i = 0; i < blocks.length; i++) {
              if (blocks[i].offsetHeight > max) {
                max = blocks[i].offsetHeight;
              }
            }
            console.log(max);
            document.getElementsByClassName('el-carousel')[0].style.height = max + 'px';
          }
        }, 1);
        setTimeout(function () {
          clearInterval(timerId);
        }, 10);
      },
      resizeSlider() {
        var blocks = document.getElementsByClassName('carousel-item-inside');
        var max = 0;
        for (var i = 0; i < blocks.length; i++) {
          if (blocks[i].offsetHeight > max) {
            max = blocks[i].offsetHeight;
          }
        }
        document.getElementsByClassName('el-carousel')[0].style.height = max + 'px';
      }
    }
  }
</script>

<style lang="scss">
  $mainColor: #3f51b5;
  $mainColorHover: #5c6bc0;

  .universities-carousel {
    min-height: 450px;
    border-bottom: 1px solid #e4e6e8;
    border-top: 1px solid #e4e6e8;
    padding: 50px 0;
    box-sizing: border-box;

    .el-carousel__container {
      height: 100%;
    }

    .el-carousel__arrow--left {
      left: 0
    }

    .el-carousel__arrow--right {
      right: 0
    }

    .el-carousel__indicators {
      display: none;
    }

    .carousel-item {
      box-sizing: border-box;
      width: 1200px;
      margin: auto;
      height: 100%;

      .photo {
        border-radius: 10px;
        width: 100%;
      }

      .title {
        margin-top: 0;
        margin-bottom: 20px;
        line-height: 1.3em;
      }

      .description {
        line-height: 1.3em;
        margin-bottom: 20px;
      }

      .button-group {
        width: 100%;
        display: flex;
        flex-wrap: wrap;

        .success-btn {
          background: $mainColor;
          color: #fff;
          border: none;
          padding: 20px 30px;
          border-radius: 10px;
          font: 500 16px/1em 'Montserrat', sans-serif;
          margin-right: 30px;
        }

        .add-to-favorites-btn {
          outline: none;
          background: none;
          border: none;
          padding: 12px 0px;
          display: flex;

          .round-icon {
            margin-right: 5px;
            text-align: left;
            i {
              color: #555;
              font-size: 30px;
              line-height: 30px;
            }
          }

          .button-text {
            color: #555;
            font: 500 14px/30px 'Montserrat', sans-serif;
          }
        }

        .add-to-favorites-btn:hover {
          cursor: pointer;
          .round-icon {
            i {
              color: #efb467;
            }
          }

          .button-text {
            color: #333;
          }
        }
      }
      .points-data {
        flex-wrap: wrap;

        .main-description {
          display: flex;
          margin-bottom: 30px;

          .icon {
            height: 40px;
            font-size: 25px;
            line-height: 25px;
            text-align: left;
            margin-right: 10px;
          }

          .text {
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

  @media screen and (max-width: 1400px) {
    .universities-carousel {
      .carousel-item {
        width: calc(100% - 100px);
      }
    }
  }

  @media screen and (max-width: 1200px) {
    .universities-carousel {
      .carousel-item {
        width: calc(100% - 100px);

        .button-group {
          .success-btn {
            font: 500 15px/1em 'Montserrat', sans-serif;
            padding: 18px 26px;
          }

          .add-to-favorites-btn {
            padding-top: 15px;
            padding-bottom: 0;
          }
        }

        .points-data {
          .main-description {
            margin-bottom: 20px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 568px) {
    .universities-carousel {
      .carousel-item {
        width: calc(100% - 70px);

        .button-group {
          .success-btn {
            font: 500 14px/1em 'Montserrat', sans-serif;
            padding: 15px 20px;
          }

          .add-to-favorites-btn {
            padding-top: 15px;
            padding-bottom: 0;
          }
        }

        .points-data {
          .main-description {
            margin-bottom: 20px;
          }
        }
      }
    }
  }
</style>