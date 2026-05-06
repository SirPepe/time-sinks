<script setup>
defineProps({ blok: Object })
</script>

<template>
  <div class="teaser">
    <h2><a :href="blok.link.url">{{ blok.title }}</a></h2>
    <StoryblokRichText :doc="fromMarkdown(blok.description)" />
  </div>
</template>