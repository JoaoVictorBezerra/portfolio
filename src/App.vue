<script setup lang="ts">
import HomeVue from "@/pages/Home.vue";
import NavbarVue from "./components/Navbar.vue";
</script>

<template>
  <div class="container">
    <header>
      <NavbarVue />
    </header>
    <main>
      <HomeVue />
    </main>
  </div>
</template>

<style scoped>
.container {
  max-width: 935px;
}
</style>
