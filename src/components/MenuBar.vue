<template>
    <div>
        <div id="image">
            <img src="@/assets/Menu.svg" alt="Kiwi standing on oval">
        </div>
    </div>
</template>

<script>
export default {
  name: 'MenuBar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#menubar {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 35vw;
}

img {
    width: 100%;
}

</style>
