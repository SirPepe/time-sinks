<script setup>
  const stories = await useStoryblokApi().getAll('cdn/stories', {
    level: 1,
    resolve_relations: "overview.items",
    sort_by: "created_at:asc",
  });

  const lang = useLanguage();
  console.log(lang.value);
</script>

<template>
  <nav>
    <ul>
      <li v-for="item in stories" :key="item.uuid">
        <NuxtLink :href="item.full_slug === 'home' ? '/' : '/' + item.full_slug">{{ item.content.title }}</NuxtLink>
        <ul v-if="item.content.items?.length">
          <li v-for="item in item.content.items" :key="item.uuid">
            <NuxtLink :href="`/${item.full_slug}`">{{ item.content.title }}</NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
    <select name="language" v-model="lang">
      <option value="de">DE</option>
      <option value="en">EN</option>
    </select>
  </nav>
</template>