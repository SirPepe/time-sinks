<script setup>
  const { locale } = useI18n();
  const storyblokApi = useStoryblokApi();
  const stories = await storyblokApi.getAll('cdn/stories', {
    level: 1,
    resolve_relations: "overview.items",
    sort_by: "created_at:asc",
    language: locale.value,
  });
</script>

<template>
  <nav>
    <ul>
      <li v-for="item in stories" :key="item.uuid">
        <NuxtLink :href="$localePath(item.full_slug === 'home' ? '/' : '/' + item.full_slug)">{{ item.content.title }}</NuxtLink>
        <ul v-if="item.content.items?.length">
          <li v-for="item in item.content.items" :key="item.uuid">
            <NuxtLink :href="$localePath(`/${item.full_slug}`)">{{ item.content.title }}</NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
    <NuxtLink :to="$switchLocalePath('en')">English</NuxtLink>
    <NuxtLink :to="$switchLocalePath('de')">Deutsch</NuxtLink>
  </nav>
</template>