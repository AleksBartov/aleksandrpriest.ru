<template>
  <v-jumbotron
    :gradient="gradient"
    dark
    src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
  >
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
          <v-card-text>
            <h4 class="title text-sm-left">Крещение детей</h4>
            <p class="caption text-sm-left mt-3">Для крещения прежде всего требуется вера.</p>
            <p class="caption text-sm-left">Если человек веру свою подтвердить не может, то это за него делает кто-то другой.</p>
            <p class="caption text-sm-left">Поэтому крещение детей, которые не могут нам ничего о своей вере рассказать, происходит по вере их родителей и крестных.</p>
          </v-card-text>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
</template>

<script>
  export default {
    data: () => ({
      gradient: 'to top right, rgba(63,81,181, .7), rgba(25,32,72, .7)'
    })
  }
</script>
