<template>
  <div>
    <component :is="textName"></component>
    <button class="main-btn mb-5 mt-5" type="button" @click="stepOne">
      Далее
    </button>
  </div>
</template>

<script>
import TextOne from "./TextOne"
import TextTwo from "./TextTwo"
import TextThree from "./TextThree"
import {mapActions, mapGetters} from "vuex"
export default {
  components: {TextOne, TextTwo, TextThree},

  computed: mapGetters(["textName"]),
  methods: mapActions(["stepOne"])
}
</script>

<style></style>
