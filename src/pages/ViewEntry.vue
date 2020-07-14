<template>
  <div class="section">
    <div class="card" id="stats">
      <p>Stats</p>
    </div>
    <div class="card" id="entry">
      <div class="scrollContainer">
        <h3 class="date has-text-left has-text-weight-bold"> {{this.emojis[entry.emotions[0]]}} {{ this.splicedDate }}</h3>
        <p class="entryText has-text-left">{{ entry.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewEntry',
  data: ()=>({
    // dummy entry before indexed entry is loaded
    entry: {
      date: new Date(0),
      text: "Loading...",
      emotions: ["Loading..."],
    },
    emojis: {
      'happy': '😃',
      'sad': '😔',
      'excited': '😠',
      'bored': '😒',
    },
    splicedDate: ''
  }),
  created() {

    // Makes the date more readable
    var spliced = this.entry.date.toDateString().split(' ')
    this.splicedDate = spliced[1] + ' ' + spliced[2]

    const i = this.$route.params.index;
    if(i in this.$root.entries){
      this.entry = this.$root.entries[i]
    }else{
      // when wrong index
      this.entry = {
        date: new Date(0),
        text: "No entry",
        emotions: ["N/A"],
      }
    }
  }
}
</script>

<style scoped>
.section {
  padding-top: 1vh;
  padding-bottom: 0px;
}

.card {
  padding: 32px 8vw 32px 8vw;
  margin: 32px 0 32px 0;
}

.date {
  padding-bottom: 16px;
}

.entryText {
  font-family: Nunito;
  color: rgba(37, 40, 61, 0.5);
  font-size: 14px;
}

#entry {
  height: 45vh;
  padding-bottom: 16px;
  
}

.scrollContainer {
  height: 100%;
  overflow: auto;
  line-height: 2.5;
}

#stats {
  height: 15vh;
}

</style>
