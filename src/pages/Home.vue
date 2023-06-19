<script setup lang="ts">
// Components
import Company from "@/components/Box/Company/CompanyBox.vue";
import Presentation from "@/components/Box/Presentation/PresentationBox.vue";
import Project from "@/components/Projects/Project.vue";
import ContactIcons from "@/components/ContactIcons.vue";

// Models
import * as CompanyName from "@/models/CompanyModel";

</script>

<template>
  <div class="container">
    <div id="about" class="about">
      <div class="about__text">
        <h2>Olá</h2>
        <h2>Sou o João Victor</h2>
        <h2>Desenvolvedor front-end.</h2>
      </div>
      <div class="about__languages">
        <Presentation />
      </div>
    </div>
    <div class="works">
      <h3 class="works__title">Experiência</h3>
      <div class="works__box">
        <Company :company="CompanyName.onebox" />
        <Company :company="CompanyName.deltaFox" />
        <Company :company="CompanyName.grupoVerreschi" />
      </div>
    </div>
    <div id="projects" class="projects">
      <h2>Últimos trabalhos</h2>
      <div class="projects__box">
        <Project image="comex-frontend.png" title="Comex Front End" repository-name="vue-comex-frontend" :reverse="false">
          O projeto de e-commerce fictício desenvolvido a partir da trilha de
          estudos Alura Level Up em conjunto com a empresa Onebox consiste em
          uma plataforma online de vendas de produtos.
        </Project>
        <Project image="carango-bom.png" title="Carango Bom" repository-name="vue-carango-bom" :reverse="true">
          O projeto desenvolvido em conjunto pela Alura Level Up e Onebox, um
          site fictício de venda de carros que tem como objetivo oferecer uma
          experiência única e personalizada para os usuários.
        </Project>
        <Project image="portfolio.png" title="Portfólio" repository-name="portfolio" :reverse="false">
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
@import "@/assets/styles/_Variables.scss";
.container {
  max-width: fit-content;
  margin-top: 5rem;
}
.about {
  display: flex;
  justify-content: space-between;
  max-width: 935px;
}
.about__text {
  h2 {
    color: $font-detail-color;
    font-weight: 200;
  }
  h2:nth-child(2) {
    color: $font-primary-color;
    font-weight: 400;
  }
}
.works {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: $section-space;
}
.works__title {
  color: $font-primary-color;
  margin: 2rem 0rem 0rem 0rem;
}
.works__box {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}
.projects {
  margin-top: $section-space;
  color: $font-primary-color;
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
  color: $font-primary-color;
  gap: 2rem;
  margin-top: 3rem;
  text-align: center;
}
.contact__text {
  font-weight: 300;
}
.contact__email {
  font-size: 14px;
  font-weight: 300;
  color: $font-detail-color;
  transition: $transition-time;
  &:hover {
    color: $font-secondary-color;
  }
}
.footer {
  margin-top: 2rem;
  border-top: 1px solid $font-secondary-color;
  color: $font-primary-color;
  font-size: $extra-small;
  font-weight: 300;
  text-align: center;
  p {
    margin: 2rem 0rem;
  }
}
@media screen and (max-width: 576px) {
  .about {
    flex-direction: column;
  }
  .about__languages {
    align-self: center;
  }
  .works__box {
    align-items: center;
    flex-direction: column;
    gap: $section-space;
  }
}
@media (min-width: 768px) {
  .about {
    align-items: center;
  }
}
</style>
