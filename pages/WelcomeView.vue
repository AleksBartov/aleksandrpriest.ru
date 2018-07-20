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
            
            <v-dialog v-model="dialog" persistent max-width="500px">
              <v-btn slot="activator" outline color="indigo lighten-1">здесь</v-btn>
              
              <v-container fluid fill-height>
                <v-layout align-center justify-center>
                  <v-flex xs12 sm12 md8>
                    <v-card class="elevation-24">
                      <v-toolbar color="indigo lighten-4">
                        <v-toolbar-title>Задать вопрос</v-toolbar-title>
                      </v-toolbar>
                      <v-card-text>
                        <v-form>
                          <v-text-field id="name" prepend-icon="person" v-model="имя" name="имя" label="Ваше имя" type="text"></v-text-field>
                          <v-text-field prepend-icon="email" v-model="email" name="email" label="Ваш e-mail" type="email"></v-text-field>
                          <v-textarea
                            outline
                            height="100px"
                            name="input-7-4"
                            label="Ваш вопрос"
                            value=""
                          ></v-textarea>
                        </v-form>
                      </v-card-text>
                      <v-card-actions >
                        <v-btn color="indigo lighten-4" dark @click.native="dialog = false">Отмена</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn color="indigo lighten-4" @click="sendingData">Задать</v-btn>
                      </v-card-actions>
                    </v-card>
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
                  </v-flex>
                </v-layout>
              </v-container>
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
      email: null,
      имя: null,
      snackbar: false,
      color: null,
      mode: 'multi-line',
      timeout: 2000,
      text: null     
    }),
    methods: {
      sendingData () {
        axios.post('/', {
          имя: this.имя,
          email: this.email
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
      },
      toClose(){
          var v = this;
          setTimeout(function () {
              v.dialog = false;
          }, 2500);
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
