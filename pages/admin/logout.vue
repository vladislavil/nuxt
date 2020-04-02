<template>
  <div>Данные очищаются</div>
</template>

<script>

  export default {
    layout: "admin",
    mounted() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/admin/login?message=logout')
    }
  }

</script>
