<template>
  <div id='body'>
    <h1>Reference Page for Capacitor Storage Function</h1>
    <router-link to="/">Back to Dashboard</router-link> 
    <br>
    <br>
    <input type="text" v-model="entry">
    <button @click="updateEntries()">Add</button>
    <br>
    <p>{{ $root.entries }}</p>
    <br>
    <button @click="changeEntry()">Change Entry</button>
    <button @click="deleteEntry()">Delete Entry</button>
    <br>
    <p>
        To reference the entries array simply call <strong>$root.entries</strong> as it is a global variable. 
        It can then be treated as a normal array. Check <strong>main.js</strong> to see how this is defined.
    </p>
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
