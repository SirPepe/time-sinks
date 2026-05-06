<script setup>
const { locale } = useI18n()

const path = useRoute().params.path || [];

const { story } = await useAsyncStoryblok(
  path.join('/') || "home",
  {
    api: {
      version: 'published',
      language: locale.value,
    },
  },
);
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>