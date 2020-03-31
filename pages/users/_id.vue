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
   async asyncData({params, error, store}) {
      try {
         let user = await store.dispatch('users/fetchUserById', params.id);
         return {user};
      }catch(e) {
         error(e);
      }
   },
}
</script>