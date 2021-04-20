<template>
  <b-card no-body class="card" style="max-width: 100%;" v-if="count !== 7">
    <b-row no-gutters class="bg-color row">
      <b-col md :class="bgName" class="global-bg">
        <b-img
          class="mirror-img"
          v-if="result === null"
          :src="require('@/assets/image/mirror-normal.png')"
        />
        <b-img
          class="mirror-img"
          v-else-if="isRight"
          :src="require('@/assets/image/mirror-nice.png')"
        />
        <b-img
          class="mirror-img"
          v-else
          :src="require('@/assets/image/mirror-bad.png')"
        />
        <b-img :src="require('@/assets/image/helm.png')" class="helm-img" />
      </b-col>

      <b-col md>
        <b-container>
          <div class="mt-10 mb-5">{{ count }}/6</div>

          <template v-if="isPage === false">
            <div class="text-center mb-5" v-if="result === null">
              <b-card-title class="quest-title">
                Где эта дорога?
              </b-card-title>
              <button class="quest-btn" @click="resultThree('one')">
                В Москве! Коммунальные службы, как всегда, тормозят
              </button>
              <button class="quest-btn" @click="resultThree('two')">
                Судя по снегопаду, где-то в центре Хельсинки
              </button>
              <button class="quest-btn" @click="resultThree('three')">
                Улицы зимнего Нью-Йорка я всегда узнаю
              </button>
            </div>
            <res-text-one v-else></res-text-one>
          </template>

          <quest-two v-else></quest-two>
        </b-container>
      </b-col>
    </b-row>
    <div class="footer-quest">
      <a href="#" class="link footer__links-link">Лайфхакер</a>
      <span>|</span>
      <a href="#" class="link footer__links-link">Cordiant</a>
      <span>© 2020</span>
    </div>
  </b-card>
  <finish v-else></finish>
</template>

<script>
import ResTextOne from "../../views/resultOne/ResTextOne"
import QuestTwo from "./QuestTwo.vue"
import Finish from "../Finish"

import {mapGetters, mapMutations} from "vuex"

export default {
  methods: mapMutations(["resultThree"]),
  computed: {
    ...mapGetters(["bgName", "result", "isPage", "count", "isRight"])
  },
  components: {ResTextOne, QuestTwo, Finish}
}
</script>
