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

   // async asyncData({store, error}) {
   //    try {
   //       let users = await store.dispatch('users/fetchUsers');
   //       return {users};
   //    }catch(e) {
   //       error(e);
   //    }
   // },
   async fetch({store}, error) {
      try {
         if(store.getters['users/users'].length === 0) {
            await store.dispatch('users/fetchUsers');
         }
      }catch(e) {
         error(e);
      }
   },
   data() {
      return {
         pageTitle: "This is users page"
      }
   },
   computed: {
      users() {
         return this.$store.getters['users/users'];
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