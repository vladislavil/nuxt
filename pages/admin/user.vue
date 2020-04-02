<template>
  <el-form
    :style="{maxWidth: '500px', flexGrow: '1'}"
    :model="controls"
    :rules="rules"
    ref="form"
    class="form"
    @submit.native.prevent="onSubmit()"
  >
    <h2 class="from-title">Новый пользователь</h2>
    <el-form-item
      label="Логин"
      prop="login"
    >
      <el-input
        v-model.trim="controls.login"
      >
      </el-input>
    </el-form-item>
    <div class="mb2">
      <el-form-item
        label="Пароль"
        prop="password">
        <el-input
          type="password"
          v-model="controls.password"
        >
        </el-input>
      </el-form-item>
    </div>
    <el-form-item>
      <el-button
        type="primary"
        native-type="submit"
        round
        :loading="loading"
      >
        Добавить пользователя
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>

  export default {
    layout: "admin",
    data() {
      return {
        loading: false,
        controls: {
          login: 'fsdfsdf',
          password: 'fsdfsdfsd'
        },
        rules: {
          login: [
            { required: true, message: 'Ввледите ваш логин', trigger: 'blur' },
          ],
          password: [
            { required: true, message: 'Введите пароль', trigger: 'blur' },
            { min: 6, message: 'Пароль должен быть не менее 6 символов', trigger: 'blur'}
          ],
        }
      }
    },
    methods: {
      onSubmit() {
        this.$refs.form.validate( async (valid) => {
          if(valid) {
            this.loading = true;

            try {
              const formData = {
                login: this.controls.login,
                password: this.controls.password
              }

              await this.$store.dispatch('auth/createUser', formData);
              this.$message.success("Новый пользователь успешно создан");
              this.controls.login = '';
              this.controls.password = '';
              this.loading = false;

            }catch(e) {
              console.log(e)
              this.loading = false;

            }
          }
        })
      }
    }
  }

</script>
