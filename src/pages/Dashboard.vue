<template>
  <div>
    <div class="floater">
      <div id="header">
        <h1 class="is-size-2 has-text-weight-bold has-text-dark has-text-left">Welcome Back</h1>
        <svg width="129" height="221" viewBox="0 0 129 221" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0)">
            <path d="M-48.2189 148.591C-56.5023 145.514 -60.7225 136.304 -57.645 128.021L-24.1187 37.7811C-21.0412 29.4977 -11.8314 25.2775 -3.54807 28.355L86.6916 61.8813C94.975 64.9588 99.1952 74.1686 96.1177 82.4519L62.5913 172.692C59.5138 180.975 50.3041 185.195 42.0207 182.118L-48.2189 148.591Z" fill="url(#paint0_linear)"/>
          </g>
          <defs>
            <linearGradient id="paint0_linear" x1="19.19" y1="197.403" x2="28.4997" y2="35.9989" gradientUnits="userSpaceOnUse">
              <stop stop-color="#AFECE7"/>
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
      <p id="title" class="has-text-weight-bold">This Week</p>
      <div class="stats card columns is-mobile" data-aos="fade-up" data-aos-duration="1000">
          <div class="column chart">
            <svg viewBox="0 0 36 36" class="circular-chart">
              <path class="circle-bg"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path class="circle"
                :stroke-dasharray="positivity*100 + ', 100'"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="18" y="16.5" class="percent">{{ Math.floor(positivity * 100) + "%" }}</text>
              <text x="18" y="22" class="percent">Positive</text>
            </svg>
          </div>
          <div class="column is-two-fifths">
            <div class="emotions">
              <div class="emotion" v-for="(emotion, index) in weeklyPercentage" :key="emotion">
                <p class="percentage" :style="colors[index]">{{ convertToPercentage(emotion) }}</p>
                <p class="emotionText has-text-weight-bold">{{ emotion.charAt(0).toUpperCase() + emotion.slice(1) }}</p>
              </div>
            </div>
          </div>
      </div>
      <div class="columns is-mobile weekEntries">
        <div @click="navigateToEntry(entry);" data-aos="fade-up" data-aos-duration="1000" class="card column entry" v-for="entry in recentEntries" :key="entry.date.toString()">
          <p class="weekEntry">
            {{$root.emojis[entry.emotions[0]]}}    
            <a style="margin-left: 6px;" class="has-text-dark">{{getDate(entry.date)}}</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { statistics } from '@/modules/statistics.js'

export default {
  name: 'Dashboard',
  data: () => ({
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
    weeklyPercentage() {
      var week = statistics(this.$root.entries)['week']
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
      var week = statistics(this.$root.entries)['week']
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
      var week = statistics(this.$root.entries)['week']
      var decimal = week[key]
      return Math.floor(decimal * 100) + "%"
    }, 
    getDate(date) {
      var spliced = date.toDateString().split(' ')
      return spliced[1] + ' ' + spliced[2]
    },
    navigateToEntry(entry) {
      this.$root.hapticsVibrate();
      this.$router.push('/entries/'+this.$root.entries.indexOf(entry))
    },
  }
}
</script>

<style scoped>
#header {
 display: inline-block;
 position: relative;
 float: left;
 margin-top: -1vh;
}

#cutout {
  float: left;
}

#header > h1 {
  z-index: 1;
  position: absolute;
  top: 20%;
  margin-left: 23px;
}

.floater {
  display: block;
  overflow: auto;
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
  padding: 0 4vw 0 4vw;
  margin: 16px 0 16px 0;
}

.emotion {
  display: flex;
  align-items: center;
  margin: 2vh 0px 2vh 0px;
  font-size: 3vw;
}

.percentage {
  margin-right: 16px;
  font-size: 4vw;
  font-weight: bold;
}

.chart {
  display: flex;
  align-items: center;
  justify-content: center;
}

.entry {
  padding: 8px;
  margin: 0 8px 0 8px;
}

.weekEntries {
  width: 100%;
  margin: 0px;
}

.weekEntry {
  font-size: 2.5vw;
  font-weight: bold;
  padding: 6px 8px 6px 8px;
}

.columns {
  margin-bottom: 5vh !important;
} 

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
  fill: rgba(37, 40, 61, 0.1);;
  font-weight: bold;
  font-size: 0.25em;
  text-anchor: middle;
}
</style>
