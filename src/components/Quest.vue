<template>
  <div>
    <b-container fluid>
      <b-nav class="header" justified>
        <b-nav-item>
          <a href="#"
            ><b-img :src="require('@/assets/image/logo.svg')"></b-img
          ></a>
        </b-nav-item>
        <b-nav-item>
          <a href="#"
            ><b-img :src="require('@/assets/image/logo-2.svg')"></b-img
          ></a>
        </b-nav-item>
      </b-nav>
    </b-container>

    <div class="wrapper" v-if="isStart">
      <div class="main">
        <b-img
          :src="require('@/assets/image/bg-start.jpg')"
          class="main__img"
        ></b-img>
        <div class="main__card">
          <div class="main__block">
            <b-container>
              <div class="main__card-title">
                Узнаете ли вы Россию?<br /><span>ПО ДОРОГАМ?</span>
              </div>
            </b-container>
          </div>
          <div class="main__block--top">
            <b-container>
              <div class="mt-4 mb-5">
                Мы составили этот тест вместе с производителем шин
                <a href="#" class="link">Cordiant</a>, чтобы вы проверили,
                сможете ли отличить российские дороги от остальных. Активируйте
                внутреннего Шерлока и вперёд! Пройдёте тест до конца — получите
                скидку 15% на зимнюю резину.
              </div>

              <button class="main-btn mb-5" @click="isStart = false">
                Пройти тест!
              </button>
            </b-container>
          </div>
        </div>
      </div>

      <b-row class="footer">
        <b-col sm class="footer__icons text-center">
          <a href="#" class="icon-link"
            ><b-img :src="require('@/assets/image/icon-bird.svg')"></b-img
          ></a>
          <a href="#" class="icon-link"
            ><b-img :src="require('@/assets/image/icon-vk.svg')"></b-img
          ></a>
          <a href="#" class="icon-link"
            ><b-img :src="require('@/assets/image/icon-facebook.svg')"></b-img
          ></a>
        </b-col>
        <b-col sm class="footer__links text-center">
          <a href="#" class="link footer__links-link">Лайфхакер</a>
          <span>|</span>
          <a href="#" class="link footer__links-link">Cordiant</a>
          <span>© 2020</span>
        </b-col>
      </b-row>
    </div>

    <transition> <quest-one v-if="isStart === false"></quest-one></transition>
  </div>
</template>

<script>
import QuestOne from "./Question/QuestOne"
export default {
  components: {QuestOne},
  data() {
    return {
      isStart: true
    }
  }
}
</script>
