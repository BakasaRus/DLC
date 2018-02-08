<template>
<v-layout row wrap justify-center align-center>
	<v-flex xs12>
		<v-data-table
			v-bind:headers="headers"
			:items="subjects"
			hide-actions
			class="elevation-1"
			no-data-text="Пока что тут ничего нет."
			:loading="loading"
			expand
		>
			<template slot="items" slot-scope="props">
				<tr>
					<td>{{ props.item.id }}</td>
					<td>{{ props.item.name }}</td>
					<td>{{ props.item.author.full_name }}</td>
					<td>{{ props.item.created_at.date | readable }}</td>
					<td>
						<v-tooltip bottom>
							<v-btn icon class="mx-0" @click="toggleEditingSubject(props.item)" slot="activator">
								<v-icon color="green">edit</v-icon>
							</v-btn>
							<span>Редактировать</span>
						</v-tooltip>
						<v-tooltip bottom>
							<v-btn icon class="mx-0" @click="deleteSubject(props.item)" slot="activator">
								<v-icon color="red">delete</v-icon>
							</v-btn>
							<span>Удалить</span>
						</v-tooltip>
						<v-tooltip bottom>
							<v-btn icon class="mx-0" :disabled="true" slot="activator">
								<v-icon color="blue">expand_more</v-icon>
							</v-btn>
							<span>Подробнее (оставлено на будущее, вдруг пригодится)</span>
						</v-tooltip>
					</td>
				</tr>
			</template>
		</v-data-table>
		<v-dialog v-model="form.isVisible" max-width="500px">
			<v-card>
				<v-form v-model="form.isValid" ref="form">
				<v-card-title>
					<span class="headline">{{ formCaption }}</span>
					<p class="body-2">Предметы помогают структурировать тесты</p>
				</v-card-title>
				<v-card-text>
					<v-text-field 
						label="Название предмета" 
						hint="Название должно быть узнаваемым и запоминающимся"
						v-model="form.name" 
						:rules="[rules.required]"
						:counter="50"
						></v-text-field>
						<v-select
							label="Куратор предмета"
							required
							hint="Куратор нужен исключительно для красоты. Может быть, в будущем куратор будет иметь административные полномочия в курируемых предметах"
							:rules="[rules.required]"
							:items="users"
							item-value="id"
							item-text="full_name"
							v-model="form.author_id"
						></v-select>
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn flat color="primary" @click.native="formAction" :disabled="!form.isValid">{{ formActionBtn }}</v-btn>
				</v-card-actions>
			</v-form>
			</v-card>
		</v-dialog>
	</v-flex>
	<v-btn fixed dark fab bottom right color="indigo" @click="toggleCreatingSubject">
		<v-icon>add</v-icon>
	</v-btn>
</v-layout>
</template>

<script>
	export default {
		data: () => ({
			subjects: [],
			users: [],
			form: {},
			editing: false,
			loading: false,
			rules: {
				required: (value) => !!value || 'Это поле обязательно для заполнения'
			},
			headers: [
				{ text: 'ID', value: 'id', align: 'left' },
				{ text: 'Предмет', value: 'name', align: 'left' },
				{ text: 'Куратор курса', value: 'author_id', align: 'left' },
				{ text: 'Дата создания', value: 'created_at.date', align: 'left' },
				{ text: 'Действия', value: 'name', align: 'left', sortable: false },
			]
		}),

		mounted() {
			this.form = new window.Form({
				id: 0,
				name: '',
				author_id: this.$root.user.id
			});
			this.form.ref = this.$refs.form;
			this.loadSubjects();
		},

		computed: {
			formCaption() {
				return this.editing ? 'Изменение предмета' : 'Создание предмета';
			},

			formActionBtn() {
				return this.editing ? 'Сохранить' : 'Добавить';
			}
		},

		methods: {
			loadSubjects() {
				this.loading = true;
				window.axios.get('/api/subjects')
					.then(response => {
						this.subjects = response.data.data;
						this.loading = false;
					})
					.catch(error => {
						this.subjects = [{name: error.message}];
						this.loading = false;
					});
			},

			loadUsers() {
				window.axios.get('/api/users', {params: {role: [1, 2]}})
					.then(response => {
						this.users = response.data.data;
						this.loading = false;
					})
					.catch(error => {
						this.users = [{login: error.message}];
						this.loading = false;
					});
			},

			formAction() {
				if (this.editing) this.updateSubject();
				else this.createSubject();
			},

			toggleEditingSubject(subject) {
				this.loadUsers();
				this.form.setData(subject);
				this.editing = true;
				this.form.show();
			},

			toggleCreatingSubject() {
				this.loadUsers();
				this.form.reset();
				this.editing = false;
				this.form.show();
			},

			updateSubject() {
				window.axios.patch('/api/subjects/' + this.form.id, this.form.data())
					.then(response => {
						console.log(response.data);
						this.loadSubjects();
						this.form.hide();
					})
					.catch(error => {
						console.log(error.data);
					});
			},

			deleteSubject(subject) {
				window.axios.delete('/api/subjects/' + subject.id)
					.then(response => {
						console.log(response.data);
						this.loadSubjects();
					})
					.catch(error => {
						console.log(error.data);
					});
			},

			createSubject() {
				window.axios.post('/api/subjects', this.form.data())
					.then(response => {
						this.form.hide();
						this.form.reset();
						this.loadSubjects();
					})
					.catch(error => {
						console.log(error.data);
					});
			}
		},

		filters: {
			readable(date) {
				return moment(date).format('LLL');
			}
		}
	}
</script>