require('./bootstrap');
import router from './routes';
import Auth from './utilities/auth';
import LoginView from './views/Login';

Vue.component('example-component', require('./components/ExampleComponent.vue'));

new Vue({
	el: '#app',
	router,
	data: {
		auth: new Auth,
		drawer: null,
		user: {}
	},
	components: { LoginView },
	created() {
		window.moment.locale('ru');
		window.axios.get('/api/user', {headers: this.$root.auth.headers()})
			.then(response => this.user = response.data)
			.catch(error => console.log(error));
	},
	methods: {
		logout() {
			this.$root.auth.logout();
		}
	}
});
