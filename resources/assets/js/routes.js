import VueRouter from 'vue-router';

let routes = [
	{
		path: '/',
		component: require('./views/Main')
	}
];

export default new VueRouter({
	routes,
	//mode: 'history',
	linkActiveClass: '',
	linkExactActiveClass: 'is-active'
});