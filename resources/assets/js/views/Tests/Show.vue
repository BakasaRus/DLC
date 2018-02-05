<template>
<v-layout row wrap justify-center v-if="Object.keys(test).length">
	<v-flex xs4 offset-xs4>
		<v-card>
			<v-card-title primary-title>
				<div class="headline">{{ test.name }}</div>
			</v-card-title>
			<v-card-text>
				<div class="body-2">ID: {{ test.id }}</div>
				<div class="body-2">Автор теста: {{ test.author.last_name }} {{ test.author.first_name }} {{ test.author.middle_name }}</div>
				<div class="body-2">Количество вопросов: {{ test.questions_count }}</div>
				<div class="body-2">Всего вопросов: {{ test.questions.length }}</div>
			</v-card-text>
		</v-card>
	</v-flex>
	<v-flex xs4>
		<v-card>
			<!-- Empty block (temporary) -->
		</v-card>
	</v-flex>
	<v-flex xs3 v-for="question in test.questions" :key="question.id">
		<v-card>
			<v-card-text>
				<p class="body-3" style="white-space: pre-wrap">{{ question.body }}</p>
				<div class="body-3">Ответ: {{ question.answer }} ({{ question.points }} баллов)</div>
			</v-card-text>
			<v-card-actions class="justify-end">
				<v-btn flat icon color="green" @click="toggleEditingQuestion(question)">
					<v-icon>edit</v-icon>
				</v-btn>
				<v-btn flat icon color="red" @click="deleteQuestion(question)">
					<v-icon>delete</v-icon>
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-flex>
	<v-dialog v-model="form.isVisible" max-width="500px">
		<v-card>
			<v-form v-model="form.isValid" ref="form">
			<v-card-title>
				<span class="headline">{{ formCaption }}</span>
			</v-card-title>
			<v-card-text>
				<v-text-field 
					label="Вопрос" 
					required
					multi-line
					hint="В будущем здесь будет поддержка Markdown"
					v-model="form.body" 
					:rules="[rules.required]"
				></v-text-field>
				<v-text-field 
					label="Ответ" 
					required
					hint="В будущем здесь будет поддержка регулярных выражений"
					v-model="form.answer" 
					:rules="[rules.required]"
				></v-text-field>
				<v-text-field 
					label="Баллы за вопрос" 
					required
					v-model="form.points" 
					:rules="[rules.required]"
					type="number"
				></v-text-field>
			</v-card-text>
			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn color="blue darken-1" flat @click="form.hide()">Закрыть</v-btn>
				<v-btn color="blue darken-1" flat @click="form.reset()">Сбросить</v-btn>
				<v-btn color="blue darken-1" flat @click="formAction" :disabled="!form.isValid">{{ formActionBtn }}</v-btn>
			</v-card-actions>
		</v-form>
		</v-card>
	</v-dialog>
	<v-btn fixed dark fab bottom right color="indigo" @click="toggleCreatingQuestion">
		<v-icon>add</v-icon>
	</v-btn>
</v-layout>
</template>

<script>
	export default {
		data: () => ({
			test: {},
			form: new window.Form({
				body: '',
				answer: '',
				points: 1,
				test_id: 0,
				id: 0
			}),
			loading: false,
			editing: false,
			rules: {
				required: (value) => !!value || 'Это поле обязательно для заполнения'
			},
		}),

		mounted() {
			// Это должно работать, но почему-то не
			this.form.ref = this.$refs.form;
		},

		created() {
			this.loadTest();
		},

		computed: {
			formCaption() {
				return this.editing ? 'Изменение вопроса' : 'Создание вопроса';
			},
			formActionBtn() {
				return this.editing ? 'Сохранить' : 'Добавить';
			}
		},

		methods: {
			isAuthor(subject) {
				return subject.author_id == this.$root.user.id;
			},

			loadTest() {
				window.axios.get('/api/tests/' + this.$route.params.id)
					.then(response => {
						this.test = response.data.data;
						this.form.test_id = this.test.id;
					})
					.catch(error => {
						console.log(error);
					});
			},

			formAction() {
				if (this.editing) this.updateQuestion();
				else this.createQuestion();
			},

			toggleCreatingQuestion() {
				this.form.ref = this.$refs.form;
				this.editing = false;
				this.form.reset();
				this.form.show();
			},

			toggleEditingQuestion(test) {
				this.form.ref = this.$refs.form;
				this.editing = true;
				this.form.setData(test);
				this.form.show();
			},

			createQuestion() {
				if (this.form.validate()) {
					window.axios.post('/api/questions', this.form.data())
						.then(response => {
							this.form.hide();
							this.form.reset();
							this.loadTest();
						})
						.catch(error => {
							console.log(error.data);
						});
				}
			},

			updateQuestion() {
				if (this.form.validate()) {
					window.axios.patch('/api/questions/' + this.form.id, this.form.data())
						.then(response => {
							this.loadTest();
							this.form.hide();
							this.form.reset();
						})
						.catch(error => {
							console.log(error.data);
						});
				}
			},

			deleteQuestion(question) {
				window.axios.delete('/api/questions/' + question.id)
					.then(response => {
						this.loadTest();
					})
					.catch(error => {
						console.log(error.data);
					});
			},
		}
	}
</script>