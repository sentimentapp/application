<template>
  <div>
    <h1>Journal Entries</h1>
    <router-link tag="button" to="/">Dashboard</router-link>
    <router-link tag="button" to="/entries/new">New Entry</router-link>
    <div v-for="(entry, index) in $root.entries.slice().reverse()" :key="entry.text">
      <EntryListItem :entry=entry :index=($root.entries.length-1-index) />
    </div>
  </div>
</template>

<script>
import EntryListItem from '@/components/EntryListItem'

export default {
  components: {EntryListItem},
  name: 'Entries'
}
</script>

<style scoped>

</style>
