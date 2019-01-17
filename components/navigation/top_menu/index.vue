<template>
  <div class="top-menu">
    <div class="large-container">
      <nuxt-link
        tag="div"
        class="logo"
        to="/"
      >
        <Logo/>
      </nuxt-link>
      <div class="search-bar">
        <el-input placeholder="Введите ключевое слово" class="input-search" v-model="searchInput">
          <el-button slot="append" icon="el-icon-search" @click="searchText"></el-button>
        </el-input>
      </div>
      <div class="mobile-burger hidden-sm-and-up">
        <div class="burger" @click="showMobileMenu = !showMobileMenu" v-show="!showMobileMenu">
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
        </div>
        <div class="x-close" @click="showMobileMenu = !showMobileMenu" v-show="showMobileMenu">
          <div class="item"></div>
          <div class="item"></div>
        </div>
      </div>
      <div class="menu-items hidden-xs-only">
        <ul>
          <nuxt-link
            tag="li"
            to="/favorite_programs"
          >Избранное
          </nuxt-link>
          <nuxt-link
            tag="li"
            to="/login"
            v-show="userAccessRight <= 100"
            class="hidden-md-and-down"
          >
            <el-button
              class="login"
              type="success"
              round
            >Вход
            </el-button>
          </nuxt-link>

          <nuxt-link
            tag="li"
            to="/register"
            v-show="userAccessRight <= 100"
            class="hidden-md-and-down"
          >
            <el-button
              class="registration"
              type="success"
              round
            >Регистрация
            </el-button>
          </nuxt-link>
          <li
            v-show="userAccessRight > 100"
            class="hidden-md-and-down"
          >
            <el-button
              class="login"
              type="success"
              round
              @click="logoutUser"
            >Выход
            </el-button>
          </li>

          <nuxt-link
            tag="li"
            to="/private_office"
            v-show="userAccessRight > 100"
            class="hidden-md-and-down"
          >
            <el-button
              class="registration"
              type="success"
              round>Личный кабинет
            </el-button>
          </nuxt-link>
          <!--<li class="hidden-sm-and-down">-->
          <!--<el-button-->
          <!--class="callback"-->
          <!--type="success"-->
          <!--icon="el-icon-service"-->
          <!--circle-->
          <!--&gt;</el-button>-->
          <!--</li>-->
        </ul>
      </div>
    </div>
    <el-collapse-transition class="hidden-sm-and-up">
      <el-menu
        active-text-color="#3f51b5"
        v-show="showMobileMenu"
        class="hidden-sm-and-up"
      >
        <el-menu-item index="0">
          <nuxt-link
            tag="span"
            to="/"
          >Главная
          </nuxt-link>
        </el-menu-item>
        <el-menu-item index="1">
          <nuxt-link
            tag="span"
            to="/favorite_programs"
          >Избранное
          </nuxt-link>
        </el-menu-item>
        <el-menu-item index="4">
          <nuxt-link
            tag="span"
            to="/"
          >Для вузов
          </nuxt-link>
        </el-menu-item>
        <el-menu-item index="5">
          <nuxt-link
            tag="span"
            to="/"
          >Панель администратора вуза
          </nuxt-link>
        </el-menu-item>
        <el-menu-item index="2" v-show="userAccessRight > 100">
          <nuxt-link
            tag="span"
            to="/login"
          >Выход
          </nuxt-link>
        </el-menu-item>
        <el-menu-item index="2" v-show="userAccessRight <= 100">
          <nuxt-link
            tag="span"
            to="/login"
          >Вход
          </nuxt-link>
        </el-menu-item>
        <el-menu-item index="3" v-show="userAccessRight <= 100">
          <nuxt-link
            tag="span"
            to="/register"
          >Регистрация
          </nuxt-link>
        </el-menu-item>
      </el-menu>
    </el-collapse-transition>
  </div>
</template>

<script>
  import 'element-ui/lib/theme-chalk/base.css';
  import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
  import Logo from '@/components/navigation/top_menu/logo';

  export default {
    name: "index",
    components: {
      CollapseTransition,
      Logo
    },
    data() {
      return {
        searchInput: '',
        userAccessRight: 100,
        showMobileMenu: false
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
      searchText() {
        var text = this.searchInput;
        this.$router.replace({
          path: '/search', query: {
            search_text: text
          }
        });
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

<style lang="scss">
  $mainColor: #3f51b5;
  $mainColorHover: #5c6bc0;
  .top-menu {
    .large-container {
      display: flex;
      justify-content: center;
      padding: 20px 15px;
      box-sizing: border-box;

      .logo {
        width: 230px;
        height: 65px;
        text-align: center;
      }

      .logo:hover {
        cursor: pointer;
      }

      .search-bar {
        display: flex;
        justify-content: center;
        flex-grow: 1;
        height: 50px;
        padding: 0 30px;

        .input-search {
          width: 100px;
          flex-grow: 1;

          .el-input__inner {
            height: 50px;
            background: #f0f2f5;
            border: 2px solid #f0f2f5;
            border-right: none;
            font: 400 14px/50px 'Open-Sans', sans-serif;
          }

          .el-input__inner:focus {
            border-right: none;
          }

          .el-input-group__append {
            background: $mainColor;
            border: 1px solid $mainColor;

            .el-icon-search {
              color: #fff;
            }
          }
        }
      }

      .mobile-burger {
        display: flex;
        justify-content: flex-end;
        height: 50px;
        padding: 9.5px 10px 9.5px 0;
        box-sizing: border-box;

        .burger {
          box-sizing: border-box;
          width: 32px;
          height: 31px;
          padding: 5px;
          border-radius: 3px;

          .item {
            width: 22px;
            height: 3px;
            border-radius: 1.5px;
            margin-bottom: 5px;
            background: $mainColor;
          }
        }

        .x-close {
          box-sizing: border-box;
          width: 32px;
          height: 31px;
          padding: 5px;
          border-radius: 3px;
          position: relative;

          .item {
            position: absolute;
            width: 22px;
            height: 3px;
            border-radius: 1.5px;
            top: 11px;
            background: $mainColor;
            transform-origin: center center;
          }

          .item:first-child {
            transform: rotate(45deg);
          }

          .item:last-child {
            transform: rotate(-45deg);
          }
        }
      }

      .menu-items {
        height: 50px;

        .el-dropdown-link {
          cursor: pointer;
          margin: 15px 0;

          span {
            font: 600 14px/20px 'Montserrat', sans-serif;
            color: #777;
          }
        }

        ul {
          display: flex;
          justify-content: flex-start;

          li {
            font: 400 14px/50px 'Montserrat', sans-serif;
            color: #333;
            padding: 0 10px;
          }

          li:hover {
            cursor: pointer;
          }

          .login {
            color: #777;
            font: 600 14px/14px 'Montserrat', sans-serif;
            background: #f0f2f5;
            border: none;
            letter-spacing: 1px;
          }

          .login:hover {
            background: #e6e8eb;
          }

          .registration {
            color: #eee;
            font: 600 14px/14px 'Montserrat', sans-serif;
            background: $mainColor;
            border: none;
            letter-spacing: 1px;
          }

          .registration:hover {
            background: $mainColorHover;
          }

          .callback {
            background: #4caf50;
            border: none;
          }

          .callback:hover {
            background: #66bb6a;
          }
        }
      }
    }

    .el-menu {
      border-right: none;
      border-bottom: solid 1px #e6e6e6;
      box-shadow: 0px 15px 15px 1px rgba(69, 65, 78, 0.08);
    }
  }

  .gray-border-bottom {
    border-bottom: 2px solid #e2e2e2;
  }

  @media screen and (max-width: 991px) {
    .top-menu {
      .large-container {

        .logo {
          width: 180px;
          height: 50px;
        }
      }
    }
  }

  @media screen and (max-width: 567px) {
    .top-menu {
      .large-container {

        .logo {
          width: 150px;
          height: 50px;
          text-align: left;
        }

        .search-bar {
          display: none;
        }

        .mobile-burger {
          flex-grow: 1;
          padding: 9.5px 0 9.5px 0;
        }
      }
    }
  }
</style>
