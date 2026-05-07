<script setup>
defineProps({ blok: Object })
</script>

<template>
  <div class="teaser" v-editable="blok">
    <h2>{{ blok.title }}</h2>
  </div>
</template>