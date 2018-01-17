import Vue from 'vue';
window.Vue = Vue;

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Vuetify from 'vuetify'
Vue.use(Vuetify)

import axios from 'axios';
window.axios = axios;

import moment from 'moment';
window.moment = moment;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}