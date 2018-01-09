<template>
	<div>
	<form @submit.prevent="logout" v-if="this.$root.auth.isLoggedIn()">
		<button type="submit">logout</button>
	</form>
	<form @submit.prevent="onSubmit" v-else>
		<input name="email" type="email" required placeholder="e-mail" v-model="email">
		<input name="password" type="password" required placeholder="password" v-model="password">
		<button type="submit">login</button>
	</form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				email: 'admin@dlc.dev',
				password: 'qwerty'
			}
		},

		created() {
			console.log(this.$root);
		},

		methods: {
			onSubmit() {
				this.$root.auth.postData.username = this.email;
				this.$root.auth.postData.password = this.password;
				this.$root.auth.login();
			},

			logout() {
				this.$root.auth.logout();
			}
		}
	}
</script>