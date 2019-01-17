<template>
  <div>
    <el-form
      label-position="top"
      label-width="100px"
      :model="formData"
      :rules="fromRules"
      ref="formData"
    >
      <el-steps :active="activeStep" finish-status="success" simple class="hidden-xxs-only">
        <el-step title="Шаг 1"></el-step>
        <el-step title="Шаг 2"></el-step>
        <el-step title="Шаг 3"></el-step>
      </el-steps>

      <el-form-item
        label="Имя"
        class="half-field-left"
        v-show="activeStep === 0"
        prop="name"
      >
        <el-input
          class="text-input"
          placeholder="Имя"
          v-model="formData.name"
        >
          <i slot="prefix" class="el-input__icon material-icons">tag_faces</i>
        </el-input>
      </el-form-item>

      <el-form-item
        label="Фамилия"
        class="half-field-right"
        v-show="activeStep === 0"
        prop="surname"
      >
        <el-input
          class="text-input"
          placeholder="Фамилия"
          v-model="formData.surname"
        ></el-input>
      </el-form-item>

      <el-form-item
        label="E-mail"
        v-show="activeStep === 0"
        prop="email"
      >
        <el-input
          class="text-input"
          placeholder="example@domain.com"
          v-model="formData.email"
        >
          <i slot="prefix" class="el-input__icon material-icons">alternate_email</i>
        </el-input>
      </el-form-item>

      <el-form-item
        label="Логин"
        v-show="activeStep === 0"
        prop="login"
      >
        <el-input
          class="text-input"
          placeholder="Логин"
          v-model="formData.login"
        >
          <i slot="prefix" class="el-input__icon material-icons">person</i>
        </el-input>
      </el-form-item>

      <el-form-item
        label="Дата рождения"
        class="half-field-left"
        v-show="activeStep === 1"
        prop="birthday"
      >
        <el-date-picker
          type="date"
          placeholder="Выберите дату"
          style="width: 100%;"
          v-model="formData.birthday"
          format="yyyy-MM-dd"
          value-format="yyyy-MM-dd"
        >
        </el-date-picker>
      </el-form-item>

      <el-form-item
        label="Пол"
        class="half-field-right"
        v-show="activeStep === 1"
        prop="sex"
      >

        <el-radio
          v-for="sexItem in sexList"
          :key="sexItem.sexId"
          v-model="formData.sex"
          :label="sexItem.sexId"
          border
        >{{ sexItem.title }}
        </el-radio>
      </el-form-item>

      <el-form-item
        label="Сведения об образовании"
        v-show="activeStep === 1"
        prop="placeOfStudyName"
      >
        <el-input
          class="text-input input-with-select"
          placeholder="Место обучения"
          v-model="formData.placeOfStudyName"
        >
          <el-select
            v-model="formData.placeOfStudyType"
            slot="prepend"
            default-first-option
          >

            <el-option
              v-for="typeOfEducation in typeOfEducationList"
              :key="typeOfEducation.typeId"
              :label="typeOfEducation.title"
              :value="typeOfEducation.typeId"
            ></el-option>
          </el-select>
        </el-input>
      </el-form-item>

      <el-form-item
        label="Хобби"
        v-show="activeStep === 1"
      >
        <el-tag
          v-for="tag in formData.hobbies"
          :key="tag"
          closable
          :disable-transitions="false"
          @close="handleClose(tag)">
          {{tag}}
        </el-tag>
        <el-input
          class="input-new-tag"
          v-if="newHobbyInputVisible"
          v-model="newHobbyInput"
          ref="saveTagInput"
          size="small"
          @keyup.enter.native="handleInputConfirm"
          @blur="handleInputConfirm"
        >
        </el-input>
        <el-button
          v-else
          class="button-new-tag"
          size="small"
          @click="showInput"
        >
          + Добавить
        </el-button>
      </el-form-item>

      <el-form-item
        label="Пароль"
        class="half-field-left"
        v-show="activeStep === 2"
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

      <el-form-item
        label="Введите пароль повторно"
        class="half-field-right"
        v-show="activeStep === 2"
        prop="passConfirm"
      >
        <el-input
          class="text-input"
          placeholder="Пароль"
          type="password"
          v-model="formData.confirmPassword"
        ></el-input>
        <i slot="prefix" class="el-input__icon material-icons">lock</i>
      </el-form-item>
      <el-form-item
        label="Согласие на обработку персональных данных"
        v-show="activeStep === 2"
        prop="consentToTheProcessingOfPersonalData"
      >
        <el-switch
          v-model="formData.personalDataAgree"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
      </el-form-item>

      <el-form-item
        v-show="activeStep === 2"
      >
        <el-button type="primary" @click="submitForm('formData')">Отправить</el-button>
        <el-button @click="resetForm('formData')" class="hidden-xxs-only">Очистить поля</el-button>
      </el-form-item>

      <el-button-group class="button-group">
        <el-button
          type="primary"
          icon="el-icon-arrow-left"
          @click="changeStep(-1)"
        >Назад
        </el-button>
        <el-button
          type="primary"
          @click="changeStep(1)"
        >Далее<i class="el-icon-arrow-right el-icon-right"></i>
        </el-button>
      </el-button-group>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      var checkEmail = (rule, value, callback) => {
        this.$axios.get('/execute?query=getUsersWithSameEmail&data={"email":"' + this.formData.email + '"}')
          .then(result => {
            if (result.data.statusCode !== '023ms7fbgs54bw9y') {
              callback(new Error('Ошибка при подключении к серверу'));
            }
            if (Number(result.data.data[0].counter) > 0) {
              callback(new Error('Этот email уже занят'));
              this.openNotification('Ошибка', 'Этот email уже используется.', 'error');
            }
            callback();
          })
          .catch(result => {
            console.log(result);
            callback(new Error('Ошибка при выполнении запроса'));
          });
      };

      var checkLogin = (rule, value, callback) => {
        if (/^[a-zA-Z0-9]+$/.test(this.formData.login) === false) {
          callback(new Error('Логин может содержать только символы латинского алфавита и цифры'));
        }
        this.$axios.get('/execute?query=getUsersWithSameLogin&data={"login":"' + this.formData.login + '"}')
          .then(result => {
            if (result.data.statusCode !== '023ms7fbgs54bw9y') {
              callback(new Error('Ошибка при подключении к серверу'));
            }
            if (Number(result.data.data[0].counter) > 0) {
              callback(new Error('Этот логин уже занят'));
              this.openNotification('Ошибка', 'Этот логин уже используется', 'error');
            }
            callback();
          })
          .catch(result => {
            console.log(result);
            callback(new Error('Ошибка при выполнении запроса'));
          });
      };

      var validatePass = (rule, value, callback) => {
        var pass = this.formData.password;
        if (pass === '') {
          callback(new Error('Введите пароль'));
        }
        if ((pass.length < 6) || (pass.length > 20)) {
          callback(new Error('Длина пароля должна составлять от 6 до 20 символов'));
        }
        if (this.formData.confirmPassword !== '') {
          this.$refs.formData.validateField('passConfirm');
        }
        callback();
      };

      var validatePassConfirm = (rule, value, callback) => {
        if (this.formData.confirmPassword === '') {
          callback(new Error('Введите пароль'));
        }
        if (this.formData.confirmPassword !== this.formData.password) {
          this.openNotification('Ошибка', 'Пароли не совпадают', 'error');
          callback(new Error('Пароли не совпадают'));
        }
        callback();
      };

      var validatePersonalDataAgree = (rule, value, callback) => {
        if (this.formData.personalDataAgree == false) {
          callback(new Error('Вы должны дать согласие на обработку персональных данных'));
        }
        callback();
      };

      return {
        formData: {
          name: '',
          surname: '',
          email: '',
          login: '',
          birthday: '',
          sex: '',
          placeOfStudyType: '9402500774537179',
          placeOfStudyName: '',
          hobbies: [],
          password: '',
          confirmPassword: '',
          personalDataAgree: '0'
        },
        fromRules: {
          name: [
            {required: true, message: 'Введите имя', trigger: 'blur'},
          ],
          surname: [
            {required: true, message: 'Введите фамилию', trigger: 'blur'},
          ],
          email: [
            {required: true, message: 'Введите email', trigger: 'blur'},
            {type: 'email', message: 'Введите корректный email', trigger: 'blur'},
            {validator: checkEmail, trigger: 'blur'},

          ],
          login: [
            {required: true, message: 'Введите логин', trigger: 'blur'},
            {validator: checkLogin, trigger: 'blur'},
            {min: 6, max: 20, message: 'Длина логина должна быть от 6 до 20 символов', trigger: 'blur'}
          ],
          birthday: [
            {required: true, message: 'Выберите дату рождения', trigger: 'blur'}
          ],
          sex: [
            {required: true, message: 'Выберите пол', trigger: 'blur'},
          ],
          placeOfStudyName: [
            {required: true, message: 'Укажите ваше образование', trigger: 'blur'},
          ],
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ],
          passConfirm: [
            {validator: validatePassConfirm, trigger: 'blur'}
          ],
          consentToTheProcessingOfPersonalData: [
            {validator: validatePersonalDataAgree, trigger: 'blur'}
          ]
        },
        activeStep: 0,
        newHobbyInput: '',
        newHobbyInputVisible: false,
        typeOfEducationList: [
          {typeId: '9402500774537179', title: 'Общее'},
          {typeId: '1433816368734272', title: 'Среднее'},
          {typeId: '3386530432532121', title: 'Профессиональное'},
          {typeId: '6410235149420896', title: 'Высшее'}
        ],
        sexList: [
          {sexId: '7935428345970590', title: 'мужчина'},
          {sexId: '6588040198952209', title: 'женщина'}
        ]
      }
    },
    methods: {
      changeStep(num) {
        if (!(((this.activeStep + num) > 2) || ((this.activeStep + num) < 0))) {
          this.activeStep += num;
        }
      },

      handleClose(tag) {
        this.formData.hobbies.splice(this.formData.hobbies.indexOf(tag), 1);
      },

      showInput() {
        this.newHobbyInputVisible = true;
        this.$nextTick(() => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.newHobbyInput;
        if (inputValue) {
          this.formData.hobbies.push(inputValue);
        }
        this.newHobbyInputVisible = false;
        this.newHobbyInput = '';
      },

      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$axios.get('/register?data=' + JSON.stringify(this.formData), {withCredentials: true})
              .then(result => {
                if (result.data.statusCode === '023ms7fbgs54bw9y') {
                  this.openNotification('Вы успешно зарегистрированы.', 'Через 3 сек вы будете перенаправлены на главную страницу', 'success');
                  this.$store.dispatch('setUserData', result.data.data);
                  setTimeout(() => {
                    this.$router.push('/');
                  }, 3000);
                } else {
                  this.openNotification('Ошибка регистрации', 'Попробуйте еще раз', 'error');
                  this.$refs.formData.clearValidate();
                }
                console.log(result);
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
        this.formData.confirmPassword = '';
        this.formData.hobbies = [];
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

    .el-steps {
      width: 100%;
      margin: 30px 0 10px;
    }

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

        .el-date-editor {
          i {
            font-size: 16px;
          }
        }

        .input-with-select {
          .el-input-group__prepend {
            background-color: #fff;
          }

          .el-input {
            width: 120px;

            .el-input__inner:focus {
              border: none;
            }
          }
        }

        .el-tag {
          font-family: 'Montserrat', sans-serif;
          font-size: 12px;
          font-weight: 500;
          margin-right: 10px;
        }

        .button-new-tag {
          padding-top: 0;
          padding-bottom: 0;
          font-family: 'Montserrat', sans-serif;
          font-size: 12px;
          font-weight: 500;
          width: 130px;
          height: 32px;
        }

        .button-new-tag:last-child {
          margin-left: -5px;
        }

        .button-new-tag:first-child {
          margin-left: 0;
        }

        .input-new-tag {
          margin-bottom: -2px;
          width: 130px;
          vertical-align: bottom;
          font-family: 'Montserrat', sans-serif;
          font-size: 12px;
          font-weight: 500;
        }

        .input-new-tag:last-child {
          margin-left: -5px;
        }

        .input-new-tag:first-child {
          margin-left: 0;
        }
      }
    }

    .submit {
      font: 500 14px/1em 'Montserrat', sans-serif;
      border: none;
      background: #03a8f3;
      color: #eeeeee;
    }

    .changePage {
      font: 500 14px/1em 'Montserrat', sans-serif;
      border: none;
      background: none;
      color: #03a8f3;
    }

    .half-field-left {
      box-sizing: border-box;
      width: 50%;
      padding-right: 12px;
    }

    .half-field-right {
      box-sizing: border-box;
      width: 50%;
      padding-left: 12px;
    }

    .button-group {
      padding-top: 30px;
      margin: auto;
    }
  }

  @media screen and (max-width: 767px) {
    .el-form {
      .half-field-left {
        width: 100%;
        padding-right: 0;
      }

      .half-field-right {
        width: 100%;
        padding-left: 0;
      }
    }
  }
</style>
