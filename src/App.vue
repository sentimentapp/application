<template>
  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
    <div id="content">
      <transition :name="transitionName" mode="out-in">
        <router-view/>
      </transition>
    </div>
    <menu-bar></menu-bar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return { transitionName: 'fade' }
  }
}
</script>

<style>

#app {
  font-family: Poppins, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -moz-osx-font-smoothing: grayscale;
}

/* Fade */
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 500ms ease;
}

.fade-leave-active {
  transition: opacity 500ms ease;
  opacity: 0;
}

</style>
