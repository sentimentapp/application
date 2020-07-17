<template>
  <div class="card" @click="click(); $root.hapticsVibrate();">
    <div>
      <div class="columns is-mobile">
        <div class="column is-one-fifth">
          <p class="emoji">{{this.emojis[entry.emotions[0]]}}</p>
        </div>
        <div class="column is-four-fifths">
          <h3 class="date has-text-left has-text-weight-bold">{{ this.splicedDate }}</h3>
          <p class="entryText has-text-left">{{ entry.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from '@/router'

export default {
  name: 'EntryListItem',
  props: ['entry'],
  data: ()=>({
    emojis: {
      'happy': '😃',
      'sad': '😔',
      'excited': '😠',
      'bored': '😒',
    },
    splicedDate: ''
  }),
  methods: {
    click() {
      router.push('/entries/'+this.$root.entries.indexOf(this.entry))
    }
  },
  created() {
    var spliced = this.entry.date.toDateString().split(' ')
    this.splicedDate = spliced[1] + ' ' + spliced[2]
  }
}
</script>

<style scoped>
.card {
  padding: 16px 8vw 16px 8vw;
  margin: 16px 0 16px 0;
}

.date {
  padding-bottom: 4px;
}

.entryText {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: Nunito;
  color: rgba(37, 40, 61, 0.5);
  font-size: 14px;
}

.emoji {
  font-size: 2rem;
  padding-top: 2px;
}


</style>
