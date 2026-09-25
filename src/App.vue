<script setup lang="ts">
import TopBar from './Components/TopBar.vue'
import NavBar from './Components/NavBar.vue'

</script>

<template>
  <div id="app">
    <div id="top-bar">
      <TopBar />
    </div>
    <div id="nav-bar">
      <NavBar />
    </div>
    <router-view />
  </div>
</template>
