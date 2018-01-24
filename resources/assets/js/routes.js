import VueRouter from 'vue-router';

let routes = [
	{
		path: '/subjects',
		component: require('./views/Subjects/Index')
	},
	{
		path: '/subjects/:id',
		component: require('./views/Subjects/Show')
	},
	{
		path: '/tests',
		component: require('./views/Tests/Index')
	},
	{
		path: '/tests/:id',
		component: require('./views/Tests/Show')
	},
	{
		path: '/users',
		component: require('./views/Users/Index')
	}
];

export default new VueRouter({
	routes,
	//mode: 'history',
	linkActiveClass: '',
	linkExactActiveClass: 'is-active'
});