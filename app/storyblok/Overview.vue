<script setup>
defineProps({ blok: Object })
</script>

<template>
  <div class="teaser">
    <h2>{{ blok.title }}</h2>
    <p>
      ADD RICH TEXT HERE
    </p>
    <section class="grid">
      <NuxtLink v-for="item in blok.items" :key="item.uuid" :href="$localePath(`/${item.full_slug}`)">{{ item.content.title }}</NuxtLink>
    </section>
  </div>
</template>