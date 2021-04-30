<template>
  <div>
    <component :is="textName"></component>
    <div class="mt-4">
      Чтобы чувствовать себя уверенно даже на голом льду, используйте шины
      <a href="#" class="link">Cordiant Snow Cross 2</a>. Благодаря
      COR-технологиям шипы проникают глубоко в лёд и увеличивают сцепление на
      10%, а динамику разгона — на 20%!
    </div>
    <button class="main-btn mb-5 mt-5" type="button" @click="stepFive">
      Далее
    </button>
  </div>
</template>

<script>
import TextOne from "./TextOne"
import TextTwo from "./TextTwo"
import TextThree from "./TextThree"
import {mapGetters, mapActions} from "vuex"
export default {
  components: {TextOne, TextTwo, TextThree},

  methods: mapActions(["stepFive"]),
  computed: mapGetters(["textName"])
}
</script>

<style></style>
