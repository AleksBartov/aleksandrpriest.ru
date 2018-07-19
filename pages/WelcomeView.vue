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
              <v-card>
                <v-card-title>
                  <span class="headline">Задать вопрос</span>
                </v-card-title>
                <v-card-text>
                  <v-container grid-list-md>
                    <v-layout wrap>
                      <v-flex xs12 >
                        <v-text-field label="Ваше имя" required></v-text-field>
                      </v-flex>
                      <v-flex xs12>
                        <v-text-field class="mt-0" label="Ваш e-mail" type="email" required></v-text-field>
                      </v-flex>
                      <v-flex xs12>
                        <v-textarea
                          outline
                          height="100px"
                          name="input-7-4"
                          label="Ваш вопрос"
                          value=""
                        ></v-textarea>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" flat @click.native="dialog = false">Отмена</v-btn>
                  <v-btn color="blue darken-1" flat @click.native="dialog = false">Задать</v-btn>
                </v-card-actions>
              </v-card>
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
      dialog: false     
    }),
    methods:{
        toShowLinks() {
          var v = this;
          setTimeout(function () {
              v.vision = true;
          }, 1000);
      }
    },
    mounted() {
      this.toShowLinks()
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
