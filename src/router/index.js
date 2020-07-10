import Vue from 'vue'
import Router from 'vue-router'

import Loading from '@/pages/Loading'
import Dashboard from '@/pages/Dashboard'
import Statistics from '@/pages/Statistics'
import Entries from '@/pages/Entries'
import NewEntry from '@/pages/NewEntry'
import ViewEntry from '@/pages/ViewEntry'
import Settings from '@/pages/Settings'

Vue.use(Router)

const router = new Router({
  routes: [
    {
        path: '/loading',
        name: 'Loading',
        component: Loading
    },
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
        path: '/entries',
        name: 'Entries',
        component: Entries
    },
    {
      path: '/entries/new',
      name: 'NewEntry',
      component: NewEntry
    },
    {
      path: '/entries/:index',
      name: 'ViewEntry',
      component: ViewEntry
    },
    {
    path: '/settings',
    name: 'Settings',
    component: Settings
    }
  ]
})

export default router