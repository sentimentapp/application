<template>
  <div>
    <div class="floater">
      <div id="header">
        <h1 class="is-size-2 has-text-weight-bold has-text-dark has-text-left">Past Entries</h1>
        <svg width="79" height="161" viewBox="0 0 79 161" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0)">
            <path d="M74.9181 129.486C77.4535 141.54 65.9903 151.817 54.2844 147.987L-42.3411 116.366C-54.0471 112.535 -57.2163 97.4685 -48.0458 89.2463L27.6516 21.3765C36.8221 13.1543 51.4545 17.9428 53.9899 29.9958L74.9181 129.486Z" fill="url(#paint0_linear)"/>
          </g>
          <defs>
            <linearGradient id="paint0_linear" x1="108.106" y1="61.7729" x2="-48.7918" y2="100.774" gradientUnits="userSpaceOnUse">
            <stop stop-color="#AFECE7"/>
            <stop offset="1" stop-color="#AFCFEC"/>
            </linearGradient>
            <clipPath id="clip0">
            <rect width="79" height="161" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
    <div>
      <input id="search" @focus="focused = true" @blur="focused = false" :placeholder="'\uf002  Search'">
      <div id="exitKeyboard" @click="closeKeyboard()" v-if="focused"></div> 
    </div>
    <div class="section">
      <div class="fader"></div>
      <div id="entries" v-for="(entry, index) in $root.entries.slice().reverse()" :key="entry.date.toString()">
        <EntryListItem :entry=entry :index=($root.entries.length-1-index) />
      </div>
    </div>
    <menu-bar></menu-bar>
  </div>
</template>

<script>

import EntryListItem from '@/components/EntryListItem'

export default {
  components: {EntryListItem},
  name: 'Entries',
  data: ()=>({
    focused: false
  }),
  methods: {
    closeKeyboard() {
      if (this.focused) {
        this.refs.textInput.blur()
      }
      console.log("epico")
    }
  }
}
</script>

<style scoped>

#header {
 display: inline-block;
 position:relative;
 float:left;
 margin-top: 1vh;
}

#cutout {
  float: left;
}

#header > h1 {
  z-index: 1;
  position: absolute;
  top: 15%;
  margin-left: 23px;
}

.floater {
  display: block;
  overflow: auto;
  margin-bottom: 3vh;
}

#exitKeyboard {
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 1;
  bottom: 0px;
}

#entries {
  z-index: 2;
  position: relative;
}

#search {
  background-color: rgba(37, 40, 61, 0.05);
  border-radius: 8px;
  border-style: none;
  width: 256px;
  height: 36px;
  font-family: 'Font Awesome\ 5 Free', Nunito;
  padding: 0px 16px 0px 16px;
  color: rgba(37, 40, 61, 0.5);
  font-weight: 700;
}

input::-webkit-input-placeholder {
  color: rgba(37, 40, 61, 0.1);
  overflow: visible;
  line-height: 12px;
}

.section {
  padding-top: 3vh;
  padding-bottom: 128px;
}

.fader {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #F6F9FF 100%);
  position: fixed;
  width: 100%;
  height: 20vh;
  z-index: 3;
  bottom: 0;
  left: 0;
}

</style>
