<template>
  <nav class="navbar">
    <ul class="navbar__list">
      <li class="navbar__list__item"><a href="#about">Sobre</a></li>
      <li class="navbar__list__item"><a href="#projects">Projetos</a></li>
      <li class="navbar__list__item"><a href="#contact">Contatos</a></li>
    </ul>
    <ContactIcons width="20" />
  </nav>
</template>
<script setup lang="ts">
import ContactIcons from "./ContactIcons.vue";
</script>
<style scoped lang="scss">
@import "@/assets/styles/_Variables.scss";
.navbar {
  color: white;
  margin: 1rem 0rem;
  max-width: 935px;
}
.navbar__list {
  display: flex;
  gap: 4rem;
  padding: 0;
  margin: 0;
  font-weight: 200;
}

.navbar__list__item {
  list-style-type: none;
  transition: $transition-time;
  &:hover {
    color: $font-secondary-color;
  }
}

@media (min-width: 320px) and (max-width: 1023px) {
  .navbar__list {
    display: none;
  }
  .navbar {
    justify-content: center;
  }
}
</style>
