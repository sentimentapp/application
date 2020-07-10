<template>
    <div>
        <div id="image">
            <div id="add-entry" class="button is-gradient">
                <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 4vw; height: 4vw;">
                    <path d="M1.14286 6.28571H6.28571V1.14286C6.28571 0.511786 6.7975 0 7.42857 0H8.57143C9.2025 0 9.71429 0.511786 9.71429 1.14286V6.28571H14.8571C15.4882 6.28571 16 6.7975 16 7.42857V8.57143C16 9.2025 15.4882 9.71429 14.8571 9.71429H9.71429V14.8571C9.71429 15.4882 9.2025 16 8.57143 16H7.42857C6.7975 16 6.28571 15.4882 6.28571 14.8571V9.71429H1.14286C0.511785 9.71429 0 9.2025 0 8.57143V7.42857C0 6.7975 0.511785 6.28571 1.14286 6.28571Z" fill="#F9FFFC"/>
                </svg>
            </div>
            <div id="content"> Dope 
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
    </div>
</template>


<script>
export default {
  name: 'MenuBar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#menubar {
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 35vw;
}

#add-entry {
    border-style: none;
    border-radius: 50%;
    box-shadow: 0px 5px 25px #AFCFEC;
    height: 18vw;
    width: 18vw;
    top: 40%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    z-index: 10;
    position: absolute;
}

#menubar-background {
    width: 100%;
}

#content {
    position: absolute;
    top: 50%;
    z-index: 10;
}

</style>
