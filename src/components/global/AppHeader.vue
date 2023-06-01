<template>
  <header>
    <!-- Header desktop -->
    <div class="container-menu-desktop">
      <div class="topbar">
        <div class="content-topbar container h-100">
          <div class="right-topbar">
            <a href="#">
              <span class="fab fa-facebook-f"></span>
            </a>

            <a href="#">
              <span class="fab fa-twitter"></span>
            </a>

            <a href="#">
              <span class="fab fa-pinterest-p"></span>
            </a>

            <a href="#">
              <span class="fab fa-vimeo-v"></span>
            </a>

            <a href="#">
              <span class="fab fa-youtube"></span>
            </a>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="wrap-logo container">
        <!-- Logo desktop -->
        <div class="logo">
          <router-link to="/"><img src="../../../public/frontend/images/icons/logo-01.png" alt="LOGO" /></router-link>
        </div>

        <!-- Banner -->
        <div class="banner-header">
          <img src="../../../public/frontend/images/banner-01.jpg" alt="IMG" />
        </div>
      </div>

      <!--  -->
      <div class="wrap-main-nav">
        <div class="main-nav">
          <!-- Menu desktop -->
          <nav class="menu-desktop">
            <router-link class="logo-stick" to="/">
              <img src="../../../public/frontend/images/icons/logo-01.png" alt="LOGO" />
            </router-link>
          </nav>
        </div>
      </div>
    </div>
  </header>
  <div class="wrap-main-nav">
    <div class="main-nav show-main-nav">
      <!-- Menu desktop -->
      <nav class="menu-desktop">
        <router-link class="logo-stick" to="/">
          <img src="../../../public/frontend/images/icons/logo-01.png" alt="LOGO" />
        </router-link>

        <ul class="main-menu">
          <li class="mega-menu-item">
            <router-link to="/scraper">Scraper</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  name: "AppHeader",
};
</script>