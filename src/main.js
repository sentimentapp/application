import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Imports data initilzation function to be run at app start
import { dataInitialization } from "@/components/capacitor_storage.js"

// Initlizes data into cache
dataInitialization()

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
