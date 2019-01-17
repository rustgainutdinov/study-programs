<template>
  <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
    <div class="contacts-vertical">
      <Item
        v-for="(itemData, key, i) in contactsData"
        :key="i"
        :itemData="itemData"
      />
    </div>
  </el-col>
</template>

<script>
  import Item from '@/components/university_card/description_block/contacts/item'

  export default {
    name: "index",
    props: ['programData'],
    components: {
      Item
    },
    data() {
      return {
        contactsData: [
          {
            icon: {
              title: 'phone',
              style: {
                color: '#4cad50'
              }
            },
            description: 'Телефон',
            text: this.programData.phone
          },
          {
            icon: {
              title: 'email',
              style: {
                color: '#f39304'
              }
            },
            description: 'email',
            text: this.programData.email
          },
          {
            icon: {
              title: 'public',
              style: {
                color: '#2196f2'
              }
            },
            description: 'Сайт',
            text: this.programData.site
          },
          {
            icon: {
              title: 'home',
              style: {
                color: '#3f51b5'
              }
            },
            description: 'Адрес',
            text: this.programData.location
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>