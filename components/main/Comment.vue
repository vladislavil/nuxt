<template>

  <el-card class="comment">
    <div class="comment-header">
      <span>Person name</span>
      <span>
        <i class="el-icon-time"></i>
        {{ new Date().toLocaleString() }}
      </span>
    </div>
    <div class="comment-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </div>
  </el-card>

</template>
  
<script>
  export default {
    
  }
</script>

<style lang="sass" scoped>

  .comment 
    margin-bottom: 1rem

    &:last-child
     margin-bottom: 0 

  .comment-header
    display: flex
    justify-content: space-between
    align-items: center
    margin-bottom: 0.5rem
    font-size: 0.8rem

  .comment-text
    

</style>