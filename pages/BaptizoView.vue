<template>
<v-layout>
  <v-flex x10 offset-x1>
    <v-card v-show="page === 1">
      <v-card-media
        src="https://s3.amazonaws.com/vuetify-docs/images/cards/desert.jpg"
        height="70vh"
      >
        <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Top 10 Australian beaches</span>
              </v-flex>
            </v-layout>
        </v-container>
      </v-card-media>
    </v-card>

    <v-card v-show="page === 2">
      <v-card-media
        src="https://s3.amazonaws.com/vuetify-docs/images/cards/house.jpg"
        height="70vh"
      >
        <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Top 10 Australian beaches</span>
              </v-flex>
            </v-layout>
        </v-container>
      </v-card-media>
    </v-card>

    <v-card >
      <div class="text-xs-center">
        <v-pagination
          v-model="page"
          :length="4"
          prev-icon="arrow_left"
          next-icon="arrow_right"
        ></v-pagination>
      </div>
    </v-card>
  </v-flex>
</v-layout>
</template>

<script>
  export default {
    data: () => ({
      page: 1
    })
  }
</script>
