<script setup>
defineProps({ blok: Object })
</script>

<template>
  <div class="overview" v-editable="blok">
    <h2>{{ blok.title }}</h2>
    <StoryblokRichText :doc="fromMarkdown(blok.description)" />
    <section class="featured">
      <NuxtLink v-for="item in blok.items" :key="item.uuid" :href="$localePath(`/${item.full_slug}`)" class="featured__item">
        <h3 class="featured__item__title">{{ item.content.title }}</h3>
        <img class="featured__item__image" :src="item.content.picture.filename" :alt="item.content.picture.alt">
        <div class="featured__item__text">{{ item.content.short_description }}</div>
      </NuxtLink>
    </section>
  </div>
</template>