<template>
  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
    <el-row>
      <Contacts :programData="programData"/>
      <Tabs :programData="programData"/>
      <OtherUniversities :programData="programData"/>
    </el-row>
  </el-col>
</template>

<script>
  import Contacts from '@/components/university_card/description_block/contacts'
  import Tabs from '@/components/university_card/description_block/tabs'
  import OtherUniversities from '@/components/university_card/description_block/other_universities_list'

  export default {
    name: "index",
    props: ['programData'],
    components: {
      Contacts,
      Tabs,
      OtherUniversities
    }
  }
</script>

<style scoped>

</style>