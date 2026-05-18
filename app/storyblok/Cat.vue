<script setup>
defineProps({ blok: Object });
</script>

<template>
  <div class="cat" v-editable="blok">
    <h2>{{ blok.title }}</h2>
    <div class="cat__content">
      <figure class="cat__content__figure">
        <img
          class="photo"
          :src="blok.picture.filename"
          :alt="blok.picture.alt"
        />
      </figure>
      <StoryblokRichText :doc="fromMarkdown(blok.description)" />
    </div>
  </div>
</template>
