import VueRouter from 'vue-router';

let routes = [
	{
		path: '/admin/subjects',
		component: require('./views/Subjects/Index')
	},
	{
		path: '/admin/subjects/:id',
		component: require('./views/Subjects/Show')
	},
	{
		path: '/admin/tests',
		component: require('./views/Tests/Index')
	},
	{
		path: '/admin/tests/:id',
		component: require('./views/Tests/Show')
	},
	{
		path: '/admin/users',
		component: require('./views/Users/Index')
	},
	{
		path: '/',
		component: require('./views/Dashboard')
	},
	{
		path: '/tests',
		component: require('./views/Tests/Available')
	},
	{
		path: '/tests/:id',
		component: require('./views/Tests/Pass')
	}
];

export default new VueRouter({
	routes,
	//mode: 'history',
	linkActiveClass: '',
	linkExactActiveClass: 'is-active'
});