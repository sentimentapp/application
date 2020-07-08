<template>
  <div id='body'>
    <h1>Temporary Capacitor Storage Workspace</h1>
    <router-link to="/">Dashboard</router-link> 
    <br>
    <input type="text" v-model="entry">
    <button @click="updateEntries()">Add</button>
    <br>
    <p>{{ displayedEntries }}</p>
    <br>
    <button @click="changeEntry()">Change Entry</button>
    <button @click="deleteEntry()">Delete Entry</button>
  </div>
</template>

<script>

import { entries } from "@/components/capacitor_storage.js"

export default {
  name: 'CapacitorStorage',
  data: () => ({
    entry: '',
    displayedEntries: entries 
  }),
  methods: {
    updateEntries () {
        entries.push(this.entry)
    },
    changeEntry () {
        this.$set(entries, 0, "joe")
        // this.$forceUpdate();
    },
    deleteEntry () {
        entries.shift()
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
