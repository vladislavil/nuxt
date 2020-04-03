<template>
  <div>
    <el-breadcrumb class="mb2" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item to="/admin/list">Посты</el-breadcrumb-item>
      <el-breadcrumb-item>{{post.title}}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form
      :model="controls"
      :rules="rules"
      ref="form"
      class="form"
      @submit.native.prevent="onSubmit()"
    >
      <!-- <h2 class="from-title mb2">Редактировать пост "{{post.title}}"</h2> -->
      <el-form-item
        label="Текст в формате .md или .html"
        prop="text"
      >
        <el-input
          type="textarea"
          resize="none"
          rows="10"
          v-model="controls.text"
        >
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          native-type="submit"
          round
          :loading="loading"
        >
          Добавить
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    layout: "admin",
    validate({params}) {
      return Boolean(params.id)
    },
    head() {
      return {
        title: `Пост | ${this.post.title}`
      }
    },
    async asyncData({store, params}) {
      const post = await store.dispatch('post/fetchById', params.id);
      return {post};
    },
    data() {
      return {
        loading: false,
        controls: {
          text: 'fsdfsdf'
        },
        rules: {
          text: [
            { required: true, message: 'Текст не должен быть пустым', trigger: 'blur' },
          ]
        }
      }
    },
    methods: {
      onSubmit() {
        this.$refs.form.validate( async valid => {
          if(valid) {
            this.loading = true;

            const formData = {
              text: this.controls.text,
              id: this.post._id
            }

            try {
              await this.$store.dispatch("post/updatePost", formData);
              this.$message.success("Пост успешно обновлен!");
              this.loading = false;
            } catch(e) {
              this.loading = false;
            }
          }
        })
      }
    }
  }
</script>
