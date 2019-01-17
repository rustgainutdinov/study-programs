<template>
  <div>
    <form-block/>
  </div>
</template>

<script>
  import formBlock from '@/components/login'

  export default {
    name: "index",
    layout: 'auth',
    middleware: ['guest'],
    components: {
      formBlock
    }
  }
</script>

<style scoped>

</style>
