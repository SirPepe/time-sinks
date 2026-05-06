<script setup>
defineProps({ blok: Object })
</script>

<template>
  <div class="teaser">
    <h2>{{ blok.name }}</h2>
    <p>{{ blok.link }}</p>
    <p>{{ blok.description }}</p>
  </div>
</template>