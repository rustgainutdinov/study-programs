<template>
  <el-row>
    <el-col :lg="24" :xl="24">
      <ProgramsList :list="sortedBaccalaureateList" linkTo="program_about" directionTitle="Бакалавриат"/>
      <ProgramsList :list="sortedSpecialtyList" linkTo="program_about" directionTitle="Специалитет"/>
    </el-col>
    <el-col :lg="24" :xl="24"></el-col>
  </el-row>
</template>

<script>
  import ProgramsList from '@/components/programs_list';

  export default {
    name: "index",
    components: {
      ProgramsList
    },
    props: ['programData'],
    data() {
      return {
        programsNumbers: null,
        sortedBaccalaureateList: null,
        sortedSpecialtyList: null
      }
    },
    computed: {
      baccalaureateList() {
        var directionBaccalaureate = this.$store.getters.getProgramsByQuality('baccalaureate');
        return directionBaccalaureate ? directionBaccalaureate : {};
      },
      specialtyList() {
        var directionSpecialty = this.$store.getters.getProgramsByQuality('specialty');
        return directionSpecialty ? directionSpecialty : {};
      },
    },
    created() {
      this.getOtherProgramsData();
    },
    methods: {
      getOtherProgramsData() {
        this.$axios.$get('/execute',
          {
            params: {
              query: 'get_programs_by_university_id',
              data: {
                universities_id: this.programData.universities_id
              }
            }
          })
          .then(result => {
            if (result.statusCode === '023ms7fbgs54bw9y' && result.data !== null) {
              this.sortedBaccalaureateList = this.sortProgramsLists(result.data, this.baccalaureateList);
              this.sortedSpecialtyList = this.sortProgramsLists(result.data, this.specialtyList);
            }
          })
          .catch(e => {
            console.log(e);
            this.programsNumbers = null;
          })
      },
      sortProgramsLists(otherProgramsData, list) {
        var programsNumbers = [];
        var sortedList = {};
        otherProgramsData.forEach(item => {
          programsNumbers[item.code] = item.programs_id;
        });
        for (var key in list) {
          var direction = [];
          list[key].forEach(item => {
            if (typeof programsNumbers[item.programNumber] !== "undefined") {
              item.programLink = programsNumbers[item.programNumber];
              direction.push(item);
            }
          });
          if (direction.length !== 0) {
            sortedList[key] = direction;
          }
        }
        return sortedList;
      }
    }
  }
</script>

<style scoped>

</style>