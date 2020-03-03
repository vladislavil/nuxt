<template>
   <section>
      <h1>{{ pageTitle }}</h1>
      <ul>
         <li v-for="(user, index) of users" :key="user.id"> 
            {{index + 1}}.
            <a href="#" @click.prevent="getUser(user)">
               {{ user.name }}
               {{ user.email }} 
            </a>
         </li>
      </ul>
   </section>
</template>

<script>
   export default {

      asyncData({$axios, error}) {
         return $axios.$get('https://jsonplaceholder.typicode.com/users')
         .then(users => {
            return {
               users
            }
         })
         .catch(err => {
            error(err);
         })
      },
      data() {
         return {
            pageTitle: "This is users page"
         }
      },
      methods: {
         getUser(user) {
            this.$router.push('/users/' + user.id)
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