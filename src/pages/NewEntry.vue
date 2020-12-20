<template>
  <div>
    <div class="header columns is-mobile" id="NewEntry">
      <div class="column has-text-left">
        <router-link class="exit" to="/entries"> 
          <i class="fas fa-caret-left" style="margin-right: 8px"></i> 
          Exit 
        </router-link> 
      </div>
      <div class="column has-text-right">
        <p class="save" @click="save">
          {{ saving ? "Saving" : "Done" }}
          <i class="fas fa-check" style="margin-left: 8px"></i>
        </p>
      </div>
    </div>
    <div class="content">
      <div :style="{ opacity: opacity + '%'}">
        <div id="getPrompt" class="has-text-centered" @click="pickPrompt();">
          <i class="fas fa-lightbulb has-text-white" style="font-size: 12px; margin-top: 8px;"></i>
        </div>
        <div>
          <p id="prompt" >{{ prompt }}</p>
        </div>
      </div>
      <div style="padding: 32px;">
        <textarea rows="15" v-model="text" ref="input"/>
      </div>
    </div>
  </div>
</template>

<script>
import { model_predict } from '@/modules/model/model.js'
import router from '@/router'
import { pickPrompt } from '@/modules/prompts.js'

export default {
  name: 'NewEntry',
  data: ()=>({
    text: '',
    saving: false,
    prompt: 'Tell Me About Today'
  }),
  methods: {
    save() {
      // Do not save twice
      if(this.saving) return;

      // Do not save empty entries
      if(!this.text.replace(/\W/g, '')) return;

      // Sets the saving variable to true because it is an async. function
      this.saving = true;

      // Model function
      model_predict(this.text).then((emotions)=>{
        this.$root.entries.push({
          date: new Date(),
          text: this.text,
          emotions: emotions,
        })
        router.push('/entries')
      }).catch(()=>{ this.saving=false })
      // ^ Allow retry if saving fails
    },

    pickPrompt() {
      this.$refs.input.focus()
      this.prompt = pickPrompt();
      this.$root.hapticsVibrate();
    }
  },

  mounted() {
    // Brings up the keyboard when the input page is opened
    this.$refs.input.focus()
  },

  computed: {
    // Makes the prompt disapper as the user types
    opacity() {
      if(this.$root.settings["Disappearing Prompt"]) {
        return 100-this.text.length
      } else {
        return 100
      }
    }
  }
}
</script>

<style scoped>

#getPrompt {
  background: linear-gradient(180deg, #AFECE7 0%, #AFCFEC 100%);
  box-shadow: 0px 2px 25px #AFCFEC;
  width: 8vw;
  height: 8vw;
  border-radius: 50%;
  margin: auto;
  text-align: center;
  vertical-align: middle;
  line-height: 8vw;  
  margin-bottom: 16px;
}

#prompt {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  padding: 0px 32px 0px 32px;
  color: rgba(37, 40, 61, 0.1);
}

.content {
  margin-top: 16vh;
  display : block;
}

textarea {
  position: relative;
  width: 90%;
  height: 20vh;
  border: none;
  outline: none;
  font-family: Nunito;
  background-color: #F6F9FF;
  /* resize: none; */
  color: rgba(37, 40, 61, 0.5);
  font-size: 16px;
  line-height: normal;
  caret-color: #A8E7F4;
}
.header {
  position: absolute;
  width: 100vw;
  height: 11vh;
  top: 0;
  margin: 0;
  background: #f6f9ff;
  box-shadow: 0px 1px 50px rgba(37, 40, 61, 0.1);
  border-radius: 0px 0px 16px 16px;
}

.save{
  color: #A8E7F4;
  font-family: Poppins;
  font-weight: bold;
  font-size: 16px;
}

.exit{
  position: absolute;
  color:rgba(37, 40, 61, 0.1);;
  font-family: Poppins;
  font-weight: bold;
  font-size: 16px; 
}

.column {
  padding: 5vh 32px 10px 32px;
}
</style>
