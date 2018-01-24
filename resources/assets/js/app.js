require('./bootstrap');
import router from './routes';
import LoginView from './views/Layouts/Login';
import LoadingView from './views/Layouts/Loading';
import MainView from './views/Layouts/App';

new Vue({
	el: '#app',
	router,
	data: {
		auth: new window.Auth,
		user: {}
	},
	components: { LoginView, LoadingView, MainView },
	created() {
		window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.auth.tokens.access;

		window.axios.get('/api/user')
			.then(response => this.user = response.data)
			.catch(error => console.log(error));
	},
	methods: {
		logout() {
			this.auth.logout();
		}
	}
});
