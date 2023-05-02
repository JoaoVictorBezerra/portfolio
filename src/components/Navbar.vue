<template>
  <div class="container">
    <nav class="navbar">
      <ul class="navbar__list">
        <li class="navbar__list__item"><a href="#about">Sobre</a></li>
        <li class="navbar__list__item"><a href="#projects">Projetos</a></li>
        <li class="navbar__list__item"><a href="#contact">Contatos</a></li>
      </ul>
      <ContactIcons width="20" />
    </nav>
  </div>
</template>
<script setup lang="ts">
import ContactIcons from './ContactIcons.vue';
</script>
<style scoped lang="scss">
@import "@/assets/styles/variables.scss";
.navbar {
  color: white;
  font-weight: 200;
  margin: 1rem 0rem;
}
.navbar__list {
  display: flex;
  gap: 4rem;
  padding: 0;
  margin: 0;
}

.navbar__list__item {
  list-style-type: none;
  transition: 0.4s;
  &:hover {
    color: $secondary-color;
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
