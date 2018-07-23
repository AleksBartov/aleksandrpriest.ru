<template>
  <div class="mt-0">
      <section>
        <v-parallax src="/static/priest_for.jpg" height="500">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
              <v-card class="mb-3">
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-2">недавние вопросы</h3>
                    <div>{{ listOfQuestions }}</div>
                  </div>
                </v-card-title>
              </v-card>

            <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
              <v-btn slot="activator" outline color="indigo lighten-1">Задать вопрос</v-btn>

            <v-form ref="form" v-model="valid" lazy-validation class="indigo lighten-4 pa-4">
                <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  :counter="10"
                  label="Ваше имя"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="Ваш e-mail"
                  type="email"
                  required
                ></v-text-field>
                <v-textarea
                  outline
                  class="pt-3 pb-0"
                  v-model="textarea"
                  height="250px"
                  name="input-7-4"
                  :rules="textareaRules"
                  label="Ваш вопрос"
                  value=""
                ></v-textarea>
              <v-layout column >
                <v-layout row >
                  <v-btn @click="clear" class="mb-2" color="warning">очистить</v-btn>
                  <v-spacer></v-spacer>
                  <v-btn @click="dialog = false" class="mb-2" color="error">отмена</v-btn>
                </v-layout>
                <v-btn
                    :disabled="!valid"
                    @click="submit"
                    color="success"
                  >
                    задать
                  </v-btn>
                </v-layout>
              </v-form>
                    <v-snackbar
                      :timeout="timeout"
                      :color="color"
                      :multi-line="mode"
                      top
                      v-model="snackbar"
                    >
                      {{ text }}
                      <v-btn dark flat @click.native="snackbar = false">закрыть</v-btn>
                    </v-snackbar>
            </v-dialog>
          </v-layout>
        </v-parallax>
      </section>
    </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data: () => ({
      dialog: false,
      listOfQuestions: null,
      snackbar: false,
      color: null,
      mode: 'multi-line',
      timeout: 2000,
      text: null,
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Необходимо ввести имя',
        v => (v && v.length <= 10) || 'Имя не может быть более 10 символов'
      ],
      email: '',
      emailRules: [
        v => !!v || 'Необходимо ввести e-mail',
        v => /.+@.+/.test(v) || 'E-mail должен быть корректный'
      ],
      textarea: '',
      textareaRules: [
        v => !!v || 'Необходимо ввести вопрос'
      ] 
    }),
    mounted() {
      axios
        .get('/question_answer')
        .then(response => (this.listOfQuestions = response.data))
        .catch(error => (this.listOfQuestions = error.response.data));
    },
    methods: {
      toClose(){
          var v = this;
          setTimeout(function () {
              v.dialog = false;
          }, 2100);
      },
      toUpdateData() {
        axios
          .get('/question_answer')
          .then(response => (this.listOfQuestions = response.data))
          .catch(error => (this.listOfQuestions = error.response.data));
      },
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          axios.post('/question_answer', {
            name: this.name,
            email: this.email,
            textarea: this.textarea
          })
          .then(response => {
            this.text = response.data;
            this.color = 'success';
            this.toClose();
            this.toUpdateData();
          })
          .catch(error => {
            this.text = error.response.data;
            this.color = 'error';
          });
          this.snackbar = true;
          return this.text, this.color;
        }
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>

<style scoped>
  
  .shadow {
    text-shadow: 3px 1px 1px rgba(37, 7, 7, 1);
  }

  .noShadow {
    text-shadow: none;
  }

</style>
