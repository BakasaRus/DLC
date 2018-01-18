<template>
	<ul>
		<li v-for="prop in subject" v-text="prop"></li>
	</ul>
</template>

<script>
	export default {
		data: () => ({
			subject: {}
		}),

		created() {
			window.axios.get('/api/subjects/' + this.$route.params.id)
				.then(response => {
					this.subject = response.data;
				})
				.catch(error => {
					console.log(error);
				});
		}
	}
</script>