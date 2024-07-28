import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import router from './router'
import 'flowbite'
import store from './store'

store.dispatch('fetchAccessToken');
store.dispatch('setaccessToken');

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
