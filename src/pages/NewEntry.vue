<template>
<div>
    <div class="header" id="NewEntry">
      <h1><router-link class= "exit" tag="button" to="/entries">&#8249; Exit</router-link> 
      <button class= "save" @click="save">Done</button></h1>
    </div>
    <div>
      <br>
      <br>
      <textarea placeholder=" Tell me about your day ..." rows="15" v-model="text" />
    </div>
  </div>
</template>

<script>
import { emotions } from '@/modules/model.js'
import router from '@/router'

export default {
  name: 'NewEntry',
  data: ()=>({
    text: '',
  }),
  methods: {
    save() {
      emotions(this.text).then((emos)=>{
        this.$root.entries.push({
          date: new Date(),
          text: this.text,
          emotions: emos,
        })
        router.push('/entries')
      })
    }
  }
}
</script>

<style scoped>
textarea {
  padding: 20px;
  width:90%;
  height:90%;
  border:1px;
}
.header {
  height:81px ;
  position: absolute;
  top: 0px ;
  right: 0px;
  left: 0px;
  background: #f6f9ff;
  box-shadow: 0px 1px 50px rgba(37, 40, 61, 0.1);
  border-radius: 0px 0px 16px 16px;
}
.content {
  padding:0px;
  background: #adadad;
}
.save{
  border:none;
  position: absolute;
  right:20px;
  top:44px;
  background-color: #f6f9ff;
  color: #afcfec;
  font-family: Poppins;
  Font-weight: bold;
  font-size: 16px; 
}

.exit{
  border:none;
  position: absolute;
  top:44px;
  left:20px;
  background-color:#f6f9ff;
  color:lightgrey;
  font-family: Poppins;
  Font-weight: bold;
  font-size: 16px; 
}
</style>
