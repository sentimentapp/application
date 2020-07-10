<template>
  <div>
    <h1>View Entry</h1>
    <router-link tag="button" to="/entries">Entries</router-link>
    <h3>{{ entry.date.toDateString() }}</h3>
    <p>{{ entry.text }}</p>
  </div>
</template>

<script>
export default {
  name: 'ViewEntry',
  data: ()=>({
    // dummy entry
    entry: {
      date: "Loading...",
      text: "Loading...",
      emotions: ["Loading..."],
    }
  }),
  created() {
    this.entry = this.$root.entries[this.$route.params.index]
  }
}
</script>

<style scoped>

</style>
