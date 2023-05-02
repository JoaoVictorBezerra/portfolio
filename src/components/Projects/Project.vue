<template>
  <div class="project" :class="{ 'flex-row-reverse': reverse }">
    <img src="@/assets/images/image1.png" alt="Projeto 1" width="300" />
    <div>
      <h5 class="project__title">{{ title }}</h5>
      <p class="project__text"><slot></slot></p>
      <p class="project__link"><a :href="url">Ver projeto no Github</a></p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  reverse: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true
  }
});

</script>
<style scoped lang="scss">
@import "@/assets/styles/variables.scss";
.project {
  display: flex;
  align-items: center;
  gap: 2rem;
}
.project__text {
  font-size: 12px;
  font-weight: 200;
  max-width: 400px;
}
.project__link {
  font-weight: 300;
  color: $detail-color;
  margin: 0;
  transition: 0.2s;
  &:hover {
    color: $secondary-color;
  }
}

@media (min-width: 320px) and (max-width: 425px) {
  .project {
    flex-direction: column !important;
  }
}
</style>
