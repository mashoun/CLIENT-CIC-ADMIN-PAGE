<template>
    <section class="w-100 h-100 position-fixed z-3 bg-light d-flex justify-content-center align-items-center">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-lg-6">
                    <aside class="bg-light shadow rounded d-flex flex-column align-items-center gap-3 p-3">
                        <!-- <i class="bi bi-person-circle fs-1 text-secondary"></i> -->
                        <img src="/logo.jpeg" alt="logo" class="object-fit-cover shadow-sm rounded-circle" height="100" width="100">
                        <h5 class="text-primary fs-5">CIC Admin Page</h5>
                        <input v-model="store.username" type="text" placeholder="ADMIN ID" class="form-control">
                        <input @keyup.enter="login" v-model="store.password" type="password" placeholder="ADMIN PASSWORD" class="form-control">
                        <button @click="login" class="w-100 btn btn-primary">
                            <span v-if="!spinner">Login</span>
                            <span v-else class="spinner-grow spinner-grow-sm"></span>
                        </button>
                        <small class="fs-xsmall">Developed by <a href="http://wa.mashoun.com">mashoun</a> - version 1.2.1</small>
                    </aside>
                </div>
            </div>
        </div>
    </section>
</template>
<script>

// import utilities from '../utilities.js'

import { useStore } from "../stores/mainStore";
export default {
    setup() {
        const store = useStore();
        return { store };
    },
    data(){
        return{
            // utilities,
            spinner:false
        }
    },
    methods:{
        login(){
            this.spinner = true
            fetch(this.store.getApi(),{
                method:"POST",
                headers:{
                    "Content-Type":"text/plain"
                },
                body:JSON.stringify({
                    username:this.store.username,
                    password:this.store.password
                })
            })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                if(res != '500'){

                    this.spinner = false
                    this.store.isLogedIn = true
                    this.store.profile = res
                }else{
                    alert('Wrong Username or Password')
                    this.spinner = false
                }
            })
            .catch(err => {
                this.spinner = false
                alert('Weak network!')
                
            })

        }
    }

}
</script>
