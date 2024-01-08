<template>
  <NavBar :user="user"/>
  <div class="page-wrap">
    <router-view :user="user"></router-view>
  </div>
</template>

<script>
  import NavBar from './components/NavBar.vue';

  // Import function from Firebase Auth
  import { getAuth, onAuthStateChanged } from 'firebase/auth';

  export default {
    name: "App",
    components: {
        NavBar,
    },
    data() {
      return {
        user: null,
      }
    },
    created() {
      const auth = getAuth();
      onAuthStateChanged(auth, user => {
        this.user = user;
      });
    }
  };
</script>