<template>
  <div>
    <div class="list">
      <h3>{{ directionTitle }}</h3>
      <el-collapse accordion>
        <ListItem
          v-for="(listItem, key, i) in list"
          :key="i"
          :title="key"
          :name="i"
          :programsList="listItem"
          :linkTo="linkTo"
        />
      </el-collapse>
    </div>
  </div>
</template>

<script>
  import ListItem from '@/components/programs_list/item';

  export default {
    name: "index",
    props: ['list', 'linkTo', 'directionTitle'],
    components: {
      ListItem
    },
    created() {
    }
  }
</script>

<style lang="scss">
  $mainColor: #3f51b5;
  $mainColorHover: #5c6bc0;

  .list {
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    h3 {
      font-weight: 200;
      margin-bottom: 20px;
    }

    .el-collapse-item__wrap, .el-collapse-item__header, .el-collapse {
      transition: all .3s;
      border: none;
      background: #f0f4fa;
    }

    .el-collapse-item {
      transition: all .3s;
      border-top: 2px solid #fff;
      box-sizing: border-box;
      padding: 15px;

      .el-collapse-item__header {
        height: auto;
        font: 500 18px/1.75em 'Open Sans', sans-serif;
        color: #273044;
      }

      .el-collapse-item__content {
        padding-bottom: 10px;

        .text {
          font: 500 14px/1.5em 'Open Sans', sans-serif;
          color: #273044;
          margin-bottom: 10px;
        }

        .text:hover {
          color: #385bce;
          text-decoration: underline;
        }
      }
    }

    .el-collapse-item:hover, .el-collapse-item.is-active {
      border-top: 2px solid $mainColor;
      cursor: pointer;
      transition: all .3s;
      background: #fff;

      .el-collapse-item__wrap, .el-collapse-item__header, .el-collapse {
        background: #fff;
        transition: all .3s;
      }

    }

    .el-collapse-item.is-active {

      .el-collapse-item__header {
        padding-bottom: 10px;
        transition: all .3s;
      }

    }

    .el-collapse-item:hover {
      box-shadow: 0 5px 10px rgba(0, 0, 0, .18);
      transition: all .3s;

      .el-collapse-item__header {
        color: #385bce;
        transition: all .3s;
      }

    }
  }

  @media screen and (max-width: 991px) {
    .list {
      padding-top: 15px;

      h3 {
        margin-bottom: 10px;
      }

      .el-collapse-item {

        .el-collapse-item__header {
          font-size: 16px;
        }

        .el-collapse-item__content {

          .text {
            font-size: 14px;
          }
        }
      }
    }
  }

</style>