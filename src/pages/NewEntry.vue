<template>
  <div>
    <h1>New Entry</h1>
    <button @click="save">Save</button>
    <router-link tag="button" to="/entries">Cancel</router-link>
    <br/>
    <textarea rows="10" v-model="text" />
  </div>
</template>

<script>
import { emotions } from '@/modules/model.js'
import router from '@/router'

export default {
  name: 'NewEntry',
  data: ()=>({
    text: '',
  }),
  methods: {
    save() {
      emotions(this.text).then((emos)=>{
        this.$root.entries.push({
          date: new Date(),
          text: this.text,
          emotions: emos,
        })
        router.push('/entries')
      })
    }
  }
}
</script>

<style scoped>
textarea {
  width:100%;
  height:100%;
}
</style>
