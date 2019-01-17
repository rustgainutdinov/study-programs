<template>
  <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16" class="main-description">
    <el-tabs type="card">
      <el-tab-pane label="Описание">
        <AboutTab :programData="programData"/>
      </el-tab-pane>
      <el-tab-pane label="Другие направления">
        <OtherProgramsTab :programData="programData"/>
      </el-tab-pane>
    </el-tabs>
  </el-col>
</template>

<script>
  import AboutTab from '@/components/university_card/description_block/tabs/about'
  import OtherProgramsTab from '@/components/university_card/description_block/tabs/other_programs'

  export default {
    name: "index",
    props: ['programData'],
    components: {
      AboutTab,
      OtherProgramsTab
    }
  }
</script>

<style scoped>

</style>