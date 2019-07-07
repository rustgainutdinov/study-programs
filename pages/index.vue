<template>
  <div>
    <MainPageContent/>
  </div>
</template>

<script>
	import MainPageContent from '@/components/main_page_content';

	export default {
		layout: 'default',
		components: {
			MainPageContent,
		},
		middleware: ['check_auth'],
		data() {
			return {}
		},
		mounted() {
			console.log(this.$store.getters.getUserData);
		}
	}
</script>

<style>
</style>
