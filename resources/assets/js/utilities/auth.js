class Auth {
	constructor() {

		this.postData = {
			grant_type: 'password',
			client_id: '2',
			client_secret: '5IKQoE40ESJv7A2FzkxFfXrQCNXXpojGla37Fyfy',
			username: '',
			password: '',
			scope: ''
		};

		this.tokens = {
			access: '',
			refresh: ''
		};

		if (window.localStorage.getItem('dlc_tokens') != null)
		{
			this.tokens = JSON.parse(window.localStorage.getItem('dlc_tokens'));
		}
	}

	login() {
		window.axios.post('/oauth/token', this.postData)
			.then(response => {
				this.tokens.access = response.data.access_token;
				this.tokens.refresh = response.data.refresh_token;
				window.localStorage.setItem('dlc_tokens', JSON.stringify(this.tokens));
			})
			.catch(response => console.log(response));
	}

	logout() {
		window.localStorage.removeItem('dlc_tokens');
		this.tokens.access = '';
		this.tokens.refresh = '';
	}

	headers() {
		return {
			'Accept': 'application/json',
			'Authorization': 'Bearer ' + this.tokens.access
		};
	}

	isLoggedIn() {
		return this.tokens.access != "";
	}
}

export default Auth;