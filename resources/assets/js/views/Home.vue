<template>
	<ul>
		<li v-for="quote in quotes">{{ quote.body }}</li>
	</ul>
</template>

<script>
	export default {
		data() {
			return {
				quotes: []
			}
		},

		created() {
			console.log(this.$root.auth);
			window.axios.get('/api/quotes', {headers: this.$root.auth.headers()})
				.then(response => this.quotes = response.data)
				.catch(error => this.quotes = [{body: error.message}]);
		}
	}
</script>