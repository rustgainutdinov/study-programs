<template>
  <div>
    <form-block/>
  </div>
</template>

<script>
  import formBlock from '@/components/register'

  export default {
    name: "index",
    middleware: ['guest'],
    layout: 'auth',
    components: {
      formBlock
    }
  }
</script>

<style scoped>

</style>
