import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar estilos de Bootstrap
import 'bootstrap'; // Importar scripts de Bootstrap

//creo la app y le agrego el pinia y el router
createApp(App).use(createPinia).use(router).mount('#app')


