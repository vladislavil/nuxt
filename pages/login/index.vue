<template>
   <form>
      <h1>Login</h1>

      <div class="form-group">
         <input type="text" class="form-control" placeholder="Username">
      </div>

      <div class="form-group">
         <input type="password" class="form-control" placeholder="Password">
      </div>

      <button class="btn btn-success" type="submit">Login</button>
      <nuxt-link class="login__link" to="/">Go to the Home</nuxt-link>
   </form>
</template>

<script>
   export default {
      layout: "login"
   }
</script>

<style scoped>
   form {
      max-width: 600px;
      margin: auto;
      padding: 5rem 0;
   }

   .login__link {
      display: block;
   }
</style>