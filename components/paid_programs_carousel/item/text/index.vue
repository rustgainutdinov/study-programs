<template>
  <el-col :xs="24" :sm="{ span: 11, offset: 1 } " :md="{ span: 9, offset: 1 }" :lg="{ span: 13, offset: 1 }"
          :xl="{ span: 13, offset: 1 }">
    <el-row>
      <el-col :xs="24" :sm="24" :md="{ span: 24 }" :lg="{ span: 24 }" :xl="{ span: 24 }">
        <h3 class="title">{{ programData.title }}</h3>
        <el-row :gutter="10" type="flex" class="points-data">
          <PointBlock
            v-for="(point, key, i) in pointsData"
            :key="i"
            :pointData="point"
          />
        </el-row>
        <div class="button-group">
          <el-button class="success-btn" @click="toProgramCard(programData.programs_id)">Открыть карточку ВУЗа
          </el-button>
          <button class="add-to-favorites-btn" @click="setFavoriteProgram">
            <div class="round-icon"><i class="material-icons">star</i></div>
            <p class="button-text">Добавить в избранное</p>
          </button>
        </div>
      </el-col>
    </el-row>
  </el-col>
</template>

<script>
  import PointBlock from '@/components/paid_programs_carousel/item/text/point'
  import Cookie from "js-cookie";


  export default {
    name: "index",
    props: ['programData'],
    components: {
      PointBlock
    },
    data() {
      return {
        pointsData: [
          {
            icon: {
              title: 'extension',
              style: {
                color: '#2196f2'
              }
            },
            title: 'Наименование',
            data: this.programData.title_of_training_area
          },
          {
            icon: {
              title: 'widgets',
              style: {
                color: '#019587'
              }
            },
            title: 'Номер',
            data: this.programData.code,
          },
          {
            icon: {
              title: 'poll',
              style: {
                color: '#f39304'
              }
            },
            title: 'Балл',
            data: this.programData.passing_score
          },
          {
            icon: {
              title: 'monetization_on',
              style: {
                color: '#3f51b5'
              }
            },
            title: 'Стоимость',
            data: this.programData.cost_of_education
          },
          {
            icon: {
              title: 'school',
              style: {
                color: '#9b26af'
              }
            },
            title: 'Квалификация',
            data: this.programData.study_programs_title
          },
          {
            icon: {
              title: 'group',
              style: {
                color: '#4cad50'
              }
            },
            title: 'Конкурс',
            data: this.programData.competition
          }
        ]
      }
    },
    methods: {
      toProgramCard(path) {
        console.log(path);
        this.$router.push(
          {
            path: '/program_about/' + path,
          }
        )
      },
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

<style scoped>

</style>