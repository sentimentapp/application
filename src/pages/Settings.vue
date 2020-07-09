<template>
  <div>
    <h1 class="is-size-2 has-text-gradient has-text-weight-bold">Settings</h1>
    <router-link to="/">Dashboard</router-link>
    <menu-bar id="menubar"></menu-bar>
  </div>
</template>

<script>

// Imports the MenuBar
import MenuBar from '@/components/MenuBar.vue'

export default {
  name: 'Settings',
  components: { MenuBar }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
