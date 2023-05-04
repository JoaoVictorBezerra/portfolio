<template>
  <div class="box" role="alert">
    <div class="box__navbar">
      <AppleIcons class="box__navbar__icons" />
      <div class="box__tabs">
        <div class="box__tabs__list">
          <button
            @click="selectedOption()"
            class="box__tab"
            :class="{ clicked: aboutMe }"
          >
            <img src="@/assets/images/css-3.svg" alt="HTML Image" width="15" />
            <p>Sobre_mim.css</p>
          </button>
          <button
            @click="selectedOption()"
            class="box__tab"
            :class="{ clicked: education }"
          >
            <img src="@/assets/images/html-5.svg" alt="HTML Image" width="15" />
            <p>Educação.html</p>
          </button>
        </div>
      </div>
      <div class="box__navbar__box__url">
        <p class="box__navbar__url">{{ url + tabSelected }}</p>
      </div>
    </div>
    <div class="box__experiences">
      <Education v-if="education" />
      <AboutMe v-if="aboutMe" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/_Variables.scss";

// Colors
$box-background-color: #1e1e1e;
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

.box {
  border-radius: 10px 10px 0px 0px;
  color: $font-secondary-color;
  width: 300px;
  height: 250px;
  padding: 0.8rem;
  background-color: $box-background-color;
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
  margin: 0;
  padding-top: 2px;
  padding-right: 25px;
  padding-bottom: 2px;
  padding-left: 25px;
  font-size: $extra-small;
  text-align: center;
  font-family: $fira-sans;
}
.box__tabs__list {
  border-radius: 10px;
  background-color: $box-navigation;
  display: flex;
  color: $font-primary-color;
}
.box__tabs {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.box__tab {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  font-size: $extra-small;
  transition: $transition-time;
  border-radius: 10px 10px 0px 0px;
}
.box__experiences {
  margin-top: 1rem;
}

.clicked {
  background-color: $box-background-color;
}

@media (min-width: 319px) {
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
    width: 480px !important;
  }
}
</style>
<script setup lang="ts">
// Vue
import { ref } from "vue";

// Components
import AppleIcons from "@/components/Box/AppleIcons.vue";
import AboutMe from "@/components/Box/Presentation/AboutMe.vue";
import Education from "@/components/Box/Presentation/Education.vue";

const aboutMe = ref<Boolean>(true);
const education = ref<Boolean>(false);
const tabSelected = ref<String>("sobre-mim");

function selectedOption(): void {
  if(education.value == true) {
    education.value = false
    aboutMe.value = true
  } else {
    education.value = true
    aboutMe.value = false
  }
}

const url: string = document.documentURI;


</script>