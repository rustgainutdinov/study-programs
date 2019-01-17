<template>
  <el-form
    label-position="top"
    label-width="100px"
    :model="formData"
    :rules="fromRules"
    ref="formData"
  >
    <el-form-item
      label="Логин или email"
      prop="login"
    >
      <el-input
        class="text-input"
        placeholder="Логин или email"
        v-model="formData.login"
      >
        <i slot="prefix" class="el-input__icon material-icons">alternate_email</i>
      </el-input>
    </el-form-item>

    <el-form-item
      label="Пароль"
      prop="pass"
    >
      <el-input
        class="text-input"
        placeholder="Пароль"
        type="password"
        v-model="formData.password"
      >
        <i slot="prefix" class="el-input__icon material-icons">lock</i>
      </el-input>
    </el-form-item>

    <el-button type="primary" @click="submitForm('formData')" class="bottom-button">Отправить</el-button>
    <el-button @click="resetForm('formData')" class="bottom-button">Очистить поля</el-button>
  </el-form>
</template>

<script>
  export default {
    name: "index",
    data() {
      var validateLogin = (rule, value, callback) => {
        var login = this.formData.login;
        if (login === '') {
          callback(new Error('Введите логин'));
        }
        if ((login.length < 6) || (login.length > 20)) {
          callback(new Error('Длина логина должна составлять от 6 до 20 символов'));
        }
        callback();
      };
      var validatePass = (rule, value, callback) => {
        var pass = this.formData.password;
        if (pass === '') {
          callback(new Error('Введите пароль'));
        }
        if ((pass.length < 6) || (pass.length > 20)) {
          callback(new Error('Длина логина должна составлять от 6 до 20 символов'));
        }
        callback();
      };
      return {
        formData: {
          login: '',
          password: ''
        },
        fromRules: {
          login: [
            {validator: validateLogin, trigger: 'blur'}
          ],
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ],
        },
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$axios.get('/login?data=' + JSON.stringify(this.formData), {withCredentials: true})
              .then(result => {
                console.log(result);
                if (result.data.statusCode === '023ms7fbgs54bw9y') {
                  this.openNotification('Вы успешно авторизированы.', 'Через 3 сек вы будете перенаправлены на главную страницу', 'success');
                  this.$store.dispatch('setUserData', result.data.data, 3600);
                  setTimeout(() => {
                    this.$router.push('/');
                  }, 3000);
                } else {
                  this.openNotification('Ошибка авторизации', 'Логин или пароль введены неверно. Попробуйте еще раз', 'error');
                  this.$refs.formData.clearValidate();
                }
              })
              .catch(result => {
                console.log(result);
              });
          } else {
            this.openNotification('Ошибка', 'Не все поля заполнены верно. Попробуйте еще раз', 'error');
          }
        });
      },

      resetForm(formName) {
        this.$refs[formName].resetFields();
        this.formData.password = '';
      },

      openNotification(title, message, type) {
        this.$notify({
          title, message, type
        });
      },
    }
  }
</script>

<style lang="scss">
  .el-form {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    .el-form-item {
      width: 100%;
      margin-bottom: 15px;

      .el-form-item__label {
        font-size: 16px;
        font-weight: 400;
        font-family: 'Montserrat', sans-serif;
        color: #333;
        padding-bottom: 0;
      }

      .el-form-item__content {
        .el-input {
          .el-input__inner {
            background: none;
            font: 500 14px/1em 'Montserrat', sans-serif;
          }

          .el-input__inner:focus {
            border: 1px solid #03a8f3;
          }

          i {
            font-size: 20px;
          }
        }
      }
    }
  }

  .bottom-button {
    margin-top: 10px;
  }
</style>
