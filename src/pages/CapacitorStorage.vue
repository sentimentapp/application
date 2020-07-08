<template>
  <div id='body'>
    <h1>Temporary Capacitor Storage Workspace</h1>
    <router-link to="/">Dashboard</router-link> 
    <br>
    <input type="text" v-model="entry">
    <button @click="updateEntries()">Add</button>
    <br>
    <p>{{entries}}</p>
    <br>
    <button @click="changeEntry()">Change Entry</button>
    <button @click="deleteEntry()">Delete Entry</button>
  </div>
</template>

<script>

import { proxyToArray } from "@/components/capacitor_storage.js"

export default {
  name: 'CapacitorStorage',
  data: () => ({
    entry: '',
    entries: proxyToArray
  }),
  methods: {
    updateEntries () {
        proxyToArray.push(this.entry)
        this.entries = proxyToArray
    },
    changeEntry () {
        proxyToArray[0] = "joe"
        this.entries = proxyToArray
    },
    deleteEntry () {
        proxyToArray.shift()
        this.entries = proxyToArray
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#body {
  display: block;
}

</style>
