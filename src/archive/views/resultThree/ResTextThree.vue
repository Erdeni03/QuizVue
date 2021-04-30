<template>
  <div>
    <component :is="textName"></component>
    <div class="mt-3">
      Чтобы маневрировать по снежным заносам за городом, выбирайте резину
      <a href="#" class="link">Cordiant Snow Cross</a>. Эти шины легко выедут из
      утрамбованной колеи и подарят вам ощущение полного контроля.
    </div>
    <button class="main-btn mb-5 mt-5" type="button" @click="stepThree">
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

  methods: mapActions(["stepThree"]),
  computed: mapGetters(["textName"])
}
</script>

<style></style>
