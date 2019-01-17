<template>
  <div>
    <section>
      <div class="container programs-list">
        <h1 class="title">{{ title }}</h1>
        <el-row>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <ProgramsList :list="baccalaureateList" linkTo="search" directionTitle="Бакалавриат"/>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <ProgramsList :list="specialtyList" linkTo="search" directionTitle="Специалитет"/>
          </el-col>
        </el-row>
      </div>
    </section>
  </div>
</template>

<script>
  import ProgramsList from '@/components/programs_list';

  export default {
    name: "index",
    components: {
      ProgramsList,
      title: ''
    },
    data() {
      return {
        directionData: []
      }
    },
    computed: {
      baccalaureateList() {
        var directionBaccalaureate = this.directionData.baccalaureate;
        return directionBaccalaureate ? directionBaccalaureate : {};
      },
      specialtyList() {
        var directionSpecialty = this.directionData.specialty;
        return directionSpecialty ? directionSpecialty : {};
      }
    },
    created() {
      this.title = this.$store.state.Directions.directions[this.$route.params.direction]['title'];
      this.directionData = this.$store.state.Directions.directions[this.$route.params.direction];
    }
  }
</script>

<style lang="scss">
  $mainColor: #3f51b5;
  $mainColorHover: #5c6bc0;

  .programs-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    .title {
      display: block;
      width: 100%;
    }

    .el-row {
      width: 100%;

      .el-col:first-child {
        padding-right: 7.5px;
      }

      .el-col:last-child {
        padding-left: 7.5px;
      }
    }
  }

  @media screen and (max-width: 991px) {
    .programs-list {
      .el-row {
        .el-col:first-child {
          padding-right: 0;
        }

        .el-col:last-child {
          padding-left: 0;
        }
      }
    }
  }
</style>