<template>
  <v-app light>
    <v-navigation-drawer
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      class="indigo lighten-5"
      app
    >
      <v-list>
      <v-list-tile router :to="home">
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-title >Главная</v-list-tile-title>
      </v-list-tile>

      <v-list-group
        prepend-icon="flare"
      >
        <v-list-tile slot="activator">
          <v-list-tile-title>Таинства Церкви</v-list-tile-title>
        </v-list-tile>

        <v-list-group
          no-action
          sub-group
        >
          <v-list-tile slot="activator">
            <v-list-tile-title>Крещение</v-list-tile-title>
          </v-list-tile>

          <v-list-tile
            v-for="(baptiz, i) in baptizes"
            :key="i"
            @click=""
            router 
            :to="baptiz[2]"
          >
            <v-list-tile-title v-text="baptiz[0]" ></v-list-tile-title>
            <v-list-tile-action>
              <v-icon v-text="baptiz[1]"></v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>

        <v-list-group
          sub-group
          no-action
        >
          <v-list-tile slot="activator">
            <v-list-tile-title>Исповедь</v-list-tile-title>
          </v-list-tile>

          <v-list-tile
            v-for="(testimonial, i) in testimonials"
            :key="i"
            @click=""
            router 
            :to="testimonial[2]"
          >
            <v-list-tile-title v-text="testimonial[0]"></v-list-tile-title>
            <v-list-tile-action>
              <v-icon v-text="testimonial[1]"></v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
      </v-list-group>
    </v-list>
      
      <v-divider></v-divider>
      <v-spacer></v-spacer>
      <v-divider></v-divider>


      <v-flex xs8 offset-xs2 mt-5>
      <v-card color="primary lighten-1">

          <v-dialog
            v-model="dialog"
            width="100%"
          >
            <v-btn
              v-for="link in links"
              :key="link"
              color="white"
              slot="activator"
              flat
              round
            >
              {{ link }}
            </v-btn>

            <v-card>
              <v-card-title
                class="headline grey lighten-2"
                primary-title
              >
                Поддержка сайта
              </v-card-title>

              <iframe src="https://money.yandex.ru/quickpay/shop-widget?writer=buyer&targets=&targets-hint=%D0%9F%D0%BE%D0%B4%D0%B4%D0%B5%D1%80%D0%B6%D0%BA%D0%B0%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0%20%3C%20%D0%B2%D0%B0%D1%88%D0%B5%20%D0%B8%D0%BC%D1%8F%20%3E&default-sum=100&button-text=14&payment-type-choice=on&mobile-payment-type-choice=on&hint=&successURL=&quickpay=shop&account=410012494405212" width="100%" height="231" frameborder="0" allowtransparency="true" scrolling="no"></iframe>


              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  flat
                  @click="dialog = false"
                >
                  закрыть
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card>
      </v-flex>
    </v-navigation-drawer>



    <v-toolbar fixed app :clipped-left="clipped" class="indigo lighten-4">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-btn icon>
        <Vuetify />
       </v-btn>
      <v-toolbar-title v-text="title" class="body-1 font-weight-thin"></v-toolbar-title>
    </v-toolbar>
    <v-content>
        <v-slide-y-transition mode="out-in">
          <router-view></router-view>
        </v-slide-y-transition>
    </v-content>

    <v-footer
    height="auto"
    color="primary lighten-1"
  >
    <v-layout
      justify-center
      row
      wrap
    >
      <v-dialog
            v-model="dialog"
            width="100%"
          >
            <v-btn
              v-for="link in links"
              :key="link"
              color="white"
              slot="activator"
              flat
              round
            >
              {{ link }}
            </v-btn>

            <v-card>
              <v-card-title
                class="headline grey lighten-2"
                primary-title
              >
                Поддержка сайта
              </v-card-title>

              <iframe src="https://money.yandex.ru/quickpay/shop-widget?writer=buyer&targets=&targets-hint=%D0%9F%D0%BE%D0%B4%D0%B4%D0%B5%D1%80%D0%B6%D0%BA%D0%B0%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0%20%3C%20%D0%B2%D0%B0%D1%88%D0%B5%20%D0%B8%D0%BC%D1%8F%20%3E&default-sum=100&button-text=14&payment-type-choice=on&mobile-payment-type-choice=on&hint=&successURL=&quickpay=shop&account=410012494405212" width="100%" height="231" frameborder="0" allowtransparency="true" scrolling="no"></iframe>


              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  flat
                  @click="dialog = false"
                >
                  закрыть
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
      <v-flex
        primary
        lighten-2
        py-3
        text-xs-center
        white--text
        xs12
      >
        &copy;2018 — иерей <strong>Александр Бартов</strong>
      </v-flex>
    </v-layout>
  </v-footer>
  </v-app>
</template>

<script>
  import Meta from 'mixins/meta'

  export default {
    mixins: [Meta],

    data () {
      return {
        clipped: false,
        drawer: false,
        dialog: false,
        fixed: false,
        links: [
          'поддержать проект'
        ],
        home: '/',
        baptizes: [
          ['Хочу крестить ребенка', 'add', '/хочу_крестить_ребенка'],
          ['Просят быть крестным', 'add', '/просят_быть_крестным'],
          ['Хочу креститься', 'add', '/хочу_креститься']
        ],
        testimonials: [
          ['Хочу исповедаться', 'add', '/хочу_исповедаться'],
          ['Боюсь исповеди', 'add', '/боюсь_исповеди'],
          ['Ошибки на исповеди', 'add', '/ошибки_на_исповеди']
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'иерей Александр Бартов'
      }
    }
  }
</script>
