<script setup>
const { locale } = useI18n();
const config = useRuntimeConfig();
const storyblokApi = useStoryblokApi();
const { data: stories } = await useAsyncData(
  computed(() => `nav-${locale.value}`),
  () => {
    return storyblokApi.getAll("cdn/stories", {
      version:
        config.public.contentVersion === "published" ? "published" : "draft",
      level: 1,
      resolve_relations: "overview.items",
      sort_by: "created_at:asc",
      language: locale.value,
    });
  },
);
const { data: spaceData } = await storyblokApi.get("cdn/spaces/me", {});
const languages = ["en", ...spaceData.space.language_codes];
</script>

<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__list__item" v-for="item in stories" :key="item.uuid">
        <NuxtLink
          :href="
            $localePath(item.full_slug === 'home' ? '/' : '/' + item.full_slug)
          "
          >{{ item.content.title }}
        </NuxtLink>
        <ul
          class="nav__list nav__list--nested"
          v-if="item.content.items?.length"
        >
          <li
            class="nav__list__item nav__list__item--nested"
            v-for="item in item.content.items"
            :key="item.uuid"
          >
            <NuxtLink :href="$localePath(`/${item.full_slug}`)">{{
              item.content.title
            }}</NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
    <div class="nav__languages">
      <NuxtLink
        v-for="language in languages"
        :key="language"
        :to="$switchLocalePath(language)"
        >{{ language.toUpperCase() }}</NuxtLink
      >
    </div>
  </nav>
</template>
