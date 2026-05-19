<script>
import "~/assets/index.css";
</script>

<template>
  <header>
    <div class="container">
      <h1 class="title">
        <span class="title__text">Peter's side projects</span>
        <span class="title__amp">&</span>
        <span class="title__text">other time sinks</span>
      </h1>
      <Nav />
    </div>
  </header>
  <main>
    <div class="container">
      <slot />
    </div>
  </main>
  <footer>
    <div class="container">
      <p>{{ $t("footer") }}</p>
    </div>
  </footer>
</template>
