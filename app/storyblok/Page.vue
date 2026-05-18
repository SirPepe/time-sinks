<script setup>
defineProps({ blok: Object });
</script>

<template>
  <main>
    <StoryblokComponent
      v-for="currentBlok in blok.blocks"
      :key="currentBlok._uid"
      :blok="currentBlok"
    />
  </main>
</template>
