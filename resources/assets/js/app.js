require('./bootstrap');
import router from './routes';
import Auth from './utilities/auth';

Vue.component('example-component', require('./components/ExampleComponent.vue'));

new Vue({
    el: '#app',
    router,
    data: {
    	auth: new Auth
    }
});
