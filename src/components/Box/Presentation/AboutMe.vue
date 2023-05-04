<template>
  <div class="css__text">
    <p><span class="css__selector">.SobreMim</span> {</p>
    <p>
      <span class="css__property">Cargo: </span>
      <span class="css__declaration">Desenvolvedor Front End Jr.</span>;
    </p>
    <p>
      <span class="css__property">Linguagens: </span>
      <span class="css__declaration"
        >Javascript, Typescript, Dart</span
      >;
    </p>
    <p>
      <span class="css__property">Estilização: </span
      ><span class="css__declaration">CSS, SCSS, Bootstrap, Vuetify</span>;
    </p>
    <p>
      <span class="css__property">Frameworks: </span
      ><span class="css__declaration">Vue.js, Flutter</span>;
    </p>
    <p>
      <span class="css__property">Extras: </span
      ><span class="css__declaration">GIT, AWS</span>;
    </p>
    <p>}</p>
  </div>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
@import '@/assets/styles/_Variables.scss';
$selector-color: #d4b87b;
$property-color: #9cdcfe;
$declaration-color: #b5cea8;
$font-color: #ffffff;

.css__text {
  color: $font-color;
  font-family: $fira-sans;
}

p {
  margin: 0;
  font-size: $extra-small;
}

.css__selector {
  color: $selector-color;
}
.css__property {
  color: $property-color;
  margin-left: 1rem;
}
.css__declaration {
  color: $declaration-color;
}
</style>
