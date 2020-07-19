<template>
  <div class="section">
    <div class="card" data-aos="fade-up" data-aos-duration="1000" id="stats">
      <h3 class="date has-text-centered has-text-weight-bold">{{ splicedDate }}</h3>
      <div class="columns is-mobile">
        <div class="column is-size-6" v-for="emotion in entry.emotions" :key="emotion">
          {{ $root.emojis[emotion] }}
          <br>
          {{ emotion.charAt(0).toUpperCase() + emotion.slice(1) }}
        </div>
      </div>
    </div>
    <div class="card" data-aos="fade-up" data-aos-duration="1000" id="entry">
      <div class="scrollContainer">
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
    splicedDate: ''
  }),
  created() {
    const i = this.$route.params.index;
    if(i in this.$root.entries){
      this.entry = this.$root.entries[i]
    }else{
      // when wrong index
      this.entry = {
        date: new Date(0),
        text: "Entry does not exist",
        emotions: ["sad"],
      }
    }
    // Makes the date more readable
    // Moved this to a place where it works
    var spliced = this.entry.date.toDateString().split(' ')
    console.log(spliced)
    this.splicedDate = spliced[1] + ' ' + spliced[2] + ", " + spliced[3]
  }
}
</script>

<style scoped>
.section {
  padding-top: 0.25vh;
  margin-bottom: 6vh;
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
  height: 40vh;
  padding-bottom: 16px;
  
}

.scrollContainer {
  height: 100%;
  overflow: auto;
  line-height: 2.5;
}

#stats {
  min-height: 10vh;
}

</style>
