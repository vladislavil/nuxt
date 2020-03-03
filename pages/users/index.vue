<template>
   <section>
      <h1>This is users page</h1>
      <ul>
         <li v-for="(user, index) of users" :key="index"> 
            {{index + 1}}.
            <a href="#" @click.prevent="goUser(index + 1)">
               {{ user }} 
            </a>
         </li>
      </ul>
   </section>
</template>

<script>
   export default {
      data: () => ({
         users: [
            "ivan",
            "inna",
            "oleg",
            "egor"
         ]
      }),
      methods: {
         goUser(index) {
            this.$router.push(/users/ + index)
         }
      }   
   }
</script>

<style>
   .container {
   margin: 0 auto;
   min-height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   text-align: center;
   }

   .title {
   font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
   display: block;
   font-weight: 300;
   font-size: 100px;
   color: #35495e;
   letter-spacing: 1px;
   }

   .subtitle {
   font-weight: 300;
   font-size: 42px;
   color: #526488;
   word-spacing: 5px;
   padding-bottom: 15px;
   }

   .links {
   padding-top: 15px;
   }

   ul {
      padding: 0;
      margin: 0;
      list-style: none;
   }
</style>