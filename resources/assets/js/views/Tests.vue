<template>
	<div>
		<v-data-table
			v-bind:headers="headers"
			:items="tests"
			hide-actions
			class="elevation-1"
		>
			<template slot="items" slot-scope="props">
				<td>{{ props.item.id }}</td>
				<td class="text-xs-right">{{ props.item.name }}</td>
				<td class="text-xs-right">{{ props.item.author_id }}</td>
				<td class="text-xs-right">{{ props.item.subject_id }}</td>
				<td class="text-xs-right">{{ props.item.created_at | readable }}</td>
			</template>
		</v-data-table>
		<v-dialog v-model="addingDialog" max-width="500px">
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
				<v-card-title>
					<span class="headline">Новая заготовка для теста</span>
					<p class="body-2">Непосредственно вопросы можно будет добавить потом или импортировать в формате CSV</p>
				</v-card-title>
				<v-card-text>
					<v-text-field 
						label="Название теста" 
						hint="Название должно быть узнаваемым и запоминающимся"
						v-model="newTest.name" 
						:rules="[rules.required]"
						:counter="50"
					></v-text-field>
					<v-text-field 
						label="Количество вопросов" 
						hint="Если вопросов будет меньше, чем здесь указано, то тест не будет отображаться в любом случае. Если вопросов будет больше, то они будут выбираться случайным образом"
						v-model="newTest.questions_count" 
						:rules="[rules.required]"
						type="number"
					></v-text-field>
					<v-select
						label="Age"
						required
						:items="subjects"
						item-value="id"
						item-text="name"
						v-model="newTest.subject_id"
					></v-select>
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="blue darken-1" flat @click.native="addingDialog = false">Close</v-btn>
					<v-btn color="blue darken-1" flat @click.native="addingDialog = false">Save</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
	export default {
		data: () => ({
			tests: [],
			subjects: [],
			newTest: {
				name: '',
				subject_id: 1,
				questions_count: 0
			},
			addingDialog: false,
			rules: {
				required: (value) => !!value || 'Это поле обязательно для заполнения'
			},
			headers: [
				{ text: 'ID', value: 'id', align: 'left' },
				{ text: 'Предмет', value: 'name', align: 'left' },
				{ text: 'Автор', value: 'author_id', align: 'left' },
				{ text: 'Предмет', value: 'subject_id', align: 'left' },
				{ text: 'Дата создания', value: 'created_at', align: 'left' }
			]
		}),

		created() {
			window.axios.get('/api/tests', {headers: this.$root.auth.headers()})
				.then(response => this.tests = response.data)
				.catch(error => this.tests = [{name: error.message}]);
		},

		methods: {
			createSubject() {
				window.axios.post('/api/tests', {name: this.subjectName}, {headers: this.$root.auth.headers()})
					.then(response => {
						console.log(response.data);
						this.subjectName = '';
						this.addingDialog = false;
					})
					.catch(error => {
						console.log(error.data);
					});
			},

			loadSubjects() {
				window.axios.get('/api/subjects', {headers: this.$root.auth.headers()})
					.then(response => this.subjects = response.data)
					.catch(error => this.subjects = [{name: error.message}]);
			}
		},

		filters: {
			readable(date) {
				return moment(date).fromNow();
			}
		},

		computed: {
			subjectIDs() {
				return this.subjects.map(function(item) {
					return item.id;
				});
			}, 

			subjectNames() {
				return this.subjects.map(function(item) {
					return item.name;
				});
			}
		}
	}
</script>