<template>
<v-layout row wrap justify-center align-center>
	<v-flex xs12>
		<v-data-table
			:headers="headers"
			:items="tests"
			hide-actions
			class="elevation-1"
			:loading="loading"
		>
			<template slot="items" slot-scope="props">
				<td>{{ props.item.id }}</td>
				<td>{{ props.item.name }}</td>
				<td>{{ props.item.subject.name }}</td>
				<td>{{ props.item.created_at.date | readable }}</td>
				<td>
					<v-tooltip bottom>
						<v-btn icon class="mx-0" :disabled="!isAuthor(props.item)" @click="toggleEditingTest(props.item)" slot="activator">
							<v-icon color="green">edit</v-icon>
						</v-btn>
						<span>Редактировать</span>
					</v-tooltip>
					<v-tooltip bottom>
						<v-btn icon class="mx-0" :disabled="!isAuthor(props.item)" @click="deleteSubject(props.item)" slot="activator">
							<v-icon color="red">delete</v-icon>
						</v-btn>
						<span>Удалить</span>
					</v-tooltip>
					<v-tooltip bottom>
						<v-btn icon class="mx-0" :to="'/tests/' + props.item.id" slot="activator">
							<v-icon color="blue">chevron_right</v-icon>
						</v-btn>
						<span>Подробнее</span>
					</v-tooltip>
				</td>
			</template>
		</v-data-table>
	</v-flex>
	<v-flex xs12>
		<v-dialog v-model="form.isVisible" max-width="500px">
			<v-card>
				<v-form ref="form" v-model="form.isValid">
				<v-card-title>
					<span class="headline">{{ formCaption }}</span>
					<p class="body-2">Непосредственно вопросы можно будет добавить потом или импортировать в формате CSV</p>
				</v-card-title>
				<v-card-text>
					<v-text-field 
						label="Название теста" 
						required
						hint="Название должно быть узнаваемым и запоминающимся"
						v-model="form.name" 
						:rules="[rules.required]"
						:counter="50"
					></v-text-field>
					<v-text-field 
						label="Количество вопросов" 
						required
						hint="Если вопросов будет меньше, чем здесь указано, то тест не будет отображаться в любом случае. Если вопросов будет больше, то они будут выбираться случайным образом"
						v-model="form.questions_count" 
						:rules="[rules.required]"
						type="number"
					></v-text-field>
					<v-select
						label="Предмет, к которому относится тест"
						required
						:rules="[rules.required]"
						:items="subjects"
						item-value="id"
						item-text="name"
						v-model="form.subject_id"
					></v-select>
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
	</v-flex>
	<v-btn fixed dark fab bottom right color="indigo" @click="toggleCreatingTest">
		<v-icon>add</v-icon>
	</v-btn>
</v-layout>
</template>

<script>
	export default {
		data: () => ({
			tests: [],
			subjects: [],
			form: new window.Form({
				name: '',
				subject_id: 0,
				questions_count: '',
				id: 0
			}),
			loading: false,
			editing: false,
			rules: {
				required: (value) => !!value || 'Это поле обязательно для заполнения'
			},
			headers: [
				{ text: 'ID', value: 'id', align: 'left' },
				{ text: 'Название теста', value: 'name', align: 'left' },
				{ text: 'Предмет', value: 'subject.name', align: 'left' },
				{ text: 'Дата создания', value: 'created_at', align: 'left' },
				{ text: 'Действия', value: 'name', align: 'left', sortable: false },
			]
		}),

		mounted() {
			this.form.ref = this.$refs.form;
			this.loadTests();
		},

		computed: {
			formCaption() {
				return this.editing ? 'Изменение теста' : 'Создание теста';
			},
			formActionBtn() {
				return this.editing ? 'Сохранить' : 'Добавить';
			}
		},

		methods: {
			loadTests() {
				this.loading = true;
				window.axios.get('/api/tests')
					.then(response => {
						this.tests = response.data.data;
						this.loading = false;
					})
					.catch(error => {
						console.log(error);
						this.loading = false;
					});
			},

			createTest() {
				if (this.form.validate()) {
					window.axios.post('/api/tests', this.form.data())
						.then(response => {
							this.form.hide();
							this.form.reset();
							this.loadTests();
						})
						.catch(error => {
							console.log(error.data);
						});
				}
			},

			updateTest() {
				if (this.form.validate()) {
					window.axios.patch('/api/tests/' + this.form.id, this.form.data())
						.then(response => {
							this.loadTests();
							this.form.hide();
							this.form.reset();
						})
						.catch(error => {
							console.log(error.data);
						});
				}
			},

			formAction() {
				if (this.editing) this.updateTest();
				else this.createTest();
			},

			toggleCreatingTest() {
				this.loadSubjects();
				this.editing = false;
				this.form.reset();
				this.form.show();
			},

			toggleEditingTest(test) {
				this.loadSubjects();
				this.editing = true;
				this.form.setData(test);
				this.form.show();
			},

			loadSubjects() {
				window.axios.get('/api/subjects')
					.then(response => this.subjects = response.data.data)
					.catch(error => this.subjects = [{name: error.message}]);
			},

			isAuthor(subject) {
				return subject.author_id == this.$root.user.id;
			}
		},

		filters: {
			readable(date) {
				return moment(date).format('LLL');
			}
		}
	}
</script>