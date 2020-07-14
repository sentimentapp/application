<template>
  <div>
    <div class="header" id="NewEntry">
      <br>
      <router-link tag="button" to="/entries">&#8249; Exit</router-link>
      <button class= "save" @click="save">Done</button>
    </div>
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
  width:100%;
  height:100%;
  border:1px;
}
.header {
  padding:10px 16px;
  background: #555;
  color: #f1f1f1;
}
.content {
  padding:10px;
}
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}
.sticky + .content {
  padding-top:10px;
}
.btn {
  border:none;
  color:brown;
  padding:14px 28px;
  cursor: pointer;
}
.save{background-color:darkblue;}
.save:hover{background-color:darkorchid;}
</style>
