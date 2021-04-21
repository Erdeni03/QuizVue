<template>
  <div>
    <!-- <component :is="textName"></component> -->
    <div class="quest-text" v-for="text in textName" :key="text.id">
      {{ text.title }}
    </div>
    <button class="main-btn mb-5 mt-5" type="button" @click="stepOne">
      Далее
    </button>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex"
export default {
  data() {
    return {
      texts: [
        {id: "one", title: "Не в этот раз! На фото — Нью-Йорк."},
        {id: "two", title: "Хорошая попытка. Но нет, это заметает Нью-Йорк."},
        {id: "three", title: "В яблочко!"}
      ]
    }
  },
  computed: {
    ...mapGetters(["result"]),
    textName() {
      return this.texts.filter(el => el.id === this.result)
    }
  },

  methods: mapActions(["stepOne"])
}
</script>

<style></style>
