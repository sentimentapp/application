<template>
    <div id="menubar">
        <router-link to="/entries/new">
            <div id="add-entry" class="button is-gradient">
                <i class="fas fa-plus has-text-white"></i>
            </div>
        </router-link>
        <div id="navigation">
            <div class="columns is-mobile">
                <div class="column">
                    <router-link to="/" class="link" :class="{ 'has-text-gradient': (currentPage == '/'), 'has-text-light': (currentPage != '/')}">
                        <i class="fas fa-bookmark"></i>
                    </router-link>
                </div>
                <div class="column">
                    <router-link to="/statistics" class="link" :class="{ 'has-text-gradient': (currentPage == '/statistics'), 'has-text-light': (currentPage != '/statistics')}">
                        <i class="fas fa-chart-pie"></i>
                    </router-link>
                </div>
                <div class="column">
                </div>
                <div class="column">
                    <router-link to="/entries" class="link" :class="{ 'has-text-gradient': (currentPage == '/entries'), 'has-text-light': (currentPage != '/entries')}">
                        <i class="fas fa-stream"></i>
                    </router-link>
                </div>
                <div class="column">
                    <router-link to="/settings" class="link" :class="{ 'has-text-gradient': (currentPage == '/settings'), 'has-text-light': (currentPage != '/settings')}">
                        <i class="fas fa-cog"></i>
                    </router-link>
                </div>
            </div>

        </div>
        <svg id="menubar-background" preserveAspectRatio="xMidYMid meet" viewBox="0 0 375 141" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M187 95C205.787 95 221.824 83.2258 228.134 66.654C231.278 58.3959 238.163 51 247 51H359C367.837 51 375 58.1634 375 67V140C375 140.552 374.552 141 374 141H0.999995C0.44771 141 0 140.552 0 140V67C0 58.1634 7.16344 51 16 51H127C135.837 51 142.722 58.3959 145.866 66.654C152.176 83.2258 168.213 95 187 95Z" fill="#F7F9FF"/>
            </g>
            <defs>
                <filter id="filter0_d" x="-50" y="0" width="475" height="190" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dy="-1"/>
                <feGaussianBlur stdDeviation="25"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.145098 0 0 0 0 0.156863 0 0 0 0 0.239216 0 0 0 0.1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
            </defs>
        </svg>
    </div>
</template>


<script>
export default {
  name: 'MenuBar',
  data () {
    return {
      currentPage: ''
    }
  },
  created () {
    this.currentPage = this.$router.currentRoute.fullPath;
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#menubar {
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 35vw;
    z-index: 99;
}

#add-entry {
    border-style: none;
    border-radius: 50%;
    box-shadow: 0px 5px 25px #AFCFEC;
    height: 18vw;
    width: 18vw;
    top: 38%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    z-index: 1;
    position: absolute;
}

#menubar-background {
    width: 100%;
}

#navigation {
    position: absolute;
    top: 50%;
    z-index: 1;
    justify-content: center;
}

.columns {
    width: 100vw;
    margin: 0;
}

.column {
    display: block;
    margin: auto
}

.link {
    padding: 8px;
}

i {
    font-size: 18px;
}

</style>
