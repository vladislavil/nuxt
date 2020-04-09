<template>
  <article class="post">
    <header class="post-header">
      <div class="post-title">
        <nuxt-link to="/">
          <i class="el-icon-back"></i>
        </nuxt-link>
        <h1>{{post.title}}</h1>
      </div>
      <div class="post-info">
        <small>
          <i class="el-icon-time"></i>
          {{ new Date(post.date).toLocaleString() }}
        </small>
        <small>
          <i class="el-icon-view"></i>
          {{post.views}}
        </small>
      </div>
    </header>
    <div class="post-img">
      <img
        :src="post.imageUrl"
        :alt="post.imageUrl"
      />
    </div>
    <main class="post-content">
       <vue-markdown>{{post.text}}</vue-markdown>
    </main>
    <footer>
      <transition-group name="fade" tag="div">
        <app-form
          v-if="isComment"
          @created="creatComment"
          key="1"
          :postId="post._id"
        >
        </app-form>
        <div key="2" class="comments" v-if="post.comments.length" >
          <app-comment
            v-for="comment in post.comments"
            :key="comment._id"
            :comment="comment"
          >
          </app-comment>
        </div>
        <div key="3" class="text-center" v-else>Комментариев нет</div>
      </transition-group>
    </footer>
  </article>
</template>

<script>

  import AppComment from "@/components/main/Comment"
  import AppForm from "@/components/main/CommentForm"


  export default {

    components: {
      AppComment,
      AppForm
    },
    async asyncData({store, params}) {
      const post = await store.dispatch('post/fetchById', params.id);
      await store.dispatch('post/addView', post)
      return {
        post: {...post, views: ++post.views}
      }
    },
    head() {
      return {
        title: `${this.post.title} | ${process.env.appName}`
      }
    },
    data() {
      return {
        isComment: true
      }
    },
    validate({ params }) {
      return !!params.id;
    },
    methods: {
      creatComment(comment) {
        this.post.comments.unshift(comment);
        this.isComment = false;
      }
    }
  };
</script>

<style lang="sass" scoped>

  .comments, .form, .text-center
    transition: all 1s;

  .fade-leave
    opacity: 1

  .fade-enter, .fade-leave-to
    opacity: 0

  .fade-leave-active-to
    position: absolute

  .post
    max-width: 600px
    margin: 0 auto

  .post-title
    display: flex
    justify-content: space-between
    align-items: center
    margin-bottom: 1rem

  .post-header
    margin-bottom: 1.5rem

  .post-img
    margin-bottom: 2rem

  .post-info
    display: flex
    justify-content: space-between
    align-items: center

  .post-content
    margin-bottom: 2rem


</style>
