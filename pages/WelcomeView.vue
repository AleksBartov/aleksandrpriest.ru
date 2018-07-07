<template>
  <v-layout>
  <div class="fon" v-if="fonPage">
    <Vuetify />
  </div>
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
              <v-card>
                <v-card-media
                  :src="card.src"
                  height="50vh"
                  v-ripple
                >
                  <v-container
                    fill-height
                    fluid
                    pa-2
                  >
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline white--text font-weight-bold" v-text="card.title"></span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>

                <v-card-title primary-title>
                  <div>
                    <div v-text="card.text"></div>
                  </div>
                </v-card-title>

                <v-card-actions>
                  <v-btn flat color="indigo" router :to="card.to">Продолжить</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        { title: 'Хочу крестить ребенка',
         src: '/static/baby.jpg',
         to: '/хочу_крестить_ребенка',
         text: 'могу ли я крестить его? в любое ли время это возможно? как подготовить себя и ребенка к крещению? ...',
         flex: 12 },
        { title: 'Просят быть крестным',
         src: '/static/parents.jpg',
         to: '/просят_быть_крестным',
          text: 'могу ли я быть крестным? что я должен делать во время крещения? как я должен буду учавствовать в жизни крестника? ...',
           flex: 12 },
        { title: 'Хочу креститься',
         src: '/static/cross.jpeg',
         to: '/хочу_креститься',
          text: 'крестят ли меня, если я попрошу? нужно ли мне креститься? что я должен буду делать, крестившись? ...',
           flex: 12 }
      ],
      fonPage: true
    }),
    methods:{
        sayHi() {
          var v = this;
          setTimeout(function () {
            v.fonPage = false;
        }, 8000);
      }
    },
    mounted () {
      this.sayHi()
    }
  }
</script>

<style scoped>
.fon {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  background-color: #7986CB;
}
</style>