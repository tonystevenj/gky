import { createApp } from 'vue'
import App from './App.vue'
import BaseCard from "./components/BaseCard.vue"
import BaseBox from "./components/BaseBox.vue"
const app =
    createApp(App)
app.component("base-card", BaseCard)
app.component("base-box", BaseBox)
app.mount('#app')
