require('./bootstrap');
import router from './routes';
import LoginView from './views/Login';
import LoadingView from './views/Loading';

Vue.component('example-component', require('./components/ExampleComponent.vue'));

new Vue({
	el: '#app',
	router,
	data: {
		auth: new window.Auth,
		drawer: null,
		user: {}
	},
	components: { LoginView, LoadingView },
	created() {
		window.axios.defaults.headers.common['Accept'] = 'application/json';
		window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.auth.tokens.access;

		window.moment.locale('ru');
		window.axios.get('/api/user')
			.then(response => this.user = response.data)
			.catch(error => console.log(error));
	},
	methods: {
		logout() {
			this.$root.auth.logout();
		}
	}
});
