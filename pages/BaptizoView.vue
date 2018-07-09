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
          <v-radio-group :mandatory="false">
            <v-radio color="success" label="я человек верующий, регулярно посещаю богослужения и учавствую в святых Таинствах. Хочу, чтоб и мои дети были бы членами Церкви" value="radio-1"></v-radio>
            <v-divider class="mt-3 mb-3"></v-divider>
            <v-radio color="info" label="я верю в Бога, считаю себя православным. В храм захожу довольно часто, но исповедуюсь и причащаюсь пару раз в году. Считаю, что, как крестили в детстве меня, так и я должен крестить своих детей, чтоб Господь хранил их" value="radio-2"></v-radio>
            <v-divider class="mt-3 mb-3"></v-divider>
            <v-radio color="warning" label="в Бога я верю и Церковь для меня важна. Вхраме бываю редко. Не исповедывался давно. Поскольку жуву в России, считаю, что и вера должна быть русской, православной. По-традиции крещу и своих детей" value="radio-3"></v-radio>
            <v-divider class="mt-3 mb-3"></v-divider>
            <v-radio color="error" label="хоть и не нуждаюсь в Церкви но детей крещу, поскольку все родственники меня в этом убеждают" value="radio-4"></v-radio>                  
          </v-radio-group>
        </v-container>
      </v-card>
      <v-btn color="primary" @click="e6 = 2">Далее</v-btn>
      <v-btn flat>Отмена</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 2" step="2">{{question_2}}</v-stepper-step>

    <v-stepper-content step="2">
      <v-card color="grey lighten-1" class="mb-5" height="auto">
        <v-container fluid>
          <v-radio-group :mandatory="false">
            <v-radio color="success" label="" value="radio-1"></v-radio>
            <v-radio color="info" label="" value="radio-2"></v-radio>
            <v-radio color="warning" label="" value="radio-3"></v-radio>
            <v-radio color="error" label="" value="radio-4"></v-radio>                  
          </v-radio-group>
        </v-container>
      </v-card>
      <v-btn color="primary" @click="e6 = 3">Далее</v-btn>
      <v-btn flat>Отмена</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 3" step="3">{{question_3}}</v-stepper-step>

    <v-stepper-content step="3">
      <v-card color="grey lighten-1" class="mb-5" height="auto">
        <v-container fluid>
          <v-radio-group :mandatory="false">
            <v-radio color="success" label="верую во Святую Троицу и хочу, чтоб мои дети также были в Церкви" value="radio-1"></v-radio>
            <v-radio color="info" label="" value="radio-2"></v-radio>
            <v-radio color="warning" label="" value="radio-3"></v-radio>
            <v-radio color="error" label="" value="radio-4"></v-radio>                  
          </v-radio-group>
        </v-container>
      </v-card>
      <v-btn color="primary" @click="e6 = 4">Далее</v-btn>
      <v-btn flat>Отмена</v-btn>
    </v-stepper-content>

    <v-stepper-step step="4">{{question_4}}</v-stepper-step>
    <v-stepper-content step="4">
      <v-card color="grey lighten-1" class="mb-5" height="auto">
        <v-container fluid>
          <v-radio-group :mandatory="false">
            <v-radio color="success" label="верую во Святую Троицу и хочу, чтоб мои дети также были в Церкви" value="radio-1"></v-radio>
            <v-radio color="info" label="" value="radio-2"></v-radio>
            <v-radio color="warning" label="" value="radio-3"></v-radio>
            <v-radio color="error" label="" value="radio-4"></v-radio>                  
          </v-radio-group>
        </v-container>
      </v-card>
      <v-btn color="primary" @click="e6 = 1">Далее</v-btn>
      <v-btn flat>Отмена</v-btn>
    </v-stepper-content>
  </v-stepper>
</v-card>
</template>

<script>
  export default {
    data () {
      return {
        e6: 1,
        question_2: 'Вопрос номер два',
        question_3: 'Вопрос номер три',
        question_4: 'Заключительный вопрос'
      }
    }
  }
</script>
