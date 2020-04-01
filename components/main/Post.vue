<template>
  <el-card
    shadow="hover"
    :body-style="{padding: 0}"
    class="post"
  > 
    <header slot="header" class="post-header">
      <h3>
        Post title
      </h3>
      <small>
        <i class="el-icon-time"></i>
        {{ new Date().toLocaleString() }}
      </small>    
    </header>
    <div class="post-body">
      <div class="post-wrapper">
        <img src="https://holidaygid.ru/wp-content/uploads/2016/03/berlin3.jpg" 
          alt="https://holidaygid.ru/wp-content/uploads/2016/03/berlin3.jpg" 
          class="post-img"
        >
      </div>
    </div> 
    <footer class="post-footer">
      <el-button round @click="openPost">Открыть</el-button>
      <span>
        <i class="el-icon-s-comment"></i>
        12
      </span>
    </footer> 
  </el-card>
</template>

<script>
  export default {
    methods: {
      openPost() {
        const id = "test";
        this.$router.push(`/post/${id}`)
      }
    }
  }
</script>

<style lang="sass" scoped>
  .post 
    margin-bottom: 2rem

    &:last-child
      margin: 0

  .post-footer
    display: flex
    justify-content: space-between
    align-items: center
    padding: 1rem 20px

  .post-header 
    display: flex
    justify-content: space-between
    align-items: center
</style>