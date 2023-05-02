<template>
  <div class="box box-dark" role="alert">
    <div class="box__navbar">
      <NavbarIcons class="box__navbar__icons" />
      <div class="box__tabs">
        <div class="box__tabs__list">
          <button
            @click="aboutMeToggle()"
            class="box__tab"
            :class="{ clicked: aboutMe }"
          >
            <img src="@/assets/images/css-3.svg" alt="HTML Image" width="15" />
            <p>Sobre_mim.css</p>
          </button>
          <button
            @click="educationToggle()"
            class="box__tab"
            :class="{ clicked: education }"
          >
            <img src="@/assets/images/html-5.svg" alt="HTML Image" width="15" />
            <p>Educação.html</p>
          </button>
        </div>
      </div>
      <div class="box__navbar__box__url">
        <p class="box__navbar__url">www.joaovictor.com.br/{{ tabSelected }}</p>
      </div>
    </div>
    <div class="box__experiences">
      <Education v-if="education" />
      <AboutMe v-if="aboutMe" />
    </div>
  </div>
</template>
<script setup lang="ts">
// Vue
import { ref } from "vue";
// Components
import NavbarIcons from "@/components/Box/NavbarIcons.vue";
import AboutMe from "@/components/Box/Languages/AboutMe.vue";
import Education from "@/components/Box/Languages/Education.vue";

const aboutMe = ref<Boolean>(true);
const education = ref<Boolean>(false);
const tabSelected = ref<String>("sobre-mim");

function aboutMeToggle(): void {
  education.value = false;
  aboutMe.value = true;
  tabSelected.value = "sobre-mim";
}
function educationToggle(): void {
  education.value = true;
  aboutMe.value = false;
  tabSelected.value = "educação";
}
</script>
<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

// Colors
$box-background: #1e1e1e;
$box-border: #4a4a4a;
$box-navigation: #2b2b2b;

// Reset CSS Button
button {
  background-color: inherit;
  color: white;
  border: none;
  margin: 0;
  padding: 0;
}

p {
  margin: 0;
}

.box {
  border-radius: 10px 10px 0px 0px;
  color: $secondary-color;
  width: 300px;
  height: 250px;
  padding: 0.8rem 0.8rem 0.8rem 0.8rem;
  opacity: 0.9;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.8);
}
.box-dark {
  background-color: $box-background;
  opacity: 0.9;
}
.box__navbar {
  display: flex;
  flex-direction: column;
  width: 70%;
}
.box__navbar__icons {
  flex-grow: 1;
}
.box__navbar__box__url {
  background-color: #202226;
  border-radius: 10px;
}
.box__navbar__url {
  margin: 0px;
  padding: 2px 25px 2px 25px;
  font-size: 11px;
  text-align: center;
  font-family: $fira-sans;
}
.box__tabs__list {
  border-radius: 5px;
  background-color: $box-navigation;
  display: flex;
  color: white;
}
.box__tabs {
  margin: 0.5rem 0rem 0.5rem 0rem;
}
.box__tab {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  font-size: 12px;
  transition: 0.5s;
  border-radius: 10px 10px 0px 0px;
}
.box__experiences {
  margin: 1rem 0rem 0rem 0rem;
}

.clicked {
  background-color: $box-background;
}

@media (min-width: 319px) /* and (max-width: 425px) */ {
  .box__navbar {
    width: 100% !important;
  }
  .box__tab {
    flex-grow: 1;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .box {
    width: 400px !important;
  }
  .box__navbar__box__url {
    flex-grow: 1;
  }
}
@media (min-width: 1024px) {
  .box__navbar__box__url {
    flex-grow: 1;
  }
  .box {
    width: 500px !important;
  }
}
</style>
