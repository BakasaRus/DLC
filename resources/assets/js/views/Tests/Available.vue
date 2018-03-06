<template>
<v-layout row wrap justify-center>
	<v-flex md4 sm6 xs12 v-for="test in tests" :key="test.id">
		<v-card>
			<v-card-title>
				<span class="headline">{{ test.name }} <span class="subheading">({{ test.subject.name }})</span></span>
			</v-card-title>
			<v-card-text>
				Количество вопросов: {{ test.questions_count }}<br>
				Автор: {{ test.author.full_name }}
			</v-card-text>
			<v-card-actions>
				<v-btn block color="primary" dark @to="'/tests/' + test.id" slot="activator">
					<span>Погнали</span>
					<v-icon>keyboard_arrow_right</v-icon>
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-flex>
</v-layout>
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