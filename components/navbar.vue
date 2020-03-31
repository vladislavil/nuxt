<template>
   <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <nuxt-link class="navbar-brand" to="/">Navbar</nuxt-link>

         <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
               <li class="nav-item">
                  <nuxt-link exact active-class="custom-active" class="nav-link" to="/">Home</nuxt-link>
               </li>
               <li class="nav-item">
                  <nuxt-link active-class="custom-active" class="nav-link" to="/users">Users</nuxt-link> <!-- no-prefetch  - для того, чтобы подгружать страницу с сервера -->
               </li>
               <li class="nav-item">
                  <nuxt-link active-class="custom-active" class="nav-link" to="/about">About</nuxt-link>
               </li>
               <li class="nav-item" v-if="!isAuth">
                  <nuxt-link active-class="custom-active" class="nav-link" to="/login">Login</nuxt-link>
               </li>
               <li class="nav-item" v-if="isAuth">
                  <a class="nav-link" href="#" @click.prevent="logOut">Logout</a>
               </li>
            </ul>
         </div>
      </nav>
   </header>
</template>

<script>
   export default {
      methods: {
         logOut() {
            this.$store.dispatch('login/logout');
            this.$router.push('/');
         }
      },
      computed: {
         isAuth() {
            return this.$store.getters['login/isAuth'];
         }
      }      
   }
</script>

<style>
   .custom-active {
      color: #000000;
      font-weight: bold;
   }
</style>