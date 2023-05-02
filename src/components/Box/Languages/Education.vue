<template>
  <div class="html__text">
    <p>
      &lt;<span class="tag">p</span>&gt;<span class="text">Educação</span
      >&lt;/<span class="tag">p</span>&gt;
    </p>
    <p>&lt;<span class="tag">ul</span>&gt;</p>
    <p class="children-1">
      &lt;<span class="tag">li</span>&gt;<span class="text"
        >Sistemas de Informação: UNISANTA</span
      >&lt;/<span class="tag">li</span>&gt;
    </p>
    <p class="children-1">
      &lt;<span class="tag">li</span>&gt;<span class="text"
        >Alura: Level Up - Onebox</span
      >
      &lt;/<span class="tag">li</span>&gt;
    </p>
    <p class="children-1">
      &lt;<span class="tag">li</span>&gt;<span class="text"
        >Academia do Flutter</span
      >&lt;/<span class="tag">li</span>&gt;
    </p>
    <p>&lt;/<span class="tag">ul</span>&gt;</p>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
// Colors
@import '@/assets/styles/variables.scss';
$font-color: #757575;
$tag-color: #4d89ba;
$text-color: #ffffff;

.html__text {
  color: $font-color;
  font-size: 12px;
  font-family: $fira-sans;
}
p {
  margin: 0;
}
.children-1 {
  padding-left: 10px;
}

.tag {
  color: $tag-color;
}
.text {
  color: $text-color;
}
</style>
