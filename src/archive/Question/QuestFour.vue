<template>
  <div v-if="isPage4 === false">
    <div class="text-center mb-5" v-if="result === null">
      <div class="quest-title">
        Где эта дорога?
      </div>

      <button class="quest-btn" @click="resultTwo('one')">
        В Карачаево-Черкесии! Это точно зимний Домбай
      </button>

      <button class="quest-btn" @click="resultTwo('two')">
        Кажется, это панорамная дорога Гросглоккнер в Австрии
      </button>

      <button class="quest-btn" @click="resultTwo('three')">
        В швейцарских Альпах! Это дорога из Сент-Морица в Базель
      </button>
    </div>

    <res-text-four v-else></res-text-four>
  </div>
  <quest-five v-else></quest-five>
</template>

<script>
import ResTextFour from "../../views/resultFour/ResTextFour"
import QuestFive from "./QuestFive"
import {mapGetters, mapMutations} from "vuex"
export default {
  methods: mapMutations(["resultTwo"]),
  computed: {
    ...mapGetters(["result", "isPage4"])
  },

  components: {ResTextFour, QuestFive}
}
</script>

<style></style>
