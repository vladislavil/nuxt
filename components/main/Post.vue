<template>
  <el-card
    shadow="hover"
    :body-style="{padding: 0}"
    class="post"
  >
    <header slot="header" class="post-header">
      <h3>
        {{post.title}}
      </h3>
      <small>
        <i class="el-icon-time"></i>
        {{ new Date(post.date).toLocaleString() }}
      </small>
    </header>
    <div class="post-body">
      <div class="post-wrapper">
        <img :src="post.imageUrl">
      </div>
    </div>
    <footer class="post-footer">
      <el-button round @click="openPost">Открыть</el-button>
      <span>
        <i class="el-icon-s-comment"></i>
        {{post.comments.length}}
      </span>
    </footer>
  </el-card>
</template>

<script>
  export default {
    props: ['post'],
    methods: {
      openPost() {
        const id = this.post._id;
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
