<script></script>
<template>
  <header class="sticky-top border-bottom border-secondary-200 border-2
      border-md-0">
    <div
      class="container gx-10 gx-md-8 py-8 py-md-12 "
    >
      <div class="d-flex justify-content-between align-items-center">
        <RouterLink to="/">
          <picture>
            <source
              srcset="@/assets/image/logo.png"
              width="218"
              height="40"
              media="(min-width: 992px)"
            />
            <img src="@/assets/image/logo.png" width="131" height="24" alt="" />
          </picture>
        </RouterLink>
        <RouterLink to="/product" class="btn btn-accent-100 py-4 text-white rounded-pill border-0"
          >方案費用</RouterLink
        >
      </div>
    </div>
  </header>
</template>
<style></style>
