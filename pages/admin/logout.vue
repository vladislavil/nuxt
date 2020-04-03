<template>
  <div>Данные очищаются</div>
</template>

<script>

  export default {
    layout: "admin",
    middleware: 'admin-auth',
    mounted() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/admin/login?message=logout')
    }
  }

</script>
