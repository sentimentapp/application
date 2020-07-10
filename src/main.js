import Vue from 'vue'
import App from '@/App'
import router from '@/router'

// Stores the data
const data = {
  storageLoaded: false,
  entries: [],
  settings: {},
}

// Imports custom styles
import '@/styles/styles.css'

Vue.config.productionTip = false

// Checks to see if the data is loaded before sending the user to a page
router.beforeEach((to,_,next)=>{
  if (data.storageLoaded || to.path === '/loading') next()
  else next('/loading')
});


new Vue({
  data,
  router,
  render: h => h(App),
}).$mount('#app')
