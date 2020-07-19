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
  emojis: {
    'happy': '😃',
    'sad': '😔',
    'excited': '😠',
    'bored': '😒',
  },
}

// Imports animation componenets
import AOS from 'aos'
import 'aos/dist/aos.css'

// Initilzes the animation library
AOS.init()

// Uses a cordava plugin to lock the screen orientation
window.screen.orientation.lock('portrait')

// Checks to see if the data is loaded before sending the user to a page
router.beforeEach((to,_,next)=>{
  if (data.storageLoaded || to.path === '/loading') next()
  else router.replace({
    path: '/loading',
    query: { redirect:to.path }
  })
});

// Imports haptic plugin for global method
import { Plugins } from '@capacitor/core';
const { Haptics } = Plugins;

// Create Vue instance
new Vue({
  data,
  router,
  methods: {
    hapticsVibrate() {
      if (this.settings["Haptic Feedback"]) {
        Haptics.impact();
      }
    }
  },
  render: h => h(App),
}).$mount('#app')
