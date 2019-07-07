<template>
  <el-row class="container footer">
    <el-col v-xxs="{ span: 24, offset: 0}" :xs="9" :sm="6" :md="6" :lg="6" :xl="6">
      <div class="logo" @click="$router.push('/')">
        <Logo/>
      </div>
    </el-col>
    <el-col v-xxs="{ span: 12, offset: 0}" :xs="{ span: 6, offset: 1}" :sm="{ span: 3, offset: 1}"
            :md="{ span: 3, offset: 1}" :lg="{ span: 3, offset: 1}" :xl="{ span: 4, offset: 1}">
      <ul>
        <nuxt-link
          tag="li"
          to="/"
          class="h5"
        >Главная
        </nuxt-link>
        <nuxt-link
          tag="li"
          to="/favorite_programs"
          class="h5"
        >Избранное
        </nuxt-link>
        <nuxt-link
          tag="li"
          to="/in_developing"
          class="h5"
        >Для вузов
        </nuxt-link>
      </ul>
    </el-col>
    <el-col v-xxs="{ span: 12, offset: 0}" :xs="{ span: 6, offset: 1}" :sm="{ span: 5, offset: 1}"
            :md="{ span: 5, offset: 1}" :lg="{ span: 5, offset: 1}" :xl="{ span: 5, offset: 1}">
      <ul>
        <nuxt-link
          tag="li"
          to="/login"
          class="h5"
        >Вход
        </nuxt-link>
        <nuxt-link
          tag="li"
          to="/register"
          class="h5"
        >Регистрация
        </nuxt-link>
        <nuxt-link
          tag="li"
          to="/in_developing"
          class="h5"
        >Панель администратора вуза
        </nuxt-link>
      </ul>
    </el-col>
    <el-col :xs="{ span: 16, offset: 0}" :sm="{ span: 6, offset: 1}" :md="{ span: 6, offset: 1}"
            :lg="{ span: 6, offset: 1}" :xl="{ span: 6, offset: 1}" class="subscribe hidden-xs-only">
      <span class="h5">Подписаться на рассылку</span>
      <el-input placeholder="Введите e-mail"></el-input>
      <el-button type="primary" class="send default-button" round>Отправить</el-button>
    </el-col>
  </el-row>
</template>

<script>
  import Logo from '@/components/navigation/top_menu/logo';

  export default {
    name: "index",
    components: {
      Logo
    }
  }
</script>

<style scoped>

</style>
