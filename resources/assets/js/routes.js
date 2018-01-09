import VueRouter from 'vue-router';

let routes = [
	{
		path: '/',
		component: require('./views/Home')
	},

	{
		path: '/about',
		component: require('./views/About')
	}
];

export default new VueRouter({
	routes,
	linkActiveClass: '',
	linkExactActiveClass: 'is-active'
});