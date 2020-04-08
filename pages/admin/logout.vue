<template>
  <div>Данные очищаются</div>
</template>

<script>

  export default {
    layout: "admin",
    middleware: 'admin-auth',
    mounted() {
      this.$store.dispatch('auth/logOut');
      this.$router.push('/admin/login?message=logout')
    }
  }

</script>
