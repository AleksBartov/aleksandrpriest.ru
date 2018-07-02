<template>
  <v-jumbotron
    height="60vh"
    :gradient="gradient"
    dark
    src="/static/priest_s.jpeg"
  >
    <v-container fill-height>
      <v-layout align-center>
        <v-flex text-xs-center>
          <p class="title mx-0s" @click="changing">
          Thank you for developing with Vuetify and I look forward to bringing more exciting features in the future
          Thank you for developing with Vuetify and I look forward to bringing more exciting features in the future
          Thank you for developing with Vuetify and I look forward to bringing more exciting features in the future
          </p>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
</template>


<script>
  export default {
    data: () => ({
      gradient: 'to top, rgba(197,202,233, 1) 30%, rgba(197,202,233, 0) 100%'
    }),
    methods: {
      changing: function() {
        this.gradient = 'to top, rgba(104,107,103, 1) 0%, rgba(104,107,103, 0) 100%'
      }
    }
  }
</script>
