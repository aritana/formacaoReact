<template>

  <div class="is-flex is-align-items-center is-justify-content-space-evenly">

    <Cronometro :tempoEmSegundos="tempoEmSegundos" />

    <button class="button" @click="iniciar" :disabled="cronometroRodando">
      <span class="icon">
        <i class="fas fa-play"></i>
      </span>
      <span>play</span>
    </button>

    <button class="button" @click="finalizar" :disabled="!cronometroRodando">
      <span class="icon">
        <i class="fas fa-stop"></i>
      </span>
      <span>stop</span>
    </button>

  </div>

</template>

<script lang="ts">

import { defineComponent } from "vue";
import Cronometro from "./MeuCronometro.vue";

export default defineComponent({
  name: "MeuTemporizador",
  emits:['aoTemporizadorFinalizado'], //emite um evento
  components: { Cronometro },

  data() {
    return {
      tempoEmSegundos: 0,
      cronometro: 0,
      cronometroRodando: false,
    };
  },

  methods: {
    iniciar() {
      //começar a contagem
      //1 seg = 1000 ms
      this.cronometro = setInterval(() => {
        //retorna id do intervalo
        this.tempoEmSegundos += 1;
      }, 1000);

      (this.cronometroRodando = true), console.log("iniciando");
    },

    finalizar() {

      console.log("finalizando");
      this.cronometroRodando = false;
      clearInterval(this.cronometro);
      //emit evento,
      this.$emit('aoTemporizadorFinalizado',this.tempoEmSegundos); //nome e payload para emitir
      //reset
      this.tempoEmSegundos = 0

    },
  },
});

</script>

<style scoped>
</style>
