<template>
  <div id='body'>
    <h1>Storage</h1>
    <router-link to="/">Dashboard</router-link> 
    <br>
    <input type="text" v-model="entry">
    <button @click="addEntry">Save</button>
    <br>
    <ul id="example-1">
      <li v-for="entry in entries" :key="entry.key">
        {{ entry }}
      </li>
    </ul>
  </div>
</template>

<script>

import { Plugins } from "@capacitor/core"
const { Storage } = Plugins

export default {
  name: 'Storage',
  data: () => ({
    entry: '',
    entries: [],
  }),
  methods: {
    async addEntry () {
      this.entries.push(this.entry)

      var entriesJson = JSON.stringify(this.entries);

      await Storage.set({
        key: 'journal-entries',
        value: entriesJson
      })

      const entriesParsed = await Storage.get({ key: 'journal-entries' })
      this.entries = JSON.parse(entriesParsed.value)
      
    },
    async loadData () {
      const entriesParsed = await Storage.get({ key: 'journal-entries' })
      this.entries = JSON.parse(entriesParsed.value)
    }
  },
  mounted() {
    this.loadData()
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#body {
  display: block;
}

</style>
