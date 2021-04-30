<template>
  <div>
    <component :is="textName"></component>
    <button class="main-btn mb-5 mt-5" type="button" @click="stepFour">
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

  methods: mapActions(["stepFour"]),
  computed: mapGetters(["textName"])
}
</script>

<style></style>
