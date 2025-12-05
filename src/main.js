import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/main.css';


const app = createApp(App);
app.use(router); // Using the router
app.mount('#app');

