<template>
  <div class="menu-top-line hidden-xs-only">
    <div class="large-container">
      <ul>
        <nuxt-link
          tag="li"
          to="/in_developing"
        >Для вузов
        </nuxt-link>
        <nuxt-link
          tag="li"
          to="/in_developing"
        >Панель администратора вуза
        </nuxt-link>
        <li></li>
        <nuxt-link
          tag="li"
          to="/login"
          v-show="userAccessRight <= 100"
          class="hidden-lg-and-up"
        >Вход
        </nuxt-link>
        <nuxt-link
          tag="li"
          to="/register"
          v-show="userAccessRight <= 100"
          class="hidden-lg-and-up"
        >Регистрация
        </nuxt-link>
        <li
          @click="logoutUser"
          v-show="userAccessRight > 100"
          class="hidden-lg-and-up"
        >Выход
        </li>
        <nuxt-link
          tag="li"
          to="/private_office"
          v-show="userAccessRight > 100"
          class="hidden-lg-and-up"
        >Личный кабинет
        </nuxt-link>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        userAccessRight: 100
      }
    },
    methods: {
      logoutUser() {
        this.$store.dispatch('logoutUser');
        this.$axios.$get("/logout", {withCredentials: true})
          .then(result => {
            console.log(result);
            if (result.statusCode !== '023ms7fbgs54bw9y') {
              console.log(result);
            }
          })
          .catch(e => {
            console.log(e);
          });
        this.setUserAssessRight();
      },
      setUserAssessRight() {
        var userData = this.$store.getters.getUserData;
        if (userData !== null) {
          this.userAccessRight = userData.accessRight;
        } else {
          this.userAccessRight = 100;
        }
        console.log(this.userAccessRight);
      }
    },
    created() {
      this.setUserAssessRight();
    }
  }
</script>

<style scoped lang="scss">
  .menu-top-line {
    border-bottom: 1px solid #e2e2e2;

    .large-container {
      width: 100%;
      padding: 15px 15px;
      box-sizing: border-box;
      display: flex;
      justify-content: flex-end;

      ul {
        display: flex;
        justify-content: flex-end;

        li {
          font: 400 12px/20px 'Montserrat', sans-serif;
          color: #777;
          padding: 0 15px;
        }

        li:hover {
          cursor: pointer;
        }
      }
    }
  }
</style>
