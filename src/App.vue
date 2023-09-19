<template>
  

  <login-vue v-if="!store.isLogedIn"></login-vue>
  <navbar v-if="store.isLogedIn"></navbar>
  <main v-if="store.isLogedIn" class="my-3 my-lg-5">
    <router-view></router-view>
  </main>
  
</template>
<script>
import { useStore } from "./stores/mainStore";
import utilities from "./utilities.js";
import navbar from './components/navbar.vue'
import loginVue from './components/login.vue';
export default {
  setup() {
    const store = useStore();
    return { store };
  },
  components:{navbar,loginVue},

}
</script>
