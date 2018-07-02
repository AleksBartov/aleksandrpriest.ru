<template>
  <v-jumbotron
    :gradient="gradient"
    dark
    src="/static/priest_s.jpeg"
  >
    <v-container fill-height>
      <v-layout align-center>
        <v-flex text-xs-center>
          <h3 class="display-3">Gradient over Image</h3>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
</template>

<script>
  export default {
    data: () => ({
      gradient: 'to top right, rgba(197,202,233, .7), rgba(197,202,233, .7)'
    })
  }
</script>
