import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Imports data initilzation function to be run at app start
import { dataInitialization } from "@/components/capacitor_storage.js"


Vue.config.productionTip = false

// Waits for the dataIntialization promise to return
dataInitialization().then(result =>{
  // If a value is gotten, load the application
  if(result){
    new Vue({
      router,
      render: h => h(App),
    }).$mount('#app')
  }
})