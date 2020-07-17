<template>
  <div>
    <div class="header" id="NewEntry">
      <router-link class= "exit" tag="button" to="/entries">&#8249; Exit</router-link> 
      <button class= "save" @click="save">Done</button>
    </div>
    <br>
    <br>
    <br>
    <textarea rows="15" v-model="text" />
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
  background: #f6f9ff;
  box-shadow: 0px 1px 50px rgba(37, 40, 61, 0.1);
  border-radius: 0px 0px 10px;
}
.content {
  padding:10px;
  background: #adadad;
}
.btn {
  border:none;
  padding:0px 0px;
  cursor: pointer;
}
.save{background-color: #f6f9ff;
color: #afcfec;
font-family: Poppins;
Font-weight: bold;
font-size: 16px; 
float: right;}

.exit{
  background-color:#f6f9ff;
  color: #616569;
  font-family: Poppins;
  Font-weight: bold;
  font-size: 16px; 
  float: left;
}
</style>
