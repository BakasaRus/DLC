class Auth {
	constructor() {

		this.postData = {
			grant_type: 'password',
			client_id: '2',
			client_secret: 'CTxlPhHYjxJD3l2I03ozyzRTn8vcRlIzjHY9VQ6l',
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
		return new Promise((resolve, reject) => { 
			window.axios.post('/oauth/token', this.postData)
			.then(response => {
				this.tokens.access = response.data.access_token;
				this.tokens.refresh = response.data.refresh_token;
				window.localStorage.setItem('dlc_tokens', JSON.stringify(this.tokens));
				resolve('Success!');
			})
			.catch(response => reject(response));
		});
	}

	logout() {
		return new Promise((resolve, reject) => { 
			window.axios.get('/api/logout')
			.then(response => {
				window.localStorage.removeItem('dlc_tokens');
				this.tokens.access = '';
				this.tokens.refresh = '';
				resolve(response);
			})
			.catch(response => reject(response));
		});
	}

	isLoggedIn() {
		return this.tokens.access != "";
	}
}

export default Auth;