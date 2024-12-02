import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createVfm } from 'vue-final-modal'
import { createPinia } from 'pinia';
const vfm = createVfm()
const pinia = createPinia();


createApp(App).use(router).use(vfm).use(pinia).mount('#app');
