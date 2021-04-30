<template>
  <b-card no-body class="card" style="max-width: 100%;">
    <b-row no-gutters>
      <b-col md :class="resultImg" class="global-bg">
        <div></div>
      </b-col>
      <b-col md class="bg-color">
        <div class="block-text mt-10">
          <b-container class="w-75">
            <template v-if="answer.length >= 5">
              <b-card-title class="quest-subtitle"
                >Я — географ-экстрасенс
              </b-card-title>
              <b-card-text class="quest-text"
                >Узнать российские дороги? Несите задачку посложнее! Если нужно,
                я вам по фото и географические координаты назову.</b-card-text
              >
            </template>
            <template v-else-if="answer.length >= 3">
              <b-card-title class="quest-subtitle"
                >Я — начинающий топограф
              </b-card-title>
              <b-card-text class="quest-text"
                >Узнаю российские дороги без регистрации и СМС. Но иногда всё же
                путаюсь — эти зимние трассы так похожи.</b-card-text
              >
            </template>
            <template v-else>
              <b-card-title class="quest-subtitle"
                >Я — дорожный романтик
              </b-card-title>
              <b-card-text class="quest-text"
                >Да кто вообще смотрит под ноги! Я считаю звёзды и ловлю
                снежинки, а не изучаю асфальт. Ой, смотрите: облако похоже на
                слоника!</b-card-text
              >
            </template>
            <b-row class="bv-example-row mb-2">
              <b-col cols="auto" class="pl-0 mr-auto mb-3">
                <a
                  href="#"
                  class="text-center reset-btn"
                  @click.prevent="$emit('restart')"
                >
                  <svg
                    class="icon mr-3"
                    width="40"
                    height="36"
                    viewBox="0 0 40 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.7161 0.71582C13.1883 0.71582 5.4403 8.47195 5.4403 17.9997V18.0569L2.01944 12.9052C1.6847 12.399 0.998893 12.2602 0.492703 12.5949C-0.0134861 12.9297 -0.15228 13.6155 0.182458 14.1217L5.14638 21.5921C5.326 21.8615 5.61175 22.0329 5.93016 22.0738C5.97915 22.0819 6.01997 22.0819 6.06895 22.0819C6.33838 22.0819 6.59964 21.9839 6.80374 21.7962L13.7026 15.5831C14.1517 15.1749 14.1925 14.4809 13.7843 14.0237C13.376 13.5747 12.6821 13.5338 12.2249 13.9421L7.64467 18.0814V17.9997C7.64467 9.68027 14.4048 2.92019 22.7161 2.92019C31.0274 2.92019 37.7956 9.68027 37.7956 17.9997C37.7956 26.3192 31.0355 33.0793 22.7242 33.0793C18.6992 33.0793 14.9109 31.5117 12.0697 28.6624C11.637 28.2297 10.9431 28.2297 10.5104 28.6624C10.0776 29.0951 10.0776 29.7891 10.5104 30.2218C13.7761 33.4875 18.1114 35.2837 22.7242 35.2837C32.2439 35.2837 40 27.5357 40 17.9997C40 8.46379 32.2439 0.71582 22.7161 0.71582Z"
                      fill="#7DBFFF"
                    />
                  </svg>
                  Пройти еще раз
                </a>
              </b-col>

              <b-col cols="auto" lg class="text-center mb-3 pr-0">
                <a
                  target="blank"
                  rel="nofollow noindex"
                  href="https://twitter.com/intent/tweet?text=https://erdeni03.github.io/lifehacker-test/"
                  class="icon-link"
                  ><b-img-lazy
                    :src="require('@/assets/image/icon-bird.svg')"
                  ></b-img-lazy
                ></a>
                <a
                  target="blank"
                  rel="nofollow noindex"
                  href="https://vk.com/share.php?url=https://erdeni03.github.io/lifehacker-test/"
                  class="icon-link"
                  ><b-img-lazy
                    :src="require('@/assets/image/icon-vk.svg')"
                  ></b-img-lazy
                ></a>
                <a
                  target="blank"
                  rel="nofollow noindex"
                  href="http://www.facebook.com/sharer.php?u=https://erdeni03.github.io/lifehacker-test/"
                  class="icon-link"
                  ><b-img-lazy
                    :src="require('@/assets/image/icon-facebook.svg')"
                  ></b-img-lazy
                ></a>
              </b-col>
            </b-row>
          </b-container>
        </div>
        <b-container class="w-75"
          ><b-card-text class="mt-4"
            ><span class="quest-text"
              >Чтобы любая дорога была для вас безопасной</span
            >
            — следите за качеством резины и переобувайтесь вовремя. С зимними
            шинами <span class="quest-text">Cordiant</span> ваша машина будет
            уверенно выезжать из снежных заносов и стабильно вести себя на
            обледенелых трассах. Прямо сейчас комплект зимних шин
            <span class="quest-text">Cordiant</span> можно купить со скидкой
            15%! Просто введите промокод
            <span class="text-uniq text-color">CORDIHACKER</span> при покупке
            шин на <a href="#" class="link">koleso.ru</a>.
            <div class="mt-4">
              Срок действия промокода до
              <span class="text-color">ХХ.ХХ.2020</span>
            </div></b-card-text
          >
          <button class="main-btn mb-5">Купить шины со скидкой</button>
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
</template>

<script>
export default {
  props: ["answer"],
  computed: {
    resultImg() {
      return this.answer.length >= 5
        ? "res-nice"
        : this.answer.length >= 3
        ? "res-normal"
        : "res-bad"
    }
  }
}
</script>
<style scoped></style>
