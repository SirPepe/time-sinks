<script setup>
defineProps({ blok: Object });
</script>

<template>
  <li>
    <a href="blok.link" v-if="blok.link">{{ blok.title }}</a>
    <template v-else>{{ blok.title }}</template>
    <i v-if="blok.short_description">{{ blok.short_description }}</i>
  </li>
</template>
