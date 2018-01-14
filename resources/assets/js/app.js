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
		dialog: false,
		drawer: null
	},
	components: { LoginView },
	created() {
		//
	},
	methods: {
		logout() {
			this.$root.auth.logout();
		}
	}
});
