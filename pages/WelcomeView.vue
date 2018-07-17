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
                          <span :class="card.textColor" v-text="card.title"></span>
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
         textColor: 'font-weight-medium white--text text-right',
         flex: 6 },
        { title: 'стать крестным',
        src: '/static/1.jpeg',
        to: '/просят_быть_крестным',
        textColor: 'subheading font-weight-medium white--text',
        flex: 6 },
        { title: 'креститься',
        src: '/static/4.jpg',
        to: '/хочу_креститься',
        textColor: 'font-weight-medium white--text text-right',
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
  .fade-enter-active, .fade-leave-active {
    transition: opacity 3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
