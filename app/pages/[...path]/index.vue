<script setup>
const ALTERNATIVE_LANGUAGES = ["de"];
let language = "en";

const path = useRoute().params.path ?? [];

if (ALTERNATIVE_LANGUAGES.includes(path[0])) {
  language = path[0];
  path.shift();
}

const { story } = await useAsyncStoryblok(
  path.join('/') || "home",
  {
    api: {
      version: 'published',
      language,
    },
  },
);

console.log({path, story, language});
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>