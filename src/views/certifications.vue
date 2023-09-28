<template>
  <section class="container">
    <div class="row g-4">
     
      <div class="col-12">
        <div class="table-responsive">
          <table class="table caption-top">
            <caption>
              <h5 class="text-primary">Certifications Management <span v-if="spinner" class="spinner spinner-grow spinner-grow-sm"></span></h5>
            </caption>
            <thead>
              <tr>
                <th scope="col">DEL</th>
                <th scope="col">DATE</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              
              <tr v-for="node in store.profile.certifications" :key="node">
                <th scope="row"><i @click="removePartnerRecord(node.id)"  class="bi bi-trash text-danger"></i></th>
                <td>{{node.date}}</td>
                
                <td>{{node.name}}</td>
                <td>{{node.email}}</td>
                <td>{{node.description}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-12">
        <div class="d-flex gap-1">
          <button class="btn btn-sm btn-primary" @click="addPartnerRecord" :disabled="spinner">
            <!-- <span v-if="spinner" class="spinner spinner-grow spinner-grow-sm"></span> -->
            <span>Add Attendee</span>
          </button>
          <button class="btn btn-sm btn-success" @click="sendCertifications" :disabled="spinner">Send Certifications</button>
          <button class="btn btn-sm btn-outline-secondary" @click="refresh" :disabled="spinner">Refresh</button>
        </div>
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
      spinner:false,
      utilities
    }
  },
  methods:{
    sendCertifications(){
        if(confirm('Are you sure?')){
            this.spinner = true
            fetch(this.store.getApi() + "?sendCertifications=1",{
            method:"POST",
            headers:{
            "Content-Type":"text/plain"
            },
            body:JSON.stringify({
            
            username: this.store.username,
            password: this.store.password,
            
            })
            })
            .then(res => {
                this.spinner = false
                alert('Meshe l7al')
            })
            .catch(err => {
                this.spinner = false
                alert('Meshe l7al')
            })

        }
    },
    async addPartnerRecord(){
      if(confirm('Are you sure?')){
          // get the image then host then save
          this.spinner = true
          // save to database

        var name = prompt('Enter Attendee name')
        var email = prompt('Enter Attendee email')
        var description = prompt('Enter Workshop Description')

        fetch(this.store.getApi() + "?addCertificationRecord=1",{
            method:"POST",
            headers:{
            "Content-Type":"text/plain"
            },
            body:JSON.stringify({
            
            username: this.store.username,
            password: this.store.password,
            certification:{
                name,
                description,
                email
            }
            })
        })
        .then(res => {
            this.spinner = false
            alert('Meshe l7al')
        })
        .catch(err => {
            this.spinner = false
            alert('Meshe l7al')
        })


        }
    },
    
    refresh() {
        this.spinner = true
        fetch(this.store.getApi(), {
            method: "POST",
            headers: {
                "Content-Type": "text/plain"
            },
            body: JSON.stringify({
                username: this.store.username,
                password: this.store.password
            })
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                if (res != '500') {

                    this.spinner = false
                    this.store.isLogedIn = true
                    this.store.profile = res
                } else {
                    alert('Wrong Username or Password')
                    this.spinner = false
                }
            })
            .catch(err => {
                this.spinner = false
                alert('Weak network!')

            })
    },

    removePartnerRecord(id){
      if(confirm('Are you sure ?')){
        this.spinner = true
        fetch(this.store.getApi() + "?removeCertificationRecord=1",{
          method:"POST",
          headers:{
            "Content-Type":"text/plain"
          },
          body:JSON.stringify({
            
            username: this.store.username,
            password: this.store.password,
            index:id
          })
        })
        .then(res => {
          this.spinner = false
          
          this.refresh()
          alert('Meshe l7al')
        })
        .catch(err => {
          
          this.spinner = false
          alert(err)
        })
        // this.refresh()
      }

    }



  }
}
</script>