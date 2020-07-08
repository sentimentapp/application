<template>
  <div id='body'>
    <h1>Capacitor Storage Reference Page</h1>
    <router-link to="/">Dashboard</router-link> 
    <br>
    <input type="text" v-model="entry">
    <button @click="updateEntries()">Add</button>
    <br>
    <p>{{ $root.entries }}</p>
    <br>
    <button @click="changeEntry()">Change Entry</button>
    <button @click="deleteEntry()">Delete Entry</button>
  </div>
</template>

<script>

export default {
  name: 'CapacitorStorage',
  data: () => ({
    entry: '',
  }),
  methods: {
    updateEntries () {
        this.$root.entries.push(this.entry)
    },
    changeEntry () {
        this.$set(this.$root.entries, 0, "joe")
        // this.$forceUpdate();
    },
    deleteEntry () {
        this.$root.entries.shift()
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
