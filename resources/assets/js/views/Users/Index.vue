<template>
<v-layout row wrap justify-center align-center>
	<v-flex xs12>
		<v-data-table
			:headers="headers"
			:items="users"
			hide-actions
			class="elevation-1"
			:loading="loading"
		>
			<template slot="items" slot-scope="props">
				<td>{{ props.item.id }}</td>
				<td>{{ props.item.login }}</td>
				<td>{{ props.item.last_name }}</td>
				<td>{{ props.item.first_name }}</td>
				<td>{{ props.item.middle_name }}</td>
				<td>{{ props.item.role | stringRole }}</td>
				<td>{{ props.item.registration_date.date | readable }}</td>
			</template>
		</v-data-table>
	</v-flex>
</v-layout>
</template>

<script>
	export default {
		data: () => ({
			users: [],
			loading: false,
			headers: [
				{ text: 'ID', value: 'id', align: 'left' },
				{ text: 'Логин', value: 'login', align: 'left' },
				{ text: 'Фамилия', value: 'last_name', align: 'left' },
				{ text: 'Имя', value: 'first_name', align: 'left' },
				{ text: 'Отчество', value: 'middle_name', align: 'left' },
				{ text: 'Роль', value: 'role', align: 'left' },
				{ text: 'Дата регистрации', value: 'registration_date.date', align: 'left' }
			]
		}),

		mounted() {
			this.loadUsers();
		},

		methods: {
			loadUsers() {
				this.loading = true;
				window.axios.get('/api/users')
					.then(response => {
						this.users = response.data.data;
						this.loading = false;
					})
					.catch(error => {
						console.log(error);
						this.loading = false;
					});
			}
		},

		filters: {
			readable(date) {
				return moment(date).format('LLL');
			},

			stringRole(role) {
				switch (role) {
					case 2: return 'Администратор';
					case 1: return 'Преподаватель';
					default: return 'Пользователь';
				}
			}
		}
	}
</script>