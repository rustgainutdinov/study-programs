<template>
  <section>
    <div class="container university-card">
      <h3 class="title">{{ programData.title }}</h3>
      <div class="add-to-favorites-btn" @click="setFavoriteProgram">
        <div class="round-icon"><i class="material-icons">star</i></div>
        <p class="button-text">Добавить в избранное</p>
      </div>
      <el-row>
        <TopBlock :programData="programData"/>
        <DescriptionBlock :programData="programData"/>
      </el-row>
    </div>
  </section>
</template>

<script>
  import TopBlock from '@/components/university_card/top_block'
  import DescriptionBlock from '@/components/university_card/description_block'
  import Cookie from "js-cookie";

  export default {
    name: "index",
    props: ['programData'],
    components: {
      TopBlock,
      DescriptionBlock
    },
    methods: {
      setFavoriteProgram() {
        if (this.usersPersonalData.accessRight <= 100) {
          var favouritePrograms = Cookie.get('favouritePrograms');
          if (!favouritePrograms) {
            Cookie.set('favouritePrograms', encodeURIComponent(this.programData.programs_id), {expires: 365});
            this.openNotification('Программа добавлена в избранное', 'Вы можете посмотреть ее в разделе избранное', 'success');
            return;
          }
          favouritePrograms = decodeURIComponent(favouritePrograms);
          favouritePrograms += ',' + this.programData.programs_id;
          Cookie.set('favouritePrograms', encodeURIComponent(favouritePrograms), {expires: 365});
          console.log(favouritePrograms);
          this.openNotification('Программа добавлена в избранное', 'Вы можете посмотреть ее в разделе избранное', 'success');
          return;
        }
        this.$axios.$get('/execute', {
          params: {
            query: 'set_favorite_program',
            data: {
              programs_id: this.programData.programs_id,
              users_id: this.usersPersonalData.userId
            }
          },
          withCredentials: true
        })
          .then(result => {
            if (result.statusCode !== '023ms7fbgs54bw9y' || result.data == null) {
              console.error(result);
              this.openNotification('Программа не добавлена в избранное', 'Повторите попытку позднее', 'error');
              return;
            }
            this.openNotification('Программа добавлена в избранное', 'Вы можете посмотреть ее в разделе избранное', 'success');
          })
          .catch(result => {
            console.error(result);
          })
      },
      openNotification(title, message, type) {
        this.$notify({
          title, message, type
        });
      }
    },
    computed: {
      usersPersonalData() {
        return this.$store.getters.getUserData;
      }
    }
  }
</script>

<style lang="scss">
  $mainColor: #3f51b5;
  $mainColorHover: #5c6bc0;

  .university-card {
    display: flex;
    flex-wrap: wrap;
    .title {
      width: calc(100% - 250px);
      display: block;
      margin: 0;
      padding: 40px 0 20px;
      color: #273044;
      line-height: 1.4em;
    }

    .add-to-favorites-btn {
      margin-top: 35px;
      width: 250px;
      outline: none;
      background: none;
      box-sizing: border-box;
      border: none;
      padding: 12px 0px;
      display: flex;
      justify-content: flex-end;

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

    .contacts {
      box-sizing: border-box;
      margin: 5px 15px 0 0;
      width: calc(100% - 15px);

      .item {
        padding: 20px;
        display: flex;

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

    .contacts-vertical {
      box-sizing: border-box;
      margin-right: 15px;
      width: calc(100% - 15px);
      display: flex;
      flex-direction: column;
      padding: 10px;

      .item {
        padding: 20px;
        display: flex;
        border-bottom: 1px solid rgba(163, 163, 163, .3);

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

      .item:last-child {
        border: none;
        display: flex;
      }
    }

    .statistics {
      box-sizing: border-box;
      margin-right: 15px;
      background: #f0f2f5;
      width: calc(100% - 15px);
      padding: 10px;
      display: flex;
      flex-direction: column;

      .item {
        padding: 20px;
        border-bottom: 1px solid rgba(163, 163, 163, .3);
        display: flex;

        .icon {
          margin-right: 10px;

          i {
            line-height: 35px;
            font-size: 35px;
          }
        }

        .text {
          margin-top: 6px;
          font: 500 14px/1.5em 'Montserrat', sans-serif;
          color: #333;
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

      .item:last-child {
        border: none;
        display: flex;
      }
    }

    .main-image {
      width: 100%;
      background-position: center bottom;
      background-size: 100%;
      overflow: hidden;
      height: 500px;

      img {
      }

      .image {
        height: 100%;
        width: 100%;
      }
    }

    .main-description {
      margin-top: 15px;

      .el-tabs__header {
        background: #f0f2f5;
        border: none;

        .el-tabs__nav {
          border: none;
          width: 100%;
          display: flex;
          flex-direction: row;

          .el-tabs__item {
            border: none;
            border-top: 2px solid #f0f2f5;
            height: auto;
            padding: 0 30px;
            font: 500 16px/60px 'Montserrat', sans-serif;
            color: #333;
          }

          .el-tabs__item.is-active {
            border-top: 2px solid $mainColor;
            background: #fff;
            color: #333;
          }
        }
      }

      .about-university-title {
        margin-top: 25px;
        margin-bottom: 0;
      }

      .about-university-description {
        margin-top: 10px;
        box-sizing: border-box;

        .about-university-text {
          font: 400 14px/1.75em 'Open Sans', sans-serif;
        }
      }

      .about-program-description {
        margin-top: 40px;
        box-sizing: border-box;

        .about-program-title {
        }

        .about-program-text {
          font: 400 14px/1.75em 'Open Sans', sans-serif;
        }
      }
    }
  }

  @media screen and (max-width: 991px) {
  }

  @media screen and (max-width: 767px) {
    .university-card {

      .title {
        width: 100%;
        padding-bottom: 0;
      }

      .add-to-favorites-btn {
        margin-top: 0;
        margin-bottom: 10px;
        width: 100%;
        justify-content: flex-start;
      }

      .statistics {
        margin-right: 0;
        margin-bottom: 15px;
        width: 100%;
      }

      .contacts-vertical {
        margin-right: 0;
        margin-top: 15px;
        width: 100%;
      }

      .main-description {
        .el-tabs__header {
          .el-tabs__nav {
            flex-direction: column;
          }
        }
      }
    }
  }
</style>