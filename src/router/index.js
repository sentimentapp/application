import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/pages/Dashboard'
import Statistics from '@/pages/Statistics'

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
    }
  ]
})

export default router