<template>
  <div class="eli" @click="click">
    <div>
      <h3 class="eli-date">{{ entry.date.toDateString() }}</h3>
      <span class="eli-emo">{{ entry.emotions.join(', ') }}</span>
      <p class="eli-text">{{ entry.text }}</p>
    </div>
  </div>
</template>

<script>
import router from '@/router'

export default {
  name: 'EntryListItem',
  props: ['entry', 'index'],
  methods: {
    click() {
      router.push('/entries/'+this.index)
    }
  }
}
</script>

<style scoped>
.eli {
  text-align: left;
  border:2px solid;
  border-radius:0.33em;
  margin:0.33em;
  padding:0.33em;
  cursor:pointer;
}
.eli-date {
  display:inline;
}
.eli-emo {
  float:right;
  font-variant:small-caps;
}
.eli-text {
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}
</style>
