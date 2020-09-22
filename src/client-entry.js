import Vue from 'vue'
import App from './App.vue';
import './assets/style.css' // extract css

window.addEventListener('DOMContentLoaded', () => {
	new Vue({
		el: '#app',
		render: h => h(App)
	})
	
	document.querySelectorAll('noscript').forEach(e => {
		e.remove()
	})
})