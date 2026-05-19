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
      <div class="project__content__text">
        <StoryblokRichText :doc="fromMarkdown(blok.description)" />
        <aside v-if="blok.other_links.length > 0">
          <h3>Links</h3>
          <ul>
            <StoryblokComponent
              v-for="otherLink in blok.other_links"
              :key="otherLink._uid"
              :blok="otherLink"
            />
          </ul>
        </aside>
      </div>
    </div>
  </div>
</template>
