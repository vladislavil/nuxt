<template>
  <div class="empty-layout">
    <nuxt>
    </nuxt>
  </div>
</template>

<script>
  export default {
    computed: {
      error() {
        return this.$store.getters['error'];
      }
    },
    watch: {
      error(value) {
        this.$message.error(value.response.data.message);
      }
    }
  }
</script>

<style lang="sass" scoped>
  .empty-layout
    height: 100vh
    display: flex
    justify-content: center
    align-items: center
</style>
