import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'

import {createWebHistory,createRouter} from 'vue-router';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Kurang_bayar from './components/Kurang_bayar.vue';
import Histori from './components/Histori.vue';

const router = createRouter({
	history : createWebHistory(),
	routes : [
		{path: '/', name: "Home", component : Home},
		{path: '/login', name: "Login", component : Login},
		{path: '/kurang_bayar', name: "Kurang_bayar", component : Kurang_bayar},
		{path: '/histori', name: "Histori", component : Histori},
	],
	base : '/'
});

var app=createApp(App)
app.use(router)
app.config.globalProperties.axios = axios
app.mount('#app');
