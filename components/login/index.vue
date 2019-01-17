<template>
  <div class="login-root">
    <div class="login-block">
      <FormHead/>
      <FormElements/>
    </div>
    <nuxt-link tag="div" class="to-main-page" to="/">
      <el-button type="text">На главную</el-button>
    </nuxt-link>
  </div>
</template>

<script>
  import FormHead from '@/components/login/head'
  import FormElements from '@/components/login/form'

  export default {
    name: "index",
    components: {
      FormHead,
      FormElements
    }
  }
</script>

<style lang="scss">
  .login-root {
    padding-top: 100px;

    .login-block {
      width: 500px;
      border-radius: 10px;
      padding: 40px;
      box-sizing: border-box;
      background: #fff;
      margin: 0px auto 0;
      box-shadow: 0px 1px 15px 1px rgba(81, 77, 92, 0.08);
    }
  }

  .to-main-page {
    width: 100px;
    padding-top: 0px;
    margin: auto;

    button {
      font: 500 14px/1em 'Montserrat', sans-serif;
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 567px) {
    .login-root {
      padding-top: 50px;

      .login-block {
        width: calc(100% - 30px);
        padding: 30px;
        margin: 0 15px;

        .el-button + .el-button {
          display: none;
        }
      }
    }
  }
</style>
