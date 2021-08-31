<template>
  <b-card
    no-body
    class="card"
    style="max-width: 100%;"
    v-if="!isFinish"
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
                @click="pageResult(quest.outcome, item.rightAnswer)"
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
                @click="nextPage"
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
  <finish v-else :rightAnswers="rightAnswers" @clearDB="clearDB" @restart="restart"></finish>
</template>

<script>
import Finish from "./Finish"

export default {
  data() {
    return {
      records: [],
      answer: [],
      rightAnswers: [],
      isFinish: false,
      isRight: false,
      result: null,
      count: 1,
      lastPage: null
    }
  },
  async created() {
    try {
      const res = await fetch("https://my-json-server.typicode.com/erdeni03/lifehacker-test/question")
      this.records = await res.json()
      this.lastPage = this.records.length + 1
    } catch (error) {
      alert(error)
    }
  },
  watch: {
     count: function (val){
       if(val === this.lastPage) {
        this.finishResult()
       }
     }
  },
  methods: {
    restart() {
      this.count = 1
      this.isFinish = false
    },
    clearDB() {
      this.answer.forEach(async (item) => {
         await fetch(`http://localhost:3000/answers/${item.id}`, {
          method: 'DELETE',
        })
      })

    },
   async finishResult() {
      const res = await fetch(`http://localhost:3000/answers`)
        this.answer = await res.json()
     this.rightAnswers = this.answer.filter(item => {
       return this.records.find(record => item.outcome ===  record.rightAnswer )
     })
     this.isFinish = true
    },
   async pageResult(outcome, right) {
      const res = await fetch(`http://localhost:3000/answers`, {
          method: 'POST',
          body: JSON.stringify({
              id: Date.now(),
              outcome
          }),
          headers: {
            'Content-Type': 'application/json'
          }
      })
     const json = await res.json();
      this.result = json.outcome
      if (this.result === right) {
        this.isRight = true
      }
    },
    nextPage() {
      this.count++
      this.result = null
      this.isRight = false
    }
  },

  computed: {
    pageCount() {
      return this.records.filter(el => el.id === this.count)
    },
    bgName() {
      return "bg-" + this.count
    }
  },
  components: {Finish}
}
</script>
