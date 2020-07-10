<template>
  <Loader text='Loading journal...' />
</template>

<script>
import Loader from '@/components/Loader'
import router from '@/router'

import { loadStorage } from '@/modules/storage.js'

export default {
  components: {Loader},
  created() {
    if(this.$root.storageLoaded) router.replace('/')
    else {
      loadStorage().then((storage)=>{
        // Storage hath been loaded
        this.$root.storageLoaded = true
        // Convert entries' dates
        storage.entries.forEach((entry)=>{
          entry.date = new Date(entry.date)
        })
        // Put accessors in Vue instance
        Object.assign(this.$root, storage)
        // Go to dashboard
        router.replace('/')
      })
    }
  }
}
</script>
