<template>
  <ul class="navbar__icons">
    <li class="navbar__list__icon">
      <a
        href="https://www.linkedin.com/in/jo%C3%A3o-victor-bezerra-a62b62204/"
        target="_blank"
      >
        <img src="@/assets/images/linkedin.svg" alt="Linkedin" :width="width" />
      </a>
    </li>
    <li class="navbar__list__icon">
      <a href="https://github.com/joaovictorbezerra" target="_blank">
        <img src="@/assets/images/github.svg" alt="Github" :width="width" />
      </a>
    </li>
  </ul>
</template>
<script setup lang="ts">
defineProps({
  width: {
    type: String,
    required: true,
  },
});
</script>
<style scoped lang="scss">
.navbar__icons {
  display: flex;
  gap: 1rem;
  padding: 0;
  margin: 0;
}
.navbar__list__icon {
  list-style-type: none;
  transition: 0.4s;
}
</style>
