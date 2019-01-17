<template>
  <div class="register-root">
    <div class="register-block">
      <form-head/>
      <form-elements/>
    </div>
    <div class="to-main-page">
      <nuxt-link tag="div" class="to-main-page" to="/">
        <el-button type="text">На главную</el-button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
  import formHead from '@/components/register/head'
  import formElements from '@/components/register/form'

  export default {
    name: "index",
    components: {
      formHead,
      formElements
    }
  }
</script>

<style lang="scss">
  .register-root {
    padding-top: 100px;

    .register-block {
      width: 700px;
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

  @media screen and (max-width: 767px) {
    .register-root {
      padding-top: 50px;

      .register-block {
        width: calc(100% - 30px);
        padding: 30px;
        margin: 0 15px;
      }
    }
  }
</style>
