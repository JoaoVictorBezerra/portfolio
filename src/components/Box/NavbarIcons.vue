<template>
  <div class="icons">
    <div class="circle__red"></div>
    <div class="circle__yellow"></div>
    <div class="circle__green"></div>
  </div>
</template>
<script setup lang="ts">
</script>
<style scoped lang="scss">
// Colors
$red: #FF5F56;
$yellow: #FFBD2E;
$green: #27C93F;

@mixin circle {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.icons {
  display: flex;
  gap: 0.5rem;
}

.circle__red {
  @include circle();
  background-color: $red;
}
.circle__yellow {
  @include circle();
  background-color: $yellow;
}
.circle__green {
  @include circle();
  background-color: $green;
}
</style>
