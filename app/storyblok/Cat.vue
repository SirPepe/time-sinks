<script setup>
defineProps({ blok: Object })
</script>

<template>
  <div class="teaser">
    <h2>{{ blok.title }}</h2>
    <p>
      <img :src="blok.picture.filename" :alt="blok.picture.alt">
    </p>
    <StoryblokRichText :doc="fromMarkdown(blok.description)" />
  </div>
</template>