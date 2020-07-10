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
    // dummy entry before indexed entry is loaded
    entry: {
      date: new Date(0),
      text: "Loading...",
      emotions: ["Loading..."],
    }
  }),
  created() {
    const i = this.$route.params.index;
    if(i in this.$root.entries){
      this.entry = this.$root.entries[i]
    }else{
      // when wrong index
      this.entry = {
        date: new Date(0),
        text: "No entry",
        emotions: ["N/A"],
      }
    }
  }
}
</script>
