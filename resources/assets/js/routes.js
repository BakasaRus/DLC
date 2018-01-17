import VueRouter from 'vue-router';

let routes = [
	{
		path: '/subjects',
		component: require('./views/Subjects')
	},
	{
		path: '/tests',
		component: require('./views/Tests')
	}
];

export default new VueRouter({
	routes,
	//mode: 'history',
	linkActiveClass: '',
	linkExactActiveClass: 'is-active'
});