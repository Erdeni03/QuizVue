<template>
  <div>
    <component :is="textName"></component>
    <div class="mt-4">
      Безопасно ездить по зимним дорогам в городе помогут шины
      <a href="#" class="link">Cordiant Winter Drive 2</a>. Они идеальны, когда
      на поверхности улиц то снег, то каша, то мокрый лёд. Ловите шанс: сейчас
      эти шины можно купить со скидкой 15%. Ищите промокод в конце теста.
    </div>
    <button class="main-btn mb-5 mt-5" type="button" @click="stepTwo">
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

  computed: mapGetters(["textName"]),
  methods: mapActions(["stepTwo"])
}
</script>

<style></style>
