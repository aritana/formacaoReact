<template>

  <div class="box has-text-weight-bold">

    <div class="columns">

      <div class="column is-7">{{tarefa.descricao || 'Tarefa sem descrição'}}</div>

      <div class="column">
        <meu-cronometro :tempoEmSegundos="tarefa.duracaoEmSegudos" />
      </div>

    </div>
  </div>
</template>


<script lang="ts">
//PropType para o Object
import ITarefa from '@/interfaces/ITarefa';
import { defineComponent,PropType} from "vue";
import MeuCronometro from "./MeuCronometro.vue";



export default defineComponent({
  components: { MeuCronometro },
  name: "MinhaTarefa",
  props:{
      tarefa:{
          type:Object as PropType<ITarefa>,
          required:true
      }
  }
});
</script>

<style scoped>
.box {
  background: #faf0ca;
}
</style>
