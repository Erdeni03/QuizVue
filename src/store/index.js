import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
Vue.config.devtools = true
export default new Vuex.Store({
  state: {
    count: 1,
    answer: [],
    isPage: false,
    isPage2: false,
    isPage3: false,
    isPage4: false,
    isPage5: false,
    isPage6: false,
    result: null,
    isRight: false
  },
  mutations: {
    resultThree(state, el) {
      state.result = el
      if (state.result === "three") {
        state.answer.push(state.result)
        state.isRight = true
      }
    },
    resultOne(state, el) {
      state.result = el
      if (state.result === "one") {
        state.answer.push(state.result)
        state.isRight = true
      }
    },
    resultTwo(state, el) {
      state.result = el
      if (state.result === "two") {
        state.answer.push(state.result)
        state.isRight = true
      }
    },
    reset(state) {
      state.count++
      state.result = null
      state.isRight = false
    },
    restart(state) {
      state.count = 1
      state.answer = []
      state.isPage = false
      state.isPage2 = false
      state.isPage3 = false
      state.isPage4 = false
      state.isPage5 = false
      state.isPage6 = false
    }
  },
  actions: {
    stepOne({commit, state}) {
      commit("reset")
      state.isPage = true
    },
    stepTwo({commit, state}) {
      commit("reset")
      state.isPage2 = true
    },
    stepThree({commit, state}) {
      commit("reset")
      state.isPage3 = true
    },
    stepFour({commit, state}) {
      commit("reset")
      state.isPage4 = true
    },
    stepFive({commit, state}) {
      commit("reset")
      state.isPage5 = true
    },
    stepSix({commit, state}) {
      commit("reset")
      state.isPage6 = true
    }
  },
  getters: {
    isRight: s => s.isRight,
    answer: s => s.answer,
    isPage: s => s.isPage,
    isPage2: s => s.isPage2,
    isPage3: s => s.isPage3,
    isPage4: s => s.isPage4,
    isPage5: s => s.isPage5,
    isPage6: s => s.isPage6,
    count: s => s.count,
    result: s => s.result,
    textName: s => "text-" + s.result,
    bgName: s => "bg-" + s.count,
    resName(state) {
      if (state.answer.length >= 5) {
        return "res-nice"
      } else if (state.answer.length >= 3) {
        return "res-normal"
      } else {
        return "res-bad"
      }
    }
  }
})
