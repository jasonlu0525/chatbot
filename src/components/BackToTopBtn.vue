<script></script>
<template>
  <a href="#" class="backToTop__btn">
    <img src="@/assets/image/top.png" title="回到頁面最上方" alt="回到頁面最上方" />
  </a>
</template>
<style lang="scss">
.backToTop__btn {
  position: fixed;
  z-index: 999;
  width: 50px;
  height: 50px;
  bottom: 16px;
  right: 16px;
  @include media-breakpoint-up(lg) {
    bottom: 160px;
    right: 48px;
    width: 71px;
    height: 71px;
  }
}
</style>
