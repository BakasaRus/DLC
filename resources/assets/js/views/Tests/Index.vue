<template>
<v-layout row wrap justify-center align-center>
	<v-flex xs12>
		<v-data-table
			v-bind:headers="headers"
			:items="tests"
			hide-actions
			class="elevation-1"
			:loading="loading"
		>
			<template slot="items" slot-scope="props">
				<td>{{ props.item.id }}</td>
				<td>{{ props.item.name }}</td>
				<td>{{ props.item.author.first_name }} {{ props.item.author.last_name }}</td>
				<td>{{ props.item.subject.name }}</td>
				<td>{{ props.item.created_at | readable }}</td>
				<td>
					<v-tooltip bottom>
						<v-btn icon class="mx-0" :disabled="!isAuthor(props.item)" @click="toggleEditingSubject(props.item)" slot="activator">
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
							<v-icon color="blue">keyboard_arrow_right</v-icon>
						</v-btn>
						<span>Подробнее</span>
					</v-tooltip>
				</td>
			</template>
		</v-data-table>
		<v-dialog v-model="creatingForm.isVisible" max-width="500px">
			<v-btn
				fixed
				dark
				fab
				bottom
				right
				color="indigo"
				slot="activator"
				@click="loadSubjects"
			>
				<v-icon>add</v-icon>
			</v-btn>
			<v-card>
				<v-form ref="createForm" v-model="creatingForm.isValid">
				<v-card-title>
					<span class="headline">Новая заготовка для теста</span>
					<p class="body-2">Непосредственно вопросы можно будет добавить потом или импортировать в формате CSV</p>
				</v-card-title>
				<v-card-text>
					<v-text-field 
						label="Название теста" 
						required
						hint="Название должно быть узнаваемым и запоминающимся"
						v-model="creatingForm.name" 
						:rules="[rules.required]"
						:counter="50"
					></v-text-field>
					<v-text-field 
						label="Количество вопросов" 
						required
						hint="Если вопросов будет меньше, чем здесь указано, то тест не будет отображаться в любом случае. Если вопросов будет больше, то они будут выбираться случайным образом"
						v-model="creatingForm.questions_count" 
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
						v-model="creatingForm.subject_id"
					></v-select>
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="blue darken-1" flat @click="creatingForm.hide()">Закрыть</v-btn>
					<v-btn color="blue darken-1" flat @click="creatingForm.reset()">Сбросить</v-btn>
					<v-btn color="blue darken-1" flat @click="createTest" :disabled="!creatingForm.isValid">Создать</v-btn>
				</v-card-actions>
			</v-form>
			</v-card>
		</v-dialog>
	</v-flex>
</v-layout>
</template>

<script>
	export default {
		data: () => ({
			tests: [],
			subjects: [],
			creatingForm: new window.Form({
				name: '',
				subject_id: 0,
				questions_count: ''
			}),
			loading: false,
			rules: {
				required: (value) => !!value || 'Это поле обязательно для заполнения'
			},
			headers: [
				{ text: 'ID', value: 'id', align: 'left' },
				{ text: 'Название теста', value: 'name', align: 'left' },
				{ text: 'Автор', value: 'author_id', align: 'left' },
				{ text: 'Предмет', value: 'subject.name', align: 'left' },
				{ text: 'Дата создания', value: 'created_at', align: 'left' },
				{ text: 'Действия', value: 'name', align: 'left', sortable: false },
			]
		}),

		mounted() {
			this.creatingForm.ref = this.$refs.createForm;
			this.loadTests();
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
				if (this.creatingForm.validate()) {
					window.axios.post('/api/tests', this.creatingForm.data())
						.then(response => {
							this.creatingForm.hide();
							this.creatingForm.reset();
							this.loadTests();
						})
						.catch(error => {
							console.log(error.data);
						});
				}
			},

			loadSubjects() {
				window.axios.get('/api/subjects')
					.then(response => this.subjects = response.data.data)
					.catch(error => this.subjects = [{name: error.message}]);
			},

			isAuthor(subject) {
				return subject.author.id == this.$root.user.id;
			}
		},

		filters: {
			readable(date) {
				return moment(date).format('LLL');
			}
		}
	}
</script>