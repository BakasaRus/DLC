<template>
	<ul>
		<li v-for="subject in subjects">{{ subject.name }}</li>
	</ul>
</template>

<script>
	export default {
		data: () => ({
			subjects: []
	    }),

		created() {
			window.axios.get('/api/subjects', {headers: this.$root.auth.headers()})
				.then(response => this.subjects = response.data)
				.catch(error => this.subjects = [{name: error.message}]);
		}
	}
</script>