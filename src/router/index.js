import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/pages/Dashboard'
import Statistics from '@/pages/Statistics'
import Storage from '@/pages/Storage'
import CapacitorStorage from '@/pages/CapacitorStorage'

Vue.use(Router)

const router = new Router({
  routes: [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/statistics',
        name: 'Statistics',
        component: Statistics
    },
    {
        path: '/storage',
        name: 'Storage',
        component: Storage
    },
    {
      path: '/capacitor-storage',
      name: 'CapacitorStorage',
      component: CapacitorStorage
  }
  ]
})

export default router