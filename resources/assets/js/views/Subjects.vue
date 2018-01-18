<template>
	<div>
		<v-data-table
			v-bind:headers="headers"
			:items="subjects"
			hide-actions
			class="elevation-1"
			no-data-text="Пока что тут ничего нет."
			:loading="loading"
		>
			<template slot="items" slot-scope="props">
				<td>{{ props.item.id }}</td>
				<td class="text-xs-right">{{ props.item.name }}</td>
				<td class="text-xs-right">{{ props.item.author.first_name }} {{ props.item.author.last_name }}</td>
				<td class="text-xs-right">{{ props.item.created_at | readable }}</td>
				<td class="justify-center layout px-0">
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
				</td>
			</template>
		</v-data-table>
		<v-dialog v-model="creatingForm.isVisible" max-width="500px">
			<v-btn fixed dark fab bottom right color="indigo" slot="activator">
				<v-icon>add</v-icon>
			</v-btn>
			<v-card>
				<v-form v-model="creatingForm.isValid" ref="createForm">
				<v-card-title>
					<span class="headline">Новый предмет</span>
					<p class="body-2">Предметы помогают структурировать тесты</p>
				</v-card-title>
				<v-card-text>
					<v-text-field 
						label="Название предмета" 
						hint="Название должно быть узнаваемым и запоминающимся"
						v-model="creatingForm.name" 
						:rules="[rules.required]"
						:counter="50"
						></v-text-field>
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn flat color="primary" @click.native="createSubject()" :disabled="!creatingForm.isValid">Добавить</v-btn>
				</v-card-actions>
			</v-form>
			</v-card>
		</v-dialog>
		<v-dialog v-model="editingForm.isVisible" max-width="500px">
			<v-card>
				<v-form v-model="editingForm.isValid" ref="editForm">
				<v-card-title>
					<span class="headline">Редактировать предмет</span>
					<p class="body-2">Предметы помогают структурировать тесты</p>
				</v-card-title>
				<v-card-text>
					<v-text-field 
						label="Название предмета" 
						hint="Название должно быть узнаваемым и запоминающимся"
						v-model="editingForm.name" 
						:rules="[rules.required]"
						:counter="50"
						></v-text-field>
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn flat color="primary" @click.native="updateSubject()" :disabled="!editingForm.isValid">Обновить</v-btn>
				</v-card-actions>
			</v-form>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
	export default {
		data: () => ({
			subjects: [],
			creatingForm: new window.Form({
				name: ''
			}),
			editingForm: new window.Form({
				name: ''
			}),
			loading: false,
			rules: {
				required: (value) => !!value || 'Это поле обязательно для заполнения'
			},
			headers: [
				{ text: 'ID', value: 'id', align: 'left' },
				{ text: 'Предмет', value: 'name', align: 'left' },
				{ text: 'Создатель', value: 'author_id', align: 'left' },
				{ text: 'Дата создания', value: 'created_at', align: 'left' },
				{ text: 'Действия', value: 'name', sortable: false },
			]
		}),

		mounted() {
			this.creatingForm.ref = this.$refs.createForm;
			this.editingForm.ref = this.$refs.editForm;
			this.loadSubjects();
		},

		methods: {
			loadSubjects() {
				this.loading = true;
				window.axios.get('/api/subjects')
					.then(response => {
						this.subjects = response.data;
						this.loading = false;
					})
					.catch(error => {
						this.subjects = [{name: error.message}];
						this.loading = false;
					});
			},

			toggleEditingSubject(subject) {
				this.editingForm.name = subject.name;
				this.editingForm.id = subject.id;
				this.editingForm.show();
			},

			updateSubject() {
				window.axios.delete('/api/subjects/' + this.editingForm.id, this.editingForm.data())
					.then(response => {
						console.log(response.data);
						this.loadSubjects();
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
				window.axios.post('/api/subjects', this.creatingForm.data())
					.then(response => {
						this.creatingForm.hide();
						this.creatingForm.reset();
						this.loadSubjects();
					})
					.catch(error => {
						console.log(error.data);
					});
			},

			isAuthor(subject) {
				return subject.author_id == this.$root.user.id;
			}
		},

		filters: {
			readable(date) {
				return moment(date).fromNow();
			}
		}
	}
</script>