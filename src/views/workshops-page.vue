<template>
  <section class="container">
    <div class="row g-4">
     
      <div class="col-12">
        <div class="table-responsive">
          <table class="table caption-top">
            <caption>
              <h5 class="text-primary">Workshops Management <span v-if="spinner" class="spinner spinner-grow spinner-grow-sm"></span></h5>
            </caption>
            <thead>
              <tr>
                <th scope="col">DEL</th>
                <th scope="col">DATE</th>
                <th scope="col">THUMBNAIL</th>
                <th scope="col">TITLE</th>
                <th scope="col">DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              
              <tr v-for="node in store.profile.workshops" :key="node">
                <th scope="row"><i @click="removePartnerRecord(node.id)"  class="bi bi-trash text-danger"></i></th>
                <td>{{node.date}}</td>
                <td>
                  <img :src="node.thumbnail" :alt="node.index" width="50" class="img-fluid rounded">
                </td>
                <td>{{node.title}}</td>
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
            <span>Add Workshop</span>
          </button>
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
    async addPartnerRecord(){
      if(confirm('Are you sure?')){
          // get the image then host then save
          this.spinner = true
          var files = await utilities.openFiles()
          if(files){
            // some image was selected
            var files64 = [];// turn to b64
            for(let i = 0 ; i < files.length ; i++){
                files64.push({
                    alt:`Workshop-Thumbnail-${utilities.getCurrentDate()}`,
                    // src64: await utilities.file64(files[i])
                    src64: await utilities.optimizeImageQuality(await utilities.file64(files[i]),0.7)
                })
            }
           

            // host to drive 
            var res = await fetch(this.store.getApi() + "?hostImage=1",{
              method:"POST",
              headers:{
                "Content-Type":"text/plain"
              },
              body:JSON.stringify({
                
                username: this.store.username,
                password: this.store.password,
                folderID:"12B8IGMkcwJnHaKchlj7Xoh7O3PowPycn",
                images:files64
              })
            })
            res = await res.json()
            console.log(res);
            
            

            // save to database

            var title = prompt('Enter Title')
            var description = prompt('enter Description')

            fetch(this.store.getApi() + "?addWorkshopRecord=1",{
              method:"POST",
              headers:{
                "Content-Type":"text/plain"
              },
              body:JSON.stringify({
                
                username: this.store.username,
                password: this.store.password,
                workshop:{
                  thumbnail:res[0].src,
                  title,
                  description
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

            // refresh
            // this.refresh()

          }


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
        fetch(this.store.getApi() + "?removeWorkshopRecord=1",{
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