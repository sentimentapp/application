import Vue from 'vue'
import App from '@/App'
import router from '@/router'

const data = {
  storageLoaded: false,
  entries: [],
  settings: {},
}

router.beforeEach((to,_,next)=>{
  if (data.storageLoaded || to.path === '/loading') next()
  else next('/loading')
});

new Vue({
  data,
  router,
  render: h => h(App),
}).$mount('#app')
