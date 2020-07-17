<template>
  <div class="loading has-text-centered">
    <div class="circle"></div>
    <p class="has-text-weight-bold">{{ text }}</p>
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

.circle {
  margin: 10px;
	background: linear-gradient(230.18deg, #AFECE7 -9.03%, #AFCFEC 109.96%);
	box-shadow: 0 0 0 0 #afe0ec;
	animation: pulse 3s infinite;
  border-radius: 50%;
  width: 5vw;
  height: 5vw;
  margin: auto;
  margin-bottom: 32px
}

@keyframes pulse {
	0% {
		transform: scale(0.75);
		box-shadow: 0 0 0 0 rgba(52, 172, 224, 0.7);
	}
	
	70% {
		transform: scale(1);
		box-shadow: 0 0 0 20px rgba(52, 172, 224, 0);
	}
	
	100% {
		transform: scale(0.75);
		box-shadow: 0 0 0 0 rgba(52, 172, 224, 0);
	}
}

.loading {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}


</style>
