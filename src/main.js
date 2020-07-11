import Vue from 'vue'
import App from '@/App'
import router from '@/router'

// Imports custom styles
import '@/styles/styles.css'
import '@fortawesome/fontawesome-free/css/all.css'

// Makes the menubar global
import MenuBar from '@/components/MenuBar.vue'
Vue.component('menu-bar', MenuBar)

Vue.config.productionTip = false

// Stores the data
const data = {
  storageLoaded: false,
  entries: [],
  settings: {},
}

// Checks to see if the data is loaded before sending the user to a page
router.beforeEach((to,_,next)=>{
  if (data.storageLoaded || to.path === '/loading') next()
  else next('/loading')
});

// Create Vue instance
new Vue({
  data,
  router,
  render: h => h(App),
}).$mount('#app')
