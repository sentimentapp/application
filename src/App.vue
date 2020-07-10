<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html {
  --theme-bg: #DFD;
  --theme-fg: #131;
  --theme-ac: #5B5;
}
body { background:var(--theme-bg) }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
  color: var(--theme-fg);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
button {
  background: var(--theme-ac);
  color: var(--theme-bg);
  border: none;
  border-radius: 0.33em;
  padding: 0.33em;
  margin: 0.33em;
  cursor: pointer;
  font-weight: bold;
}
</style>
