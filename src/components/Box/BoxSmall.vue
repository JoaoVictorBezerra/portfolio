<template>
  <div class="box box-dark">
    <NavbarIcons />
    <p class="box__title">
      {{ company.initialDate + "-" + company.finishDate + " - "
      }}<span class="fw-bold">{{ company.companyName }}</span>
    </p>
    <div class="mt-3 d-flex justify-content-center">
      <img
        :src="getImageUrl(company.image)"
        alt="Logo Verreschi"
        width="150"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
// Componentes
import NavbarIcons from "@/components/Box/NavbarIcons.vue";
defineProps({
  company: {
    type: Object,
    required: true,
  },
});

const images = {
  verreschi: "logo_verreschi.png",
  deltaFox: "logo_deltafox.png",
  onebox: "logo_onebox.png"
};

// Passando imagem via parâmetro.
const getImageUrl = (name: any) => {
  return new URL(`../../assets/images/${name}`, import.meta.url).href;
};
</script>

<style scoped lang="scss">
// Variáveis
@import '@/assets/styles/variables.scss';

.box {
  border-radius: 10px;
  color: $secondary-color;
  width: 300px;
  height: 250px;
  padding: 0.8rem 0.8rem 0.8rem 0.8rem;
  font-family: $fira-sans;
}
.box-dark {
  background: linear-gradient(180deg, #171a1b 0%, rgba(23, 26, 27, 0) 100%);
  opacity: 0.8;
}
.box__title {
  font-size: $small;
  margin: 1.5rem 0rem 0rem 0rem;
}
</style>
