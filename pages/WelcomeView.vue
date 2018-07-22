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
            <h1 class="white--text mb-2 display-1 text-xs-center shadow">Дорогой друг!</h1>
            <div class="subheading mb-3 text-xs-center indigo--text">Приветствую тебя на своем сайте</div>
            <div class="subheading mb-3 text-xs-center indigo--text">Здесь я стараюсь разьяснять церковную жизнь, а в особенности богослужебную ее сторону</div>
            <div class="subheading mb-3 text-xs-center indigo--text" >Задавай свои вопросы 
            
            <v-dialog v-model="dialog" persistent width="100vw">
              <v-btn slot="activator" outline color="indigo lighten-1">здесь</v-btn>
              

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
                  height="150px"
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
            </div>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout>
        <v-flex xs12 sm8 offset-sm2>
            <v-card>
              <v-container
                fluid
                grid-list-md
              >
                <v-layout row wrap>
                  <v-flex
                    v-for="card in cards"
                    v-bind="{ [`xs${card.flex}`]: true }"
                    :key="card.title"
                  >
                    <transition name="fade">
                      <v-card router :to="card.to" v-ripple>
                        <v-card-media
                          :src="card.src"
                          height="120px"
                        >
                          <v-container
                            fill-height
                            fluid
                            pa-2
                          >
                            <v-layout fill-height>
                              <v-flex>
                                <h2 class="font-weight-medium white--text shadow">{{ card.title }}</h2>
                              </v-flex>
                            </v-layout>
                          </v-container>
                        </v-card-media>
                      </v-card>
                    </transition>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>
      </section>
    </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data: () => ({
      cards: [
        { title: 'крещение ребенка',
         src: '/static/cross.jpeg',
         to: '/хочу_крестить_ребенка',
         textColor: 'font-weight-medium white--text',
         flex: 6 },
        { title: 'стать крестным',
        src: '/static/1.jpeg',
        to: '/просят_быть_крестным',
        textColor: 'subheading font-weight-medium white--text',
        flex: 6 },
        { title: 'креститься',
        src: '/static/4.jpg',
        to: '/хочу_креститься',
        textColor: 'font-weight-medium white--text',
        flex: 12 },
        { title: 'исповедаться',
        src: '/static/7.jpeg',
        to: '/хочу_исповедаться',
        textColor: 'subheading font-weight-medium red--text',
        flex: 6 },
        { title: 'боюсь исповеди',
        src: '/static/6.jpeg',
        to: '/боюсь_исповеди',
        textColor: 'subheading font-weight-medium white--text',
        flex: 6 },
        { title: 'неправильная исповедь',
        src: '/static/5.jpeg',
        to: '/ошибки_на_исповеди',
        textColor: 'subheading font-weight-medium white--text',
        flex: 12 }
      ],
      dialog: false,
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
    methods: {
      toClose(){
          var v = this;
          setTimeout(function () {
              v.dialog = false;
          }, 2500);
      },
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          axios.post('/', {
            name: this.name,
            email: this.email,
            textarea: this.textarea
          })
          .then(response => {
            this.text = response.data;
            this.color = 'success';
            this.toClose();
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
