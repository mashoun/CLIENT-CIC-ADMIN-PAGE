<template>
  <section class="container">
    <div class="row g-4">
      <div class="col-12">
        <div class="table-responsive">
          <table class="table caption-top">
            <caption>
              <h5 class="text-primary">Set Contact Information <span v-if="spinner" class="spinner spinner-grow spinner-grow-sm"></span></h5>
            </caption>
            <thead>
              <tr>
                <th scope="col">KEY</th>
                <th scope="col">VALUE</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(value,key) in store.profile.contact" :key="key">
                  <td>{{key}}</td>
                  <td class="font-monospace text-secondary" :ref="key" contenteditable @keyup="trackEdit(key)" >{{value}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-12">
        <button class="btn btn-sm btn-primary" @click="saveChanges" :disabled="spinner">Save changes</button>
      </div>
    </div>
  </section>
</template>
<script>

import { useStore } from "../stores/mainStore";
import utilities from "../utilities.js";
export default {
  setup() {
    const store = useStore();
    return { store };
  },
  data(){
    return{
      spinner:false
    }
  },
  methods: {
    trackEdit(key){
      this.store.profile.contact[key] = this.$refs[key][0].innerText
    },
    saveChanges(){
      if(confirm('Are you sure?')){
        this.spinner = true
        fetch(this.store.getApi() + '?setContact=1',{
          method:'POST',
          headers:{
            "Content-Type":"text/plain"
          },
          body:JSON.stringify({
            username:this.store.username,
            password:this.store.password,
            contact:this.store.profile.contact
          })
        })
        .then(res => res.json())
        .then(res => {
          console.log(res)
          console.log(typeof(res))
          this.spinner = false
          if(res) alert('Meshe l7al')
        })
        .catch(err => {
          // console.log(err)
          alert(err)
          this.spinner = false
        })
      }
    }
  },
};
</script>