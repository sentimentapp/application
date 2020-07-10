<template>
  <div class="loader">
    <div class="spinner"></div>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "Loading..."
    }
  }
}
</script>

<style scoped>
.loader {
  text-align:center;
  margin:20px;
}
.spinner {
  margin: auto;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 8px solid transparent;
  border-top: 8px solid;
  border-left: 8px solid;
  animation: spin 2s ease-in-out infinite;
}
@keyframes spin {
  from { transform:rotate(-135deg) }
  to { transform:rotate(225deg) }
}
</style>
