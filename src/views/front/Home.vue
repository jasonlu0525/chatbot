<script setup>
// import { ref } from 'vue';
//  <!-- :style="{ background: url(bg) }" -->
console.log(process.env);
// eslint-disable-next-line import/no-unresolved
// const bg = ref(require('`/image/bg_yellow.png`'));
</script>
<template>
  <div class="position-relative mt-15 mt-md-16 pb-46 mb-md-62">
    <div class="position-absolute top-100 translate-middle-x translate-middle-md">
      <!-- <img src="@/assets/image/ball01.svg" alt="" /> -->

      <picture>
        <source
          srcset="@/assets/image/ball01.svg"
          width="360"
          height="360"
          media="(min-width:992px)"
        />
        <img src="@/assets/image/ball01.svg" width="126" height="126" alt="" />
      </picture>
    </div>
    <div class="container gx-10 gx-md-4">
      <div class="row align-items-center position-relative">
        <section class="col">
          <h1 class="fw-bold fs-16 fs-md-24 mb-8">
            <span class="d-block mb-4 fs-8 fs-md-9 text-primary">ChatTalker 最全面的聊天機器人</span
            >你愛我像誰？ <br />
            扮演什麼角色我都會
          </h1>
          <p class="mb-16 mb-md-0">Facebook、Instagram、LINE 聊天機器人解決方案</p>
        </section>
        <div class="col-md-6">
          <picture>
            <source
              srcset="@/assets/image/home.svg"
              width="532"
              height="534"
              media="(min-width:992px)"
            />
            <img src="@/assets/image/home.svg" width="304" height="305" alt="" />
          </picture>
          <div class="banner__backdrop">
            <picture>
              <source
                srcset="@/assets/image/bg_yellow.png"
                width="716"
                height="768"
                media="(min-width:992px)"
              />
              <img src="@/assets/image/bg_yellow_sm.svg" alt="" />
            </picture>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container gx-10 gx-md-4 text-center mb-30 mb-md-50">
    <h2 class="text-dark-200 mb-16 fs-14 fw-bold fs-md-16 mb-md-24">三大平台，我來搞定</h2>
    <ul class="row flex-md-nowrap flex-lg-wrap overflow-auto">
      <li class="col-md-5 col-lg-4 mb-12 mb-md-0">
        <picture>
          <source
            srcset="@/assets/image/messenger.svg"
            width="90"
            height="90"
            media="(min-width:768px)"
          />
          <img
            src="@/assets/image/messenger.svg"
            alt="官方 Facebook Messenger"
            width="60"
            height="60"
            class="mb-8 mb-md-12"
          />
        </picture>
        <h3 class="text-dark-200 mb-8 fs-9 fs-md-12 mb-md-12 fw-bold">Facebook Messenger</h3>
        <p class="mb-0 text-dark-100 px-27 px-md-15 px-lg-31">
          結合粉絲專頁，提高粉絲互動率 有效經營品牌社群
        </p>
      </li>
      <li class="col-md-5 col-lg-4 mb-12 mb-md-0">
        <picture>
          <source
            srcset="@/assets/image/line.svg"
            width="90"
            height="90"
            media="(min-width:768px)"
          />
          <img
            src="@/assets/image/line.svg"
            alt="LINE 官方帳號"
            width="60"
            height="60"
            class="mb-8 mb-md-12"
          />
        </picture>
        <h3 class="text-dark-200 mb-8 fs-9 fs-md-12 mb-md-12 fw-bold">LINE 官方帳號</h3>
        <p class="mb-0 text-dark-100 px-27 px-md-15 px-lg-31">
          融入日常生活，精準傳遞品牌資訊 打造個人化專屬服務
        </p>
      </li>
      <li class="col-md-5 col-lg-4">
        <picture>
          <source
            srcset="@/assets/image/instagram.svg"
            width="90"
            height="90"
            media="(min-width:768px)"
          />
          <img
            src="@/assets/image/instagram.svg"
            alt="Instagram 商業帳號"
            width="60"
            height="60"
            class="mb-8 mb-md-12"
          />
        </picture>
        <h3 class="text-dark-200 mb-8 fs-9 fs-md-12 mb-md-12 fw-bold">Instagram 商業帳號</h3>
        <p class="mb-0 text-dark-100 px-27 px-md-15 px-lg-31">
          貼近粉絲，提升品牌自然聲量 行銷、抽獎一站完成
        </p>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.banner__backdrop {
  position: absolute;
  bottom: 0;
  z-index: -1;
  overflow-x: hidden;
  &::after {
    display: none;
  }
  @include media-breakpoint-up(lg) {
    overflow-x: visible;
    right: 0;
    top: 0;
    max-width: 716px;
    max-height: 768px;
    z-index: -1;
    transform: translateY(-88px);
    &::after {
      display: inline;
      content: '';
      background-color: $secondary-100;
      height: 99.5%;
      position: absolute;
      left: 0;
      right: 0;
      transform: translateX(100%);
    }
    &__image {
      object-position: left;
    }
  }
}

// *{
//  D
// }
</style>
