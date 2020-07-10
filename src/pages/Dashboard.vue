<template>
  <div>
    <h1>Dashboard</h1>
    <router-link tag="button" to="/statistics">Statistics</router-link>
    <router-link tag="button" to="/entries">Entries</router-link>
    <router-link to="/settings">Settings</router-link>
  </div>
</template>

<script>
export default {
  name: 'Dashboard'
}
</script>
