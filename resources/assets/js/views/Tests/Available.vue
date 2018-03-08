<template>
<v-layout row wrap justify-center>
	<v-flex md4 sm6 xs12 v-for="test in tests" :key="test.id">
		<v-card>
			<v-card-title>
				<div>
					<div class="headline">{{ test.name }}</div>
					<span class="subheading">({{ test.subject.name }})</span>
				</div>
			</v-card-title>
			<v-card-text>
				Количество вопросов: {{ test.questions_count }}<br>
				Автор: {{ test.author.full_name }}<br>
				<span v-if="test.test_info.max_points">
					Максимум баллов за выданный вариант: {{ test.test_info.max_points }}<br>
					Набрано баллов: {{ test.test_info.points }}
				</span>
			</v-card-text>
			<v-card-actions>
				<v-btn block color="primary" dark @to="'/tests/' + test.id" slot="activator">
					<span>Пройти</span>
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