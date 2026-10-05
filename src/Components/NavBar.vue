<template>
  <nav class="navbar">
    <div class="nav-content">
      <div class="brand-block">
        <span class="brand-name">Андонов, младши адвокат</span>
        <span class="brand-subtitle">Адвокатска кантора във Варна</span>
      </div>

      <ul class="nav-list">
        <li class="nav-item">
          <RouterLink to="/">Начало</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/news">Новини и статии</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/services">Услуги</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/about">За нас</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/contact">Контакти</RouterLink>
        </li>
      </ul>

      <div class="nav-balance" aria-hidden="true"></div>
    </div>
  </nav>
</template>

<style scoped src="../styles/navbar.css"></style>
