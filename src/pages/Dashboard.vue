<template>
  <div>
    <h1>Dashboard</h1>
    <router-link tag="button" to="/statistics">Statistics</router-link>
    <router-link tag="button" to="/entries">Entries</router-link>
    <br>
    <router-link to="/capacitor-storage">Reference Page for Capacitor Storage Function</router-link>
    <br>
    <router-link to="/settings">Settings</router-link>
  </div>
</template>

<script>
export default {
  name: 'Dashboard'
}
</script>
