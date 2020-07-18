<template>
  <div class="card">
    <div>
      <div class="columns is-mobile" @click="click($event);">
        <div class="column is-one-fifth" @click="click();">
          <p class="emoji">{{this.emojis[entry.emotions[0]]}}</p>
        </div>
        <div class="column is-three-fifths" @click="click();">
          <h3 class="date has-text-left has-text-weight-bold">{{ this.splicedDate }}</h3>
          <p class="entryText has-text-left">{{ entry.text }}</p>
        </div>
        <div class="column is-one-fifth exit">
          <p>
            <i class="fas fa-times has-text-light" @click="deleteEntry()"></i>
          </p>
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
    click(event) {
      if (event.target.tagName.toLowerCase() != "i") {
        this.$root.hapticsVibrate();
        router.push('/entries/'+this.$root.entries.indexOf(this.entry))
      }
    },
    deleteEntry() {
      let index = this.$root.entries.indexOf(this.entry);
      let deleteEntry = confirm("Are you sure you want to delete this entry?");
      if (deleteEntry) {
        this.$root.entries.splice(index, 1);
      }
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
  text-align: center;
  vertical-align: middle;
  display: table-cell;
}

.emoji {
  font-size: 2rem;
  text-align: center;
  vertical-align: middle;
  display: table-cell;
}

.exit {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  font-size: 18px;
}

</style>
