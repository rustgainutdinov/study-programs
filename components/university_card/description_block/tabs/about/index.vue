<template>
  <el-row>
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
      <p class="h4 about-university-title">{{ programData.title }}</p>
      <div class="about-university-description">
        <p class="about-university-text">{{ briefBusinessCard }}</p>
      </div>
    </el-col>
    <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
      <div class="about-program-description">
        <p class="h4 about-program-title">{{ programData.code + ' ' + programData.title_of_training_area}}</p>
        <p class="about-program-text">{{ structuralSubdivision }}</p>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: "index",
    props: ['programData'],
    computed: {
      briefBusinessCard() {
        return this.programData.brief_business_сard ? this.programData.brief_business_сard : 'здесь должно быть описание вуза';
      },
      structuralSubdivision() {
        return this.programData.structural_subdivision ? this.programData.structural_subdivision : 'здесь долно быть описание программы';
      }
    }
  }
</script>

<style scoped>

</style>