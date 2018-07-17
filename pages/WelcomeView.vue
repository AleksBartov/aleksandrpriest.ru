<template>
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
        to: '/хочу_креститься',
        textColor: 'subheading font-weight-medium red--text',
        flex: 6 },
        { title: 'боюсь исповеди',
        src: '/static/6.jpeg',
        to: '/хочу_креститься',
        textColor: 'subheading font-weight-medium white--text',
        flex: 6 },
        { title: 'неправильная исповедь',
        src: '/static/5.jpeg',
        to: '/хочу_креститься',
        textColor: 'subheading font-weight-medium white--text',
        flex: 12 }
      ],
      vision: false     
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
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity 3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
