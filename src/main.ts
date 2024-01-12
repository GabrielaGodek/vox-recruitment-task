import { createApp } from 'vue'
import './styles/css/style.css'
import App from './App.vue'
import VueDragDrop from 'vue-drag-drop';


const app = createApp(App)
app.use(VueDragDrop)
app.mount('#app')
