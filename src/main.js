// import { createApp, reactive } from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import GStore from './store'
import 'nprogress/nprogress.css'
//create a reactive object
// const GStore = reactive({ flashMessage: '' })
// createApp(App).use(store).use(router).provide('GStore', GStore).mount('#app')

createApp(App)
.use(router)
.provide('GStore', GStore)
.mount('#app')
