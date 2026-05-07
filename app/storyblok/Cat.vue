<script setup>
defineProps({ blok: Object });
</script>

<template>
  <div class="cat" v-editable="blok">
    <h2>{{ blok.title }}</h2>
    <figure>
      <img :src="blok.picture.filename" :alt="blok.picture.alt" />
    </figure>
    <StoryblokRichText :doc="fromMarkdown(blok.description)" />
  </div>
</template>
