<template>
	<div>
		<ul>
			<li v-for="subject in subjects">{{ subject.name }}</li>
		</ul>
		<v-btn
			fixed
			dark
			fab
			bottom
			right
			color="indigo"
			@click.stop="addingDialog = true"
		>
			<v-icon>add</v-icon>
		</v-btn>
		<v-dialog v-model="addingDialog" max-width="500px">
			<v-card>
			 <v-card-text>
				<v-text-field label="Название предмета" v-model="subjectName" :rules="[rules.required]"></v-text-field>
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
			subjectName: 'Проектирование БД',
	        rules: {
	        	required: (value) => !!value || 'Required.'
	        }
		}),

		created() {
			window.axios.get('/api/subjects', {headers: this.$root.auth.headers()})
				.then(response => this.subjects = response.data)
				.catch(error => this.subjects = [{name: error.message}]);
		},

		methods: {
			createSubject() {
				window.axios.post('/api/subjects', {name: this.subjectName}, {headers: this.$root.auth.headers()})
					.then(response => console.log(response.data))
					.catch(error => console.log(error.data));
				this.addingDialog = false;
			}
		}
	}
</script>