import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import emitter from 'tiny-emitter/instance'
import axios from 'axios'

const app = createApp(App);
app.config.globalProperties.$emitter = emitter;
app.config.globalProperties.axios = axios;

app.use(router);
app.mount('#app');
