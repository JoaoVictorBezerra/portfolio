<template>
  <div class="project" :class="{ 'flex-row-reverse': reverse }">
    <img :src="getImage(image)" :alt="title" width="300" />
    <div>
      <h5 class="project__title">{{ title }}</h5>
      <p class="project__text"><slot></slot></p>
      <p>
        <a class="project__link" :href="github + repositoryName" target="_blank"
          >Ver projeto no Github</a
        >
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
// Helpers
import getImage from "@/helpers/getImage";
import { onMounted, ref } from "vue";

defineProps({
  reverse: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  repositoryName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const github = "https://www.github.com/JoaoVictorBezerra/";
</script>
<style scoped lang="scss">
@import "@/assets/styles/_Variables.scss";

img {
  border-radius: 10px;
}
.project {
  display: flex;
  align-items: center;
  gap: 2rem;
}
.project__title {
  font-weight: 400;
}
.project__text {
  font-size: $extra-small;
  font-weight: 200;
  max-width: 400px;
  margin: 0.7rem 0rem;
}
.project__link {
  font-weight: 200;
  color: $font-detail-color;
  margin: 0;
  transition: $transition-time;
  &:hover {
    color: $font-secondary-color;
  }
}

@media (min-width: 320px) and (max-width: 425px) {
  .project {
    flex-direction: column !important;
  }
}
</style>
