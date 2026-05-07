<script setup>
defineProps({ blok: Object });
</script>

<template>
  <div class="project" v-editable="blok">
    <h2>
      <a :href="blok.link.url">{{ blok.title }}</a>
    </h2>
    <figure>
      <img :src="blok.picture.filename" :alt="blok.picture.alt" />
    </figure>
    <StoryblokRichText :doc="fromMarkdown(blok.description)" />
  </div>
</template>
