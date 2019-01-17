<template>
  <el-col
    v-xxs="{ span: 24, offset: 0 }" :xs="12" :sm="12" :md="8" :lg="8" :xl="8"
    class="direction"
    :style="itemData.setBackground"
  >
    <p class="icon" @click="redirectToDirection('/directions/' + itemData.link)" v-html="itemData.icon"></p>
    <p class="title h5" @click="redirectToDirection('/directions/' + itemData.link)">
      <span
        class="large"
        v-html="itemData.title"
      ></span>
    </p>
    <!--<p class="description" @click="redirectToDirection('/directions/' + itemData.link)">{{ itemData.text }}</p>-->
  </el-col>
</template>

<script>
  export default {
    name: "index",
    props: ['itemData'],
    methods: {
      redirectToDirection(path) {
        this.$router.push(path);
      }
    }
  }
</script>

<style>
  .fill0 {
    fill: #1a237e;
  }

  .fill1 {
    fill: #bf360c;
  }

  .fill2 {
    fill: #004d40;
  }

  .fill3 {
    fill: #e65100;
  }

  .fill4 {
    fill: #4a148c;
  }

  .fill5 {
    fill: #424242;
  }

  .fill6 {
    fill: #4e342e;
  }

  .fill7 {
    fill: #37474f;
  }

  .fill8-1 {
    fill: #880e4f;
  }

  .fill8-0 {
    fill: #e91e63;
  }
</style>