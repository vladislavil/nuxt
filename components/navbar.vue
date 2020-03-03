<template>
   <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <a class="navbar-brand" href="#">Navbar</a>

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
               <li class="nav-item">
                  <nuxt-link active-class="custom-active" class="nav-link" to="/login">Login</nuxt-link>
               </li>
            </ul>
         </div>
      </nav>
   </header>
</template>

<style>
   .custom-active {
      color: #000000;
      font-weight: bold;
   }
</style>