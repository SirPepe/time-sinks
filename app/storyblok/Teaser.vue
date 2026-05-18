<script setup>
defineProps({ blok: Object });
</script>

<template>
  <div class="teaser" v-editable="blok">
    <h2 class="teaser__headline">{{ blok.title }}</h2>
  </div>
</template>
