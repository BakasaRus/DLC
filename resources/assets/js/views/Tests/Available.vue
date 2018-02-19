<template>
	<ul>
		<li v-for="test in tests" :key="test.id">{{ test.name }}</li>
	</ul>
</template>

<script>
	export default {
		data: () => ({
			tests: [],
			loading: false
		}),

		created() {
			this.loadTests();
		},

		methods: {
			loadTests() {
				this.loading = true;
				window.axios.get('/api/user/tests')
					.then(response => {
						this.tests = response.data.data;
						this.loading = false;
					})
					.catch(error => {
						console.log(error);
						this.loading = false;
					});
			}
		}
	}
</script>