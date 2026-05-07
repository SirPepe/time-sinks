<script setup>
const { locale } = useI18n();
const storyblokApi = useStoryblokApi();
const stories = await storyblokApi.getAll("cdn/stories", {
  level: 1,
  resolve_relations: "overview.items",
  sort_by: "created_at:asc",
  language: locale.value,
});
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
      <NuxtLink :to="$switchLocalePath('en')">EN</NuxtLink>
      |
      <NuxtLink :to="$switchLocalePath('de')">DE</NuxtLink>
    </div>
  </nav>
</template>
