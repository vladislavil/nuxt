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
      <img src="https://media.radissonhotels.net/image/Destination-Pages/Localattraction/16256-118729-f63244989_3XL.jpg?impolicy=HomeHero" 
        alt="https://media.radissonhotels.net/image/Destination-Pages/Localattraction/16256-118729-f63244989_3XL.jpg?impolicy=HomeHero" 
        class="post-img"
      >
    </div> 
    <footer class="post-footer">
      <el-button round>Открыть</el-button>
      <span>
        <i class="el-icon-s-comment"></i>
        12
      </span>
    </footer> 
  </el-card>
</template>

<script>
  export default {
    
  }
</script>

<style lang="sass" scoped>
  .post 
    margin-bottom: 2rem

    &:last-child
      margin: 0

  .post-body 

  .post-header 
    display: flex
    justify-content: space-between
</style>