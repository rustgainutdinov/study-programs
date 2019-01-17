<template>
  <div>
    <TopMenuLine/>
    <TopMenu/>
  </div>
</template>

<script>
  import TopMenuLine from '@/components/navigation/top_menu_line'
  import TopMenu from '@/components/navigation/top_menu'

  export default {
    name: "index",
    components: {
      TopMenuLine,
      TopMenu
    }
  }
</script>

<style>

</style>
