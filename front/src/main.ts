import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import './components/styles/global.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
