<template>
  <article class="post">
    <header class="post-header">
      <div class="post-title">
        <nuxt-link to="/">
          <i class="el-icon-back"></i>
        </nuxt-link>
        <h1>Post title</h1>
      </div>
      <div class="post-info">
        <small>
          <i class="el-icon-time"></i>
          {{ new Date().toLocaleString() }}
        </small>
        <small>
          <i class="el-icon-view"></i>
          67
        </small>
      </div>
    </header>
    <div class="post-img">
      <img
        src="https://holidaygid.ru/wp-content/uploads/2016/03/berlin3.jpg"
        alt="https://holidaygid.ru/wp-content/uploads/2016/03/berlin3.jpg"
      />
    </div>
    <main class="post-content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
        deleniti ipsum impedit fugit blanditiis quod? Nisi optio nostrum
        inventore dignissimos cumque quis neque! Labore, illo! Est sint ipsa
        officiis amet.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
        deleniti ipsum impedit fugit blanditiis quod? Nisi optio nostrum
        inventore dignissimos cumque quis neque! Labore, illo! Est sint ipsa
        officiis amet.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
        deleniti ipsum impedit fugit blanditiis quod? Nisi optio nostrum
        inventore dignissimos cumque quis neque! Labore, illo! Est sint ipsa
        officiis amet.
      </p>
    </main>
    <footer>
      <transition-group name="fade" tag="div">
        <app-form
          v-if="isComment"
          @created="creatComment"
          key="1"
        >
        </app-form>
        <div key="2" class="comments" v-if="false" >
          <app-comment
            v-for="comment in 4"
            :key="comment"
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
    data() {
      return {
        isComment: true
      }
    },
    validate({ params }) {
      return !!params.id;
    },
    methods: {
      creatComment() {
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
