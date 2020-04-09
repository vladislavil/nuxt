<template>
  <el-form
    :style="{maxWidth: '500px'}"
    :model="controls"
    :rules="rules"
    ref="form"
    class="form"
    @submit.native.prevent="onSubmit()"
  >

    <h2 class="mb">Создать новый пост</h2>

    <el-form-item
      label="Название поста"
      prop="title"
    >
      <el-input
        v-model="controls.title"
      >
      </el-input>
    </el-form-item>
    <el-form-item
      label="Текст в формате .md или .html"
      prop="text"
    >
      <el-input
        type="textarea"
        resize="none"
        rows="8"
        v-model="controls.text"
      >
      </el-input>
    </el-form-item>
    <el-upload
      class="upload-demo mb2"
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-change="imageChange"
      :auto-upload="false"
      ref="upload"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">Перетащите картинку или <em>нажмите</em></div>
      <div class="el-upload__tip" slot="tip">файлы с расширением jpg/png</div>
    </el-upload>
    <div class="controls">
      <el-dialog title="Предпросмотр" :visible.sync="previewDialog">
        <div :key="controls.text">
          <vue-markdown>{{controls.text}}</vue-markdown>
        </div>
      </el-dialog>
      <el-form-item>
        <el-button
          type="primary"
          native-type="submit"
          round
          :loading="loading"
        >
          Создать пост
        </el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="success" round @click="previewDialog = !previewDialog">
          Предпросмотр
        </el-button>
      </el-form-item>
    </div>
  </el-form>
</template>

<script>

  export default {
    layout: "admin",
    middleware: 'admin-auth',
    head() {
      return {
        title: `Новый пост | ${process.env.appName}`
      }
    },
    data() {
      return {
        image: null,
        previewDialog: false,
        loading: false,
        controls: {
          title: '',
          text: ''
        },
        rules: {
          text: [
            { required: true, message: 'Текст не должен быть пустым', trigger: 'blur' },
          ],
          title: [
            { required: true, message: 'Название поста не может быть пустым', trigger: 'blur' },
          ]
        }
      }
    },
    methods: {
      imageChange(file, fileList) {
        this.image = file.raw;
      },
      onSubmit() {
        this.$refs.form.validate(async valid => {
          if(valid && this.image) {
            this.loading = true;

            const fromData = {
              title: this.controls.title,
              text: this.controls.text,
              image: this.image
            }

            try {
              await this.$store.dispatch('post/createPost', fromData);
              this.controls.text = '';
              this.controls.title = '';
              this.image = null;
              this.$refs.upload.clearFiles();
              this.$message.success("Пост успешно добавлен");
              this.loading = false;
            } catch(e) {
              this.loading = false;
            }


          }else {
            this.$message.warning("Форма не валидна")
          }
        })
      },
    }
  }

</script>

<style lang="sass" scoped>
  .controls
    display: flex
    justify-content: space-between

    .el-form-item
      margin-bottom: 0
</style>
