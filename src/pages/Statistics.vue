<template>
  <div>
    <div class="floater">
      <div id="header">
        <h1 class="is-size-2 has-text-weight-bold has-text-dark has-text-left">Statistics</h1>
        <svg width="129" height="221" viewBox="0 0 129 221" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0)">
            <path d="M-21.2805 132.226C-25.0287 129.118 -27.1575 124.472 -27.0644 119.604L-26.4514 87.5501C-26.3583 82.6817 -24.0534 78.1208 -20.1891 75.1582L5.25368 55.6523C9.11793 52.6898 14.1209 51.6481 18.8465 52.8221L49.9601 60.5524C54.6857 61.7265 58.6194 64.9885 60.6478 69.4151L74.0031 98.5605C76.0315 102.987 75.9338 108.096 73.7376 112.442L59.2777 141.056C57.0816 145.401 53.026 148.511 48.259 149.503L16.8725 156.038C12.1056 157.031 7.14605 155.799 3.3979 152.69L-21.2805 132.226Z" fill="url(#paint0_linear)"/>
          </g>
          <defs>
            <linearGradient id="paint0_linear" x1="22.4914" y1="160.109" x2="28.1064" y2="62.7594" gradientUnits="userSpaceOnUse">
              <stop stop-color="#AFECE7"/>
              <stop offset="0.453125" stop-color="#AFDFE9"/>
              <stop offset="1" stop-color="#AFCFEC"/>
            </linearGradient>
            <clipPath id="clip0">
              <rect width="129" height="221" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
    <div class="section">
      <label class="switch">
        <p id="week" :class="{'has-text-dark': !month}">Week</p>
        <p id="month" :class="{'has-text-dark': month}">Month</p>
        <input type="checkbox" v-model="month" @click="$root.hapticsVibrate();">
        <span class="slider round"></span>
      </label>
      <div class="stats card columns is-mobile" data-aos="fade-up" data-aos-duration="1000"  v-if='$root.entries.length != 0'>
        <div v-for="emotion in weeklyPercentage" :key="emotion">
          <chart :percentage=convertToPercentage(emotion) />
          <p class="label">{{ emotion.charAt(0).toUpperCase() + emotion.slice(1) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { statistics } from '@/modules/statistics.js'
import Chart from '@/components/Chart'

export default {
  name: 'Statistics',
  components: { Chart },
  data: () => ({
    month: false,
    colors: [
      "color: #AFECE7",
      "color: #A8E7F4",
      "color: #AFCFEC"
    ],
    positiveEmotions: [
      'joy',
      'love'
    ]
  }),
  computed: {
    timeFrame() {
      if (this.month) {
        return 'month'
      } else {
        return 'week'
      }
    },
    weeklyPercentage() {
      var week = statistics(this.$root.entries)[this.timeFrame]
      function sortByPercentage(a, b) {
        if ( week[a] > week[b] ){
          return -1;
        }
        else if ( week[a] < week[b] ){
          return 1;
        }
        return 0;
      }
      var sortedKey = Object.keys(week).sort(sortByPercentage)
      return sortedKey.slice(0, 3)
    }, 
    positivity() {
      var positive = 0;
      var week = statistics(this.$root.entries)[this.timeFrame]
      for (let emotion of this.positiveEmotions) {
        if (week[emotion] != null) {
          positive += week[emotion]
        }
      }
      return positive
    },
    recentEntries() {
      var array = this.$root.entries.slice()
      return array.reverse().slice(0,3)
    }
  },
  methods: {
    convertToPercentage(key) {
      var week = statistics(this.$root.entries)[this.timeFrame]
      var decimal = week[key]
      return Math.floor(decimal * 100)
    }, 
    getDate(date) {
      var spliced = date.toDateString().split(' ')
      return spliced[1] + ' ' + spliced[2]
    }
  }
}
</script>

<style scoped>

#header {
 display: inline-block;
 position: relative;
 float: left;
 margin-top: -2.5vh;
}

#cutout {
  float: left;
}

#header > h1 {
  z-index: 1;
  position: absolute;
  top: 30%;
  margin-left: 23px;
}

.floater {
  display: block;
  overflow: auto;
  margin-bottom: -5vh;
}

.section {
  padding-top: 0;
  margin-bottom: 6vh;
}

#title {
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  padding: 0px 32px 0px 32px;
  color: rgba(37, 40, 61, 0.1);
  margin-bottom: 2vh;
}

.card {
  padding: 4vh 4vw 4vh 4vw;
  margin: 16px 0 16px 0;
}

.label {
  padding-top: 8px;
  font-size: 12px;
}

/* Selector */
#week {
  position: absolute;
  z-index: 3;
  left: 8vw;
}

#month {
  position: absolute;
  z-index: 3;
  right: 7vw;
}

.switch > p {
  top: 50%;
  transform: translateY(-50%);
  font-size: 10px;
  font-weight: bold;
  color: rgba(37, 40, 61, 0.1);
}

.switch {
  height: 4vh;
  width: 45vw;
}

input + .slider {
  background: rgba(37, 40, 61, 0.05);
}

input:checked + .slider {
  background: rgba(37, 40, 61, 0.05);
}

.slider:before {
  position: absolute;
  content: "";
  height: 4vh;
  width: 55%;
  left: 0px;
  top: 0;
  background-color: #FFFFFF;
  box-shadow: 0px 1px 50px rgba(0, 0, 0, 0.05);
  -webkit-transition: .4s;
  transition: .4s;
}

.slider.round:before {
  border-radius: 128px;
}

input:checked + .slider:before {
  -webkit-transform: translateX(85%);
  -ms-transform: translateX(85%);
  transform: translateX(85%);
}

</style>
