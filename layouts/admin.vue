<template>
  <div class="admin-container">
    <el-container :style="{height: '100%'}">
      <el-aside width="200px">
        <app-aside></app-aside>
      </el-aside>
      <el-main>
        <nuxt></nuxt>
      </el-main>
    </el-container>
  </div>
</template>

<script>

  import AppAside from "@/components/admin/Aside"

  export default {
    components: {
      AppAside
    },
    middleware: 'admin-auth'
  }

</script>

<style lang="sass" scoped>
  .admin-container
    width: 100%
    height: 100vh
</style>

