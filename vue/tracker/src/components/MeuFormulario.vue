<template>
  <div class="box">
    <div class="columns">
      <div
        class="column is-8"
        role="form"
        aria-label="Formulário para criação de uma nova tarefa"
      >
        <input
          type="text"
          class="input"
          placeholder="Qual tarefa você deseja iniciar?"
         
          v-model="descricao"
        />
      </div>
       <!-- Vmodel: linkar com o estado, a descricao da tarefa -->

      <div class="column">
        <!-- recebe o valor emitido  -->
        <temporizador @aoTemporizadorFinalizado="finalizarTarefa" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Temporizador from "./MeuTemporizador.vue";

export default defineComponent({

  name: "MeuFormulario",
  components: {
    Temporizador,
  },

  data(){
      return{
        descricao:'' //linkado com o v-model que o usuario digitou
      }
  },//estados

  methods: {
    finalizarTarefa(tempoDecorrido:number):void{
        console.log('tempo da tarefa', tempoDecorrido)
        console.log('descricao', this.descricao)

        this.descricao =''
    }
  },

});
</script>