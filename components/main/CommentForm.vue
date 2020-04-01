<template>
  <el-form 
    :model="controls" 
    :rules="rules" 
    ref="form" 
    class="form"
    @submit.native.prevent="onSubmit($event)"
  >
    <h2 class="from-title">Добавить комментарий</h2>
    <el-form-item 
      label="Ваше имя" 
      prop="name"
    >
      <el-input 
        v-model.trim="controls.name"
      >
      </el-input>
    </el-form-item>
    <el-form-item 
      label="Текст комментария" 
      prop="text">
      <el-input 
        type="textarea" 
        rows="2" resize="none" 
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
        Добавить комментарий
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    data() {
      return {
        loading: false,
        controls: {
          name: 'fsdfsdf',
          text: 'fsdfsdfsd'
        },
        rules: {
          name: [
            { required: true, message: 'Введите ваше имя', trigger: 'blur' },
          ],
          text: [
            { required: true, message: 'Введите комментарий', trigger: 'blur' }
          ],
        }
      }
    },
    methods: {
      onSubmit(e) {
        this.$refs.form.validate((valid) => {
          if (valid) {


            this.loading = true;
            console.log(e)
            const formData = {
              name: this.controls.name,
              text: this.controls.text,
              postId: ''
            }
            
            try {
              this.$message.success('Комментарий успешно добавлен');
              this.$emit('created');
              
            } catch(e) {
              this.loading = false;
            }
            
          }
        });
      }
    }
  }
</script>

<style lang="sass" scoped>
</style>