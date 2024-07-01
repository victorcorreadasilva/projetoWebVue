import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/index'
import './style.css'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const toastOptions = {
  position: 'top-center',
  timeout: 2000,
}

createApp(App).use(router).use(pinia).use(Toast, toastOptions).mount('#app')