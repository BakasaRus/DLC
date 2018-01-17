<template>
	<div>
		<v-data-table
			v-bind:headers="headers"
			:items="subjects"
			hide-actions
			class="elevation-1"
		>
			<template slot="items" slot-scope="props">
				<td>{{ props.item.id }}</td>
				<td class="text-xs-right">{{ props.item.name }}</td>
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
			>
				<v-icon>add</v-icon>
			</v-btn>
			<v-card>
				<v-card-title>
					<span class="headline">Новый предмет</span>
				</v-card-title>
				<v-card-text>
					<v-text-field 
						label="Название предмета" 
						hint="Название должно быть узнаваемым и запоминающимся"
						v-model="subjectName" 
						:rules="[rules.required]"
						:counter="50"
						></v-text-field>
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn flat color="primary" @click.native="createSubject()">Submit</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
	export default {
		data: () => ({
			subjects: [],
			addingDialog: false,
			subjectName: '',
			rules: {
				required: (value) => !!value || 'Это поле обязательно для заполнения'
			},
			headers: [
				{ text: 'ID', value: 'id', align: 'left' },
				{ text: 'Предмет', value: 'name', align: 'left' },
				{ text: 'Дата создания', value: 'created_at', align: 'left' }
			]
		}),

		created() {
			window.axios.get('/api/subjects', {headers: this.$root.auth.headers()})
				.then(response => this.subjects = response.data)
				.catch(error => this.subjects = [{name: error.message}]);
		},

		methods: {
			createSubject() {
				window.axios.post('/api/subjects', {name: this.subjectName}, {headers: this.$root.auth.headers()})
					.then(response => {
						console.log(response.data);
						this.subjectName = '';
						this.addingDialog = false;
						window.axios.get('/api/subjects', {headers: this.$root.auth.headers()})
							.then(response => this.subjects = response.data)
							.catch(error => this.subjects = [{name: error.message}]);
					})
					.catch(error => {
						console.log(error.data);
					});
			}
		},

		filters: {
			readable(date) {
				return moment(date).fromNow();
			}
		}
	}
</script>