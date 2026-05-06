<script setup>
const { locale } = useI18n()

const path = useRoute().params.path || [];

const { story } = await useAsyncStoryblok(
  path.join('/') || "home",
  {
    api: {
      version: 'published',
      language: locale.value,
      resolve_relations: "overview.items",
    },
  },
);
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>