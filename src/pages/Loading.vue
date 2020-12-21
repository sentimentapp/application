<template>
  <Loader text='Loading Journal' />
</template>

<script>
import Loader from '@/components/Loader'
import router from '@/router'

import { loadStorage } from '@/modules/storage.js'
import { loadModel } from '@/modules/model/load_model.js'

export default {
  components: {Loader},
  created() {
    if(this.$root.storageLoaded && this.$root.modelLoaded) router.replace('/')
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
        router.replace(this.$route.query.redirect || '/')
      })

      // Confirms the model is loaded before moving to the homepage
      loadModel().then((model) => {
        this.$root.modelLoaded = true
        this.$root.model = model
        router.replace(this.$route.query.redirect || '/')
      })
    }
  }
}
</script>
