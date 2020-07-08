<template>
  <div>
    <h1>Dashboard</h1>
    <router-link to="/statistics">Statistics</router-link>
    <br>
    <router-link to="/storage">Storage</router-link>
    <br>
    <router-link to="/capacitor-storage">Temporary Workspace for Capacitor Storage</router-link>
  </div>
</template>

<script>

export default {
  name: 'Dashboard',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
