<template>
  <div v-if="isPage2 === false">
    <div class="text-center mb-5" v-if="result === null">
      <div class="quest-title">
        Где эта дорога?
      </div>
      <button class="quest-btn" @click="resultOne('one')">
        Это же Русский мост во Владивостоке!
      </button>
      <button class="quest-btn" @click="resultOne('two')">
        Знаю, это мост-переезд между Данией и Швецией
      </button>
      <button class="quest-btn" @click="resultOne('three')">
        Это мост через Иртыш в городе Семей. Фото сделано в Казахстане!
      </button>
    </div>

    <res-text-two v-else></res-text-two>
  </div>
  <quest-three v-else></quest-three>
</template>

<script>
import ResTextTwo from "../../views/resultTwo/ResTextTwo"
import QuestThree from "./QuestThree"
import {mapMutations, mapGetters} from "vuex"
export default {
  methods: mapMutations(["resultOne"]),
  computed: {
    ...mapGetters(["result", "isPage2"])
  },
  components: {ResTextTwo, QuestThree}
}
</script>

<style></style>
