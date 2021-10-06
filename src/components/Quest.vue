<template>
  <b-card
    no-body
    class="card"
    style="max-width: 100%;"
    v-if="count !== lastPage"
  >
    <b-row no-gutters class="bg-color row">
      <b-col md :class="bgName" class="global-bg">
        <b-img-lazy
          class="mirror-img"
          v-if="result === null"
          :src="require('@/assets/image/mirror-normal.png')"
        />
        <b-img-lazy
          class="mirror-img"
          v-else-if="isRight"
          :src="require('@/assets/image/mirror-nice.png')"
        />
        <b-img-lazy
          class="mirror-img"
          v-else
          :src="require('@/assets/image/mirror-bad.png')"
        />
        <b-img-lazy
          :src="require('@/assets/image/helm.png')"
          class="helm-img"
        />
      </b-col>

      <b-col md>
        <b-container>
          <div class="mt-10 mb-5">{{ count }}/{{ records.length }}</div>

          <div v-for="item in pageCount" :key="item.id">
            <div class="text-center mb-5" v-if="result === null">
              <b-card-title class="quest-title">
                Где эта Дорога?
              </b-card-title>
              <button
                class="quest-btn"
                v-for="quest in item.quests"
                :key="quest.id"
                @click="setResult(quest.outcome, item.rightAnswer)"
              >
                {{ quest.version }}
              </button>
            </div>

            <div class="quest-text" v-else>
              {{ result }}
              <div class="mt-4" v-html="item.promo"></div>
              <button
                class="main-btn mb-5 mt-5 w-25"
                type="button"
                @click="reset"
              >
                Далее
              </button>
            </div>
          </div>
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
  <finish v-else :answer="answer" @restart="restart"></finish>
</template>

<script>
import Finish from "./Finish";

export default {
  data() {
    return {
      records: [],
      answer: [],
      isRight: false,
      test2: true,
      result: null,
      count: 1,
      lastPage: null
    };
  },
  async created() {
    try {
      const res = await fetch(
        "https://my-json-server.typicode.com/erdeni03/lifehacker-test/question"
      );
      this.records = await res.json();
      this.lastPage = this.records.length + 1;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    restart() {
      this.count = 1;
      this.answer = [];
    },
    setResult(outcome, right) {
      this.result = outcome;
      if (this.result === right) {
        this.answer.push(this.result);
        this.isRight = true;
      }
    },
    reset() {
      this.count++;
      this.result = null;
      this.isRight = false;
    }
  },

  computed: {
    pageCount() {
      return this.records.filter(el => el.id === this.count);
    },
    bgName() {
      return "bg-" + this.count;
    }
  },
  components: { Finish }
};
</script>
