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
			<v-card-actions>
				<v-tooltip bottom>
					<v-btn icon class="mx-0" @click="toggleEditingUser([])" slot="activator">
						<v-icon color="green">face</v-icon>
					</v-btn>
					<span>Статус пользователей</span>
				</v-tooltip>
			</v-card-actions>
		</v-card>
	</v-flex>
	<v-flex xs4>
		<v-card>
			<!-- Empty block (temporary) -->
		</v-card>
	</v-flex>
	<v-flex xs12>
		<v-data-table
			:headers="questionHeaders"
			:items="test.questions"
			hide-actions
			class="elevation-1"
			:loading="loading"
		>
			<template slot="items" slot-scope="props">
				<td>{{ props.item.id }}</td>
				<td>{{ props.item.body }}</td>
				<td>{{ props.item.answer }}</td>
				<td>{{ props.item.points }}</td>
				<td>
					<v-tooltip bottom>
						<v-btn icon class="mx-0" @click="toggleEditingQuestion(props.item)" slot="activator">
							<v-icon color="green">edit</v-icon>
						</v-btn>
						<span>Редактировать</span>
					</v-tooltip>
					<v-tooltip bottom>
						<v-btn icon class="mx-0" @click="deleteQuestion(props.item)" slot="activator">
							<v-icon color="red">delete</v-icon>
						</v-btn>
						<span>Удалить</span>
					</v-tooltip>
				</td>
			</template>
		</v-data-table>
	</v-flex>
	<v-flex xs12>
		<v-data-table
			:headers="usersHeaders"
			:items="test.users"
			hide-actions
			class="elevation-1"
			:loading="loading"
		>
			<template slot="items" slot-scope="props">
				<td>{{ props.item.id }}</td>
				<td>{{ props.item.full_name }}</td>
				<td>{{ props.item.test_info.status | readableStatus }}</td>
				<td>{{ props.item.test_info.points }}</td>
				<td>{{ props.item.test_info.max_points }}</td>
				<td>
					<v-tooltip bottom>
						<v-btn icon class="mx-0" @click="" slot="activator">
							<v-icon color="green">edit</v-icon>
						</v-btn>
						<span>Редактировать</span>
					</v-tooltip>
					<v-tooltip bottom>
						<v-btn icon class="mx-0" @click="deleteUser(props.item)" slot="activator">
							<v-icon color="red">delete</v-icon>
						</v-btn>
						<span>Удалить</span>
					</v-tooltip>
				</td>
			</template>
		</v-data-table>
	</v-flex>
	<v-dialog v-model="questionForm.isVisible" max-width="500px">
		<v-card>
			<v-form v-model="questionForm.isValid" ref="questionForm">
			<v-card-title>
				<span class="headline">{{ questionFormCaption }}</span>
			</v-card-title>
			<v-card-text>
				<v-text-field 
					label="Вопрос" 
					required
					multi-line
					hint="В будущем здесь будет поддержка Markdown"
					v-model="questionForm.body" 
					:rules="[rules.required]"
				></v-text-field>
				<v-text-field 
					label="Ответ" 
					required
					hint="В будущем здесь будет поддержка регулярных выражений"
					v-model="questionForm.answer" 
					:rules="[rules.required]"
				></v-text-field>
				<v-text-field 
					label="Баллы за вопрос" 
					required
					v-model="questionForm.points" 
					:rules="[rules.required]"
					type="number"
				></v-text-field>
			</v-card-text>
			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn color="blue darken-1" flat @click="questionForm.hide()">Закрыть</v-btn>
				<v-btn color="blue darken-1" flat @click="questionForm.reset()">Сбросить</v-btn>
				<v-btn color="blue darken-1" dark @click="questionFormAction" :disabled="!questionForm.isValid">{{ questionFormActionBtn }}</v-btn>
			</v-card-actions>
		</v-form>
		</v-card>
	</v-dialog>
	<v-dialog v-model="userForm.isVisible" max-width="800px">
		<v-card>
			<v-form v-model="userForm.isValid" ref="userForm">
			<v-card-title>
				<span class="headline">Добавить пользователей</span>
			</v-card-title>
			<v-card-text>
				<v-select
					label="Пользователи"
					autocomplete
					multiple
					required
					chips
					clearable
					deletable-chips
					dense
					:rules="[rules.required]"
					:items="users"
					item-value="id"
					item-text="full_name"
					v-model="userForm.users_id"
				></v-select>
			</v-card-text>
			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn color="blue darken-1" flat @click="userForm.hide()">Закрыть</v-btn>
				<v-btn color="blue darken-1" flat @click="userForm.reset()">Сбросить</v-btn>
				<v-btn color="blue darken-1" dark @click="addUsers" :disabled="!userForm.isValid">Добавить</v-btn>
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
			users: [],
			questionForm: new window.Form({
				body: '',
				answer: '',
				points: 1,
				test_id: 0,
				id: 0
			}),
			userForm: new window.Form({
				users_id: [],
				test_id: 0
			}),
			questionHeaders: [
				{ text: 'ID', value: 'id', align: 'left' },
				{ text: 'Вопрос', value: 'body', align: 'left' },
				{ text: 'Ответ', value: 'answer', align: 'left' },
				{ text: 'Баллы', value: 'points', align: 'left' },
				{ text: 'Действия', value: 'name', align: 'left', sortable: false },
			],
			usersHeaders: [
				{ text: 'ID', value: 'id', align: 'left' },
				{ text: 'ФИО', value: 'full_name', align: 'left' },
				{ text: 'Статус', value: 'test.status', align: 'left' },
				{ text: 'Количество баллов', value: 'test.points', align: 'left' },
				{ text: 'Максимальный балл', value: 'test.max_points', align: 'left' },
				{ text: 'Действия', value: 'name', align: 'left', sortable: false },
			],
			statuses: [
				{ id: 0, name: 'Доступен' },
				{ id: 1, name: 'В процессе' },
				{ id: 2, name: 'Пройден' },
				{ id: null, name: 'Скрыт' }
			],
			loading: false,
			editingQuesion: false,
			editingUsers: false,
			rules: {
				required: (value) => !!value || 'Это поле обязательно для заполнения'
			},
		}),

		mounted() {
			// Это должно работать, но почему-то не
			this.questionForm.ref = this.$refs.questionForm;
			this.userForm.ref = this.$refs.userForm;
		},

		created() {
			this.loadTest();
		},

		computed: {
			questionFormCaption() {
				return this.editingQuesion ? 'Изменение вопроса' : 'Создание вопроса';
			},
			questionFormActionBtn() {
				return this.editingQuesion ? 'Сохранить' : 'Добавить';
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
						this.questionForm.test_id = this.test.id;
						this.userForm.test_id = this.test.id;
					})
					.catch(error => {
						console.log(error);
					});
			},

			loadUsers() {
				window.axios.get('/api/users')
					.then(response => {
						this.users = response.data.data;
						this.loading = false;
					})
					.catch(error => {
						console.log("Can't load users' info, sorry :(");
						this.loading = false;
					});
			},

			questionFormAction() {
				if (this.editingQuesion) this.updateQuestion();
				else this.createQuestion();
			},

			toggleCreatingQuestion() {
				this.questionForm.ref = this.$refs.questionForm;
				this.editingQuesion = false;
				this.questionForm.reset();
				this.questionForm.show();
			},

			toggleEditingQuestion(test) {
				this.questionForm.ref = this.$refs.questionForm;
				this.editingQuesion = true;
				this.questionForm.setData(test);
				this.questionForm.show();
			},

			toggleCreatingUser() {
				this.userForm.ref = this.$refs.userForm;
				this.loadUsers();
				this.editingUsers = false;
				this.userForm.reset();
				this.userForm.show();
			},

			toggleEditingUser(users_id) {
				this.userForm.ref = this.$refs.userForm;
				this.loadUsers();
				this.editingUsers = true;
				this.userForm.setData({users_id: users_id, test_id: this.test.id});
				this.userForm.show();
			},

			addUsers() {
				if (this.userForm.validate()) {
					window.axios.post('/api/tests/' + this.test.id + '/users', this.userForm.data())
								.then(response => {
									this.loadTest();
								})
								.catch(error => {});
				}
			},

			deleteUser(user) {
				window.axios.delete('/api/tests/' + this.test.id + '/users/' + user.id)
							.then(response => {
								this.loadTest();
							})
							.catch(error => {});
			},

			createQuestion() {
				if (this.questionForm.validate()) {
					window.axios.post('/api/questions', this.questionForm.data())
						.then(response => {
							this.questionForm.hide();
							this.questionForm.reset();
							this.loadTest();
						}
)						.catch(error => {
							console.log(error.data);
						});
				}
				else {
					console.error("Can't send form :(");
				}
			},

			updateQuestion() {
				if (this.questionForm.validate()) {
					window.axios.patch('/api/questions/' + this.questionForm.id, this.questionForm.data())
						.then(response => {
							this.loadTest();
							this.questionForm.hide();
							this.questionForm.reset();
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
		},

		filters: {
			readableStatus(status) {
				switch (status) {
					case 0: return 'Доступен';
					case 1: return 'В процессе';
					case 2: return 'Пройден';
					case null: return 'Скрыт';
					default: return 'Неизвестный (' + status + ')';
				}
			}
		}
	}
</script>