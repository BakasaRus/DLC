<template>
<v-layout row wrap justify-center>
	<v-flex md6 xs12 v-for="question in questions" :key="id">
		<v-card>
			<v-card-title>{{ question.points }}</v-card-title>
			<v-card-text>{{ question.body }}</v-card-text>
			<v-card-actions>
				<v-text-field :name="'question_' + question.id" single-line></v-text-field>
			</v-card-actions>
		</v-card>
	</v-flex>
	<v-flex xs12>
		<v-btn fixed dark fab bottom right color="green">
			<v-icon>done_all</v-icon>
		</v-btn>
	</v-flex>
</v-layout>
</template>

<script>
	export default {
		data() {
			return {
				questions: [],
				answers: []
			};
		},

		created() {
			this.loadQuestions(this.$route.params.id);
		},

		methods: {
			loadQuestions(id) {
				window.axios.get('/api/user/tests/' + id)
							.then(response => this.questions = response.data.data)
							.catch(error => console.log(error));
			}
		}
	}
</script>