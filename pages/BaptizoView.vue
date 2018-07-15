<template>
<v-card>
  <v-card-title>
    <div class="headline">Крещение детей</div>
    <div>Чтобы лучше понять вас и дать оптимальный ответ, пожалуйста, выберите самый подходящий к вашему случаю вариант</div>
  </v-card-title>

<v-stepper v-model="e6" vertical>
    <v-stepper-step :complete="e6 > 1" step="1">
      {{ questions[0] }}
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-card color="grey lighten-1" class="mb-5" height="auto">
        <v-container fluid>
          <v-radio-group v-model="first">
            <v-radio color="success" :label="answers[0].coutry" :value="answers[0].coutry"></v-radio>
            <v-divider class="mt-3 mb-3"></v-divider>
            <v-radio color="info" :label="answers[1].coutry" :value="answers[1].coutry"></v-radio>
            <v-divider class="mt-3 mb-3"></v-divider>
            <v-radio color="warning" :label="answers[2].coutry" :value="answers[2].coutry"></v-radio>
          </v-radio-group>
        </v-container>
      </v-card>
      <v-btn color="primary" @click="e6 = 2">Далее</v-btn>
    </v-stepper-content>

<v-stepper-step :complete="e6 > 2" step="2">{{ questions[1] }}</v-stepper-step>

    <v-stepper-content step="2">
      <v-card color="grey lighten-1" class="mb-5" height="auto">
        <v-container fluid>
          <v-radio-group v-model="second">
            <v-radio color="success" :label="selectSities" :value="selectSities"></v-radio>
            <v-divider class="mt-3 mb-3"></v-divider>
            <v-radio color="info" :label="selectSitiesTwo" :value="selectSitiesTwo"></v-radio>
            <v-divider class="mt-3 mb-3"></v-divider>
            <v-radio color="warning" :label="selectSitiesThird" :value="selectSitiesThird"></v-radio>
          </v-radio-group>
        </v-container>
      </v-card>
      <v-btn color="primary" @click="e6 = 3">Далее</v-btn>
      <v-btn flat @click="e6 = 1">Отмена</v-btn>
    </v-stepper-content>
    

    <v-stepper-step :complete="e6 > 3" step="3">{{ questions[2] }}</v-stepper-step>

    <v-stepper-content step="3">
      <v-card color="grey lighten-1" class="mb-5" height="auto">
        <v-container fluid>
          <v-radio-group v-model="third">
            <v-radio color="success" :label="selectWorks" :value="selectWorks"></v-radio>
            <v-radio color="info" :label="selectWorksTwo" :value="selectWorksTwo"></v-radio>
            <v-radio color="warning" :label="selectWorksThird" :value="selectWorksThird"></v-radio>
          </v-radio-group>
        </v-container>
      </v-card>
      <v-btn color="primary" @click="e6 = 4">Далее</v-btn>
      <v-btn flat @click="e6 = 2">Отмена</v-btn>
    </v-stepper-content>

  </v-stepper>
</v-card>
</template>

<script>

  export default {
    data () {
      return {
        e6: 1,
        questions: ['из какой вы страны?', 'из какого вы города?', 'кем вы работаете?'],
        answers: [{
              coutry: 'Россия',
              sity: ['Москва', 'Санкт-Петербург', 'Пермь'],
              work: ['доктор', 'повар', 'дворник']
            },
            {
              coutry: 'Украина',
              sity: ['Киев', 'Донецк', 'Львов'],
              work: ['продавец', 'менеджер', 'таксист']
            },
            {
              coutry: 'Казахстан',
              sity: ['Астана', 'Алма-Ата', 'что у них там еще есть'],
              work: ['летчик', 'президент', 'безработный']
            }
        ],
        first: 'Россия',
        second: 'Москва',
        third: 'доктор'
      }
    },
    computed: {
      selected: function() {
        return this.first
      },
      selectSities: function() {
        if (this.first === 'Россия') {
          return this.answers[0].sity[0]
        } else if (this.first === 'Украина') {
          return this.answers[1].sity[0]
        } 
        return this.answers[2].sity[0]
      },
      selectSitiesTwo: function() {
        if (this.first === 'Россия') {
          return this.answers[0].sity[1]
        } else if (this.first === 'Украина') {
          return this.answers[1].sity[1]
        } 
        return this.answers[2].sity[1]
      },
      selectSitiesThird: function() {
        if (this.first === 'Россия') {
          return this.answers[0].sity[2]
        } else if (this.first === 'Украина') {
          return this.answers[1].sity[2]
        } 
        return this.answers[2].sity[2]
      },
      selectWorks: function() {
        if (this.second === 'Москва') {
          return this.answers[0].work[0]
        } else if (this.second === 'Киев') {
          return this.answers[1].work[0]
        } 
        return this.answers[2].work[0]
      },
      selectWorksTwo: function() {
        if (this.second === 'Москва') {
          return this.answers[0].work[1]
        } else if (this.second === 'Киев') {
          return this.answers[1].work[1]
        } 
        return this.answers[2].work[1]
      },
      selectWorksThird: function() {
        if (this.second === 'Москва') {
          return this.answers[0].work[2]
        } else if (this.second === 'Киев') {
          return this.answers[1].work[2]
        } 
        return this.answers[2].work[2]
      }
    }
  }
</script>
