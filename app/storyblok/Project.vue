<script setup>
defineProps({ blok: Object });
</script>

<template>
  <div class="project" v-editable="blok">
    <h2>
      <a :href="blok.link.url">{{ blok.title }}</a>
    </h2>
    <div class="project__content">
      <figure class="project__content__figure">
        <img :src="blok.picture.filename" :alt="blok.picture.alt" />
      </figure>
      <StoryblokRichText :doc="fromMarkdown(blok.description)" />
    </div>
  </div>
</template>
