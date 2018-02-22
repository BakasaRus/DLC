<template>
<v-layout row wrap justify-center>
	<v-flex md6 xs12 v-for="question in questions" :key="question.id">
		<v-card>
			<v-card-title>{{ question.points }}</v-card-title>
			<v-card-text>{{ question.body }}</v-card-text>
			<v-card-actions>
				<v-text-field :name="'question_' + question.id" single-line v-model:value="answers[question.id].answer"></v-text-field>
			</v-card-actions>
		</v-card>
	</v-flex>
	<v-flex xs12>
		<v-btn fixed dark fab bottom right color="green" @click="this.sendAnswers">
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
				answers: {}
			};
		},

		created() {
			this.loadQuestions();
		},

		methods: {
			loadQuestions() {
				window.axios.get('/api/user/tests/' + this.$route.params.id)
							.then(response => {
								this.questions = response.data.data;
								for (var i in this.questions) {
									this.answers[this.questions[i].id] = {
										'answer': '', 
										'id': this.questions[i].id
									};
								}
							})
							.catch(error => console.log(error));
			},

			sendAnswers() {
				console.log(this.answers);
				window.axios.post('/api/user/tests/' + this.$route.params.id, {'answers': this.answers})
							.then(response => {
								console.log(response.data);
							})
							.catch(error => console.log(error));
			}
		}
	}
</script>