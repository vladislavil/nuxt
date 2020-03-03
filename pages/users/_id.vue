<template>
   <div>
     <h1> User name: {{user.name}}</h1>
     <h2> User phone: {{user.phone}}</h2>
   </div>
</template>

<script>
export default {
   validate({params, error}) {
      try {
         return /^\d+$/.test(params.id);
      }catch(e) {
         error(e);
      }
   },
   async asyncData({params, error, $axios}) {
      try {
         const user = await $axios.$get(`https://jsonplaceholder.typicode.com/users/${params.id}`);
         return {user};
      }catch(e) {
         error(e);
      }
   },
}
</script>