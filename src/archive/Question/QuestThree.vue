<template>
  <div v-if="isPage3 === false">
    <div class="text-center mb-5" v-if="result === null">
      <div class="quest-title">
        Где эта дорога?
      </div>
      <button class="quest-btn" @click="resultOne('one')">
        Типичная Сибирь. Дорога где-нибудь в Алтайском крае
      </button>

      <button class="quest-btn" @click="resultOne('two')">
        Это итальянские Апеннины зимой
      </button>

      <button class="quest-btn" @click="resultOne('three')">
        Так выглядит ландшафт Аляски. Мой ответ — США
      </button>
    </div>

    <res-text-three v-else></res-text-three>
  </div>
  <quest-four v-else></quest-four>
</template>

<script>
import ResTextThree from "../../views/resultThree/ResTextThree"
import QuestFour from "./QuestFour.vue"
import {mapGetters, mapMutations} from "vuex"
export default {
  methods: mapMutations(["resultOne"]),
  computed: {
    ...mapGetters(["result", "isPage3"])
  },
  components: {ResTextThree, QuestFour}
}
</script>

<style></style>
