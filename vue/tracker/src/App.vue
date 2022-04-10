<template>

  <main class="columns is-gapless is-multiline">

    <div class="column is-1">
      <barra-lateral />
    </div>

    <div class="column is-11">
   <formulario/>
    </div>

  </main>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from "./components/BarraLateral.vue";
import Formulario from './components/MeuFormulario.vue';



export default defineComponent({
  components: { BarraLateral, Formulario },
  name: "App",
});
</script>

<style>
</style>
