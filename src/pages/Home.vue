<script setup lang="ts">
import BoxSmall from "@/components/Box/BoxSmall.vue";
import BoxMedium from "@/components/Box/BoxMedium.vue";
import { Company } from "@/models/BoxSmall";
import Project from "@/components/Projects/Project.vue";
import ContactIcons from "@/components/ContactIcons.vue";

const grupoVerreschi = new Company(
  "Grupo Verreschi",
  "01/2022",
  "08/2022",
  "logo_verreschi.png"
);
const deltaFox = new Company(
  "Delta Fox Consultoria",
  "08/2022",
  "11/2022",
  "logo_deltafox.svg"
);
const onebox = new Company(
  "Onebox Tech",
  "11/2022",
  "Presente",
  "logo_onebox.svg"
);
</script>

<template>
  <div class="container">
    <div id="about" class="about">
      <div class="about__text">
        <h2 class="text-detail fw-light">Olá</h2>
        <h2 class="text-white fw-bold">Sou o João Victor</h2>
        <h2 class="text-detail fw-light">Desenvolvedor frontend.</h2>
      </div>
      <div class="about__languages">
        <BoxMedium />
      </div>
    </div>
    <div class="works">
      <h3 class="works__title">Experiência</h3>
      <div class="works__box">
        <BoxSmall :company="grupoVerreschi" />
        <BoxSmall :company="deltaFox" />
        <BoxSmall :company="onebox" />
      </div>
    </div>
    <div id="projects" class="projects">
      <h2>Últimos trabalhos</h2>
      <div class="projects__box">
        <Project title="Comex Front End" url="https://github.com/JoaoVictorBezerra/vue-comex-frontend" :reverse="false">
          O projeto de e-commerce fictício desenvolvido a partir da trilha de
          estudos Alura Level Up em conjunto com a empresa Onebox consiste em
          uma plataforma online de vendas de produtos.
        </Project>
        <Project title="Carango Bom" url="https://github.com/JoaoVictorBezerra/vue-carango-bom" :reverse="true">
          O projeto desenvolvido em conjunto pela Alura Level Up e Onebox, um
          site fictício de venda de carros que tem como objetivo oferecer uma
          experiência única e personalizada para os usuários.
        </Project>
        <Project title="Portfólio" url="https://github.com/JoaoVictorBezerra/portfolio" :reverse="false">
          O portfólio é uma excelente opção para apresentar o meu trabalho,
          habilidades e experiência em desenvolvimento web.
        </Project>
      </div>
    </div>
    <div id="contact" class="contact">
      <h5 class="contact__text">Gostaria de fazer um contato?</h5>
      <ContactIcons width="30" />
      <h5 class="contact__text">
        Tem algum projeto em mente? Posso torna-lo em realidade
      </h5>
      <p class="contact__email"><a href="mailto:dev.joaovictor@hotmail.com">dev.joaovictor@hotmail.com</a></p>
    </div>
    <footer class="footer">
      <p>2023 - Todos os direitos reservados.</p>
    </footer>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";
.container {
  max-width: fit-content;
  margin-top: 5rem;
}
.about {
  display: flex;
  justify-content: space-between;
  max-width: 935px;
}
.works {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 3rem;
}
.works__title {
  color: $primary-color;
  margin: 2rem 0rem 0rem 0rem;
}
.works__box {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}
.projects {
  margin-top: 3rem;
  color: $primary-color;
}
.projects__box {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.contact {
  display: flex;
  align-items: center;
  flex-direction: column;
  color: $primary-color;
  gap: 2rem;
  margin-top: 3rem;
  text-align: center;
}
.contact__text {
  font-weight: 300;
}
.contact__icons {
  display: flex;
  gap: 1rem;
}
.contact__email {
  font-size: 14px;
  font-weight: 300;
  color: $detail-color;
  transition: 0.2s;
  &:hover {
    color: $secondary-color;
  }
}
.footer {
  margin-top: 2rem;
  border-top: 1px solid $secondary-color;
  color: $primary-color;
  font-size: 12px;
  font-weight: 300;
  text-align: center;
  p {
    margin: 2rem 0rem;
  }
}
@media (min-width: 320px) and (max-width: 425px) {
  .about {
    flex-direction: column;
  }
  .about__languages {
    align-self: center;
  }
  .works__box {
    align-items: center;
    flex-direction: column;
    gap: 3rem;
  }
}
@media (min-width: 768px) {
  .about {
    align-items: center;
  }
}

.text-detail {
  color: $detail-color;
}
</style>
