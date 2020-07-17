<template>
  <div>
    <div class="floater">
      <div id="header">
        <h1 class="is-size-2 has-text-weight-bold has-text-dark">Settings</h1>
        <svg id="cutout" width="141" height="161" viewBox="0 0 141 161" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0)">
            <path d="M60.155 88.8176C58.6996 95.5947 53.0458 100.664 46.1506 101.374L1.40107 105.982C-5.49409 106.692 -12.0623 102.881 -14.8682 96.5429L-33.0791 55.4075C-35.8851 49.0692 -34.2906 41.645 -29.1296 37.0177L4.365 6.98662C9.52597 2.35933 17.0795 1.58153 23.0752 5.05998L61.9869 27.6352C67.9825 31.1136 71.0564 38.0572 69.601 44.8343L60.155 88.8176Z" fill="url(#paint0_linear)"/>
          </g>
          <defs>
            <linearGradient id="paint0_linear" x1="75.3029" y1="39.4923" x2="-25.1081" y2="64.452" gradientUnits="userSpaceOnUse">
            <stop stop-color="#AFECE7"/>
            <stop offset="1" stop-color="#AFCFEC"/>
            </linearGradient>
            <clipPath id="clip0">
              <rect width="141" height="161" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
    <div class="section">
      <div class="card" data-aos="fade-up" data-aos-duration="1000">
        <div class="settings-section" v-for="(data, name) in $root.settings" :key="name">
          <div class="columns is-mobile">
            <div class="column is-one-fifth">
              <i class="has-text-gradient" :class="settings[name].icon"></i>
            </div>
            <div class="column is-three-fifths">
              <h3 class="has-text-weight-bold has-text-left">{{ name }}</h3>
            </div>
            <div class="column is-one-fifth">
              <label class="switch">
                <input type="checkbox" v-model="$root.settings[name]" @click="$root.hapticsVibrate();">
                <span class="slider round"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Settings',
  data: ()=>({
    "settings": {
      "Haptic Feedback": {
        "icon": "fas fa-wave-square"
      }
    }
  }),
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#header {
 display: inline-block;
 position:relative;
 float:left;
 margin-top: 3vh;
}

#cutout {
  float: left;
}

#header > h1 {
  z-index: 1;
  position: absolute;
  top: 15%;
  margin-left: 30px;
}

.floater {
  display: block;
  overflow: auto;
}

.card {
  padding: 0px 32px 0px 32px;
}

.settings-section {
  padding: 36px 0 36px 0;
}

.section {
  padding-top: 0px;
}
</style>
