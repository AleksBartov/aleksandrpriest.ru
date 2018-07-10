<template>
<v-card>
  <v-card-title>
    <div class="headline">Крещение детей</div>
    <div>Чтобы лучше понять вас и дать оптимальный ответ, пожалуйста, выберите самый подходящий к вашему случаю вариант</div>
  </v-card-title>

<v-stepper v-model="e6" vertical>
    <v-stepper-step :complete="e6 > 1" step="1">
      Я крещу детей потому что я...
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-card color="grey lighten-1" class="mb-5" height="auto">
        <v-container fluid>
          <v-radio-group v-model="first">
            <v-radio color="success" :label="firstQuestion.firstAnswer" :value="firstQuestion.secondQuestion1"></v-radio>
            <v-divider class="mt-3 mb-3"></v-divider>
            <v-radio color="info" :label="firstQuestion.secondAnswer" :value="firstQuestion.secondQuestion2"></v-radio>
            <v-divider class="mt-3 mb-3"></v-divider>
            <v-radio color="warning" :label="firstQuestion.thirdAnswer" :value="firstQuestion.secondQuestion3"></v-radio>
          </v-radio-group>
        </v-container>
      </v-card>
      <v-btn color="primary" @click="e6 = 2">Далее</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 2" step="2">{{ selected }}</v-stepper-step>

    <v-stepper-content step="2">
      <v-card color="grey lighten-1" class="mb-5" height="auto">
        <v-container fluid>
          <v-radio-group v-model="second">
            <v-radio color="success" :label="secondQuestionOne.firstAnswer" :value="secondQuestionOne.thirdQuestion1"></v-radio>
            <v-radio color="info" :label="secondQuestionOne.secondAnswer" :value="secondQuestionOne.thirdQuestion2"></v-radio>
            <v-radio color="warning" :label="secondQuestionOne.thirdAnswer" :value="secondQuestionOne.thirdQuestion3"></v-radio>
          </v-radio-group>
        </v-container>
      </v-card>
      <v-btn color="primary" @click="e6 = 3">Далее</v-btn>
      <v-btn flat @click="e6 = 1">Отмена</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 3" step="3">{{ selectedForThree }}</v-stepper-step>

    <v-stepper-content step="3">
      <v-card color="grey lighten-1" class="mb-5" height="auto">
        <v-container fluid>
          <v-radio-group v-model="values">
            <v-radio color="success" label="верую во Святую Троицу и хочу, чтоб мои дети также были в Церкви" value="radio-1"></v-radio>
            <v-radio color="info" label="" value="radio-2"></v-radio>
            <v-radio color="warning" label="" value="radio-3"></v-radio>
            <v-radio color="error" label="" value="radio-4"></v-radio>                  
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
        firstQuestion: {
          firstAnswer: 'я хороший',
          secondQuestion1: 'ты уверен?',
          secondAnswer: 'я хуже первого',
          secondQuestion2: 'почему ты так решил?',
          thirdAnswer: 'я плохой',
          secondQuestion3: 'кто тебе сказал такую глупость?',
        },
        secondQuestionOne: {
          firstAnswer: 'Конечно!',
          thirdQuestion1: 'может ты в прелести?',
          secondAnswer: 'Не совсем',
          thirdQuestion2: 'ну и как нам разобраться?',
          thirdAnswer: 'нет, я вру сам себе',
          thirdQuestion3: 'а ты спросил маму?'
        },
        secondQuestionTwo: {
          firstAnswer: 'мне сказали близкие',
          secondAnswer: 'я видел его и слышал',
          thirdAnswer: 'я не хожу в храм, а он ходит'
        },
        secondQuestionThree: {
          firstAnswer: 'жена',
          secondAnswer: 'начальник',
          thirdAnswer: 'совесть'
        },
        e6: 1,
        first: 'ты уверен?',
        second: 'может ты в прелести?'
      }
    },
    computed: {
      selected: function() {
        return this.first
      },
      selectedForThree: function() {
        return this.second
      }
    }
  }
</script>
