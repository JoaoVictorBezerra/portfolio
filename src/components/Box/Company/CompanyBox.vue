<template>
  <div class="box box-dark">
    <AppleIcons />
    <p class="box__title">
      {{ company.initialDate + "~" + company.finishDate + " - " + company.companyName }}
    </p>
    <div class="mt-3 d-flex justify-content-center">
      <img :src="getImage(company.image)" :alt="company.companyName" width="150" />
    </div>
  </div>
</template>
<script setup lang="ts">
// Componentes
import AppleIcons from "@/components/Box/AppleIcons.vue";

// Helpers
import getImage from "@/helpers/getImage";

// Props
defineProps({
  company: {
    type: Object,
    required: true,
  },
});

const images = {
  verreschi: "logo_verreschi.png",
  deltaFox: "logo_deltafox.png",
  onebox: "logo_onebox.png",
};
</script>

<style scoped lang="scss">
// Variáveis
@import "@/assets/styles/_Variables.scss";

.box {
  border-radius: 10px;
  color: $font-secondary-color;
  width: 300px;
  height: 250px;
  padding: 1rem;
  font-family: $fira-sans;
}
.box-dark {
  background: linear-gradient(180deg, #171a1b 0%, rgba(23, 26, 27, 0) 100%);
  opacity: 0.8;
}
.box__title {
  font-size: $extra-small;
  margin-top: 1rem;
}
</style>
