<script setup>
const { locale } = useI18n();

const path = useRoute().params.path || [];

const { story } = await useAsyncStoryblok(path.join("/") || "home", {
  // Enable deep reactivity to fix live editing, see
  // https://github.com/storyblok/monoblok/issues/210#issuecomment-3227884450
  deep: true,
  api: {
    version:
      process.env.CONTENT_VERSION === "published" ? "published" : "draft",
    language: locale.value,
    resolve_relations: "overview.items",
  },
});
</script>

<template>
  <p>Debug: {{ process.env.CONTENT_VERSION }}</p>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
