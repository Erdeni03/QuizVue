<template>
  <div v-if="isPage6 === false ? true : false">
    <div class="text-center mb-5" v-if="result === null">
      <div class="quest-title">
        Где эта дорога?
      </div>

      <button class="quest-btn" @click="resultOne('one')">
        Да что дорога! Такое небо только в Исландии
      </button>

      <button class="quest-btn" @click="resultOne('two')">
        Это пустырь на окраинах Костромы… Романтика!
      </button>

      <button class="quest-btn" @click="resultOne('three')">
        Асфальт что надо! Это Германия, перед съездом на автобан
      </button>
    </div>

    <res-text-six v-else></res-text-six>
  </div>
</template>

<script>
import ResTextSix from "../../views/resultSix/ResTextSix"

import {mapGetters, mapMutations} from "vuex"
export default {
  computed: {
    ...mapGetters(["isPage6", "result"])
  },
  methods: mapMutations(["resultOne"]),

  components: {ResTextSix}
}
</script>

<style></style>
