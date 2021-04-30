<template>
  <div v-if="isPage5 === false">
    <div class="text-center mb-5" v-if="result === null">
      <div class="quest-title">
        Где эта дорога?
      </div>

      <button class="quest-btn" @click="resultTwo('one')">
        В Стране Великих озёр — Канаде. Фото явно сделано на водах Гурона
      </button>

      <button class="quest-btn" @click="resultTwo('two')">
        Сердцем чувствую, что это Байкал
      </button>

      <button class="quest-btn" @click="resultTwo('three')">
        Нордический пейзаж подсказывает, что это река Гломма в Норвегии
      </button>
    </div>

    <res-text-five v-else></res-text-five>
  </div>
  <quest-six v-else></quest-six>
</template>

<script>
import ResTextFive from "../../views/resultFive/ResTextFive"
import QuestSix from "../Question/QuestSix.vue"
import {mapGetters, mapMutations} from "vuex"
export default {
  computed: {
    ...mapGetters(["result", "isPage5"])
  },
  methods: mapMutations(["resultTwo"]),

  components: {ResTextFive, QuestSix}
}
</script>

<style></style>
