<template>
	<v-content>
	  <v-container fluid fill-height>
		<v-layout align-center justify-center>
		  <v-flex xs12 sm8 md4>
			<v-card class="elevation-12">
			  <v-toolbar color="primary">
				<v-toolbar-title>Вход в ЦДО</v-toolbar-title>
			  </v-toolbar>
			  <v-card-text>
				<v-form>
				  <v-text-field prepend-icon="person" name="login" label="Логин" type="text" v-model="email"></v-text-field>
				  <v-text-field prepend-icon="lock" name="password" label="Пароль" id="password" type="password" v-model="password"></v-text-field>
				</v-form>
			  </v-card-text>
			  <v-card-actions>
				<v-spacer></v-spacer>
				<v-btn color="primary" @click="onSubmit">Login</v-btn>
			  </v-card-actions>
			</v-card>
		  </v-flex>
		</v-layout>
	  </v-container>
	</v-content>
</template>

<script>
	export default {
		data() {
			return {
				email: 'bakasaru@list.ru',
				password: 'Sparta78'
			}
		},

		created() {
			//
		},

		methods: {
			onSubmit() {
				this.$root.auth.postData.username = this.email;
				this.$root.auth.postData.password = this.password;
				this.$root.auth.login()
					.then(message => this.$root.$router.push('/'))
					.catch(message => console.log(message));
			}
		}
	}
</script>