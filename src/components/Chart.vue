<template>
  <div>
    <svg viewBox="0 0 36 36" class="circular-chart">
        <path class="circle-bg"
        d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path class="circle"
        :stroke-dasharray="percentage + ', 100'"
        d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <text x="18" y="20" class="percent">{{ percentage + "%"}}</text>
    </svg>
  </div>
</template>

<script>

export default {
  name: 'Chart',
  props: ['percentage'],
}
</script>

<style scoped>
/* Chart */

.circular-chart {
  position: relative;
  width: 70%;
}

.circle-bg {
  fill: none;
  stroke: rgba(37, 40, 61, 0.1);
  stroke-width: 4;
}

.circle {
  fill: none;
  stroke-width: 4;
  stroke-linecap: round;
  animation: progress 1s ease-out forwards;
}

@keyframes progress {
  0% {
    stroke-dasharray: 0 100;
  }
}

.circular-chart .circle {
  stroke: #A8E7F4
}

.percent {
  fill: rgba(37, 40, 61, 0.25);;
  font-weight: bold;
  font-size: 0.3em;
  text-anchor: middle;
}
</style>
