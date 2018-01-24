<template>
	<div>
	<v-navigation-drawer clipped fixed v-model="drawer" app>
		<v-list dense>
			<v-list-tile @click="" to="/subjects">
				<v-list-tile-action>
					<v-icon>subject</v-icon>
				</v-list-tile-action>
				<v-list-tile-content>
					<v-list-tile-title>Предметы</v-list-tile-title>
				</v-list-tile-content>
			</v-list-tile>
			<v-list-tile @click="" to="/tests">
				<v-list-tile-action>
					<v-icon>device_hub</v-icon>
				</v-list-tile-action>
				<v-list-tile-content>
					<v-list-tile-title>Тесты</v-list-tile-title>
				</v-list-tile-content>
			</v-list-tile>
			<v-list-tile @click="" to="/users">
				<v-list-tile-action>
					<v-icon>group</v-icon>
				</v-list-tile-action>
				<v-list-tile-content>
					<v-list-tile-title>Пользователи</v-list-tile-title>
				</v-list-tile-content>
			</v-list-tile>
			<v-list-tile @click="logout">
				<v-list-tile-action>
					<v-icon>exit_to_app</v-icon>
				</v-list-tile-action>
				<v-list-tile-content>
					<v-list-tile-title>Выйти</v-list-tile-title>
				</v-list-tile-content>
			</v-list-tile>
		</v-list>
	</v-navigation-drawer>
	<v-toolbar app fixed clipped-left>
		<v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
		<v-toolbar-title>Центр дистанционного обучения</v-toolbar-title>
		<v-spacer></v-spacer>
		<v-toolbar-items class="hidden-sm-and-down">
			<v-btn flat>{{ this.$root.user.first_name }} {{ this.$root.user.last_name }}</v-btn>
		</v-toolbar-items>
	</v-toolbar>
	<v-content>
		<v-container fluid fill-height grid-list-xl>
			<!--<loading-view v-cloak></loading-view>-->
			<router-view v-cloak></router-view>
		</v-container>
	</v-content>
	</div>
</template>

<script>
	export default {
		data: () => ({
			drawer: null
		}),
		created() {
			window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$root.auth.tokens.access;
			window.axios.get('/api/user')
				.then(response => this.$root.user = response.data)
				.catch(error => console.log(error));
		},
		methods: {
			logout() {
				this.$root.auth.logout();
			}
		}
	}
</script>