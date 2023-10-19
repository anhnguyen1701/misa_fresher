import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import emitter from 'tiny-emitter/instance'
const app = createApp(App);
app.config.globalProperties.$emitter = emitter;

app.use(router);
app.mount('#app');
