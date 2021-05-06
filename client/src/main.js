import { createApp } from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config';
import Button from 'primevue/button'
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext'

require('@/assets/style.css')

import 'primevue/resources/themes/vela-purple/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
const app = createApp(App)
app.use(router)
app.use(store)
app.use(PrimeVue)
app.component('Button', Button)
app.component('Dropdown', Dropdown)
app.component('InputText', InputText)


app.mount('#app')