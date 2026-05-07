<script setup>
const { locale } = useI18n();
const config = useRuntimeConfig();

const path = useRoute().params.path || [];

const { story } = await useAsyncStoryblok(path.join("/") || "home", {
  // Enable deep reactivity to fix live editing, see
  // https://github.com/storyblok/monoblok/issues/210#issuecomment-3227884450
  deep: true,
  api: {
    version:
      config.public.contentVersion === "published" ? "published" : "draft",
    language: locale.value,
    resolve_relations: "overview.items",
  },
});
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
