import mkcert from "vite-plugin-mkcert";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  dev: process.env.CONTENT_VERSION === "draft" ? true : undefined,
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  i18n: {
    defaultLocale: "en",
    locales: [
      { code: "en", name: "English" },
      { code: "de", name: "German" },
    ],
  },
  modules: [
    [
      "@storyblok/nuxt",
      {
        accessToken: process.env.STORYBLOK_DELIVERY_API_TOKEN,
        apiOptions: {
          region: "eu",
        },
      },
    ],
    "@nuxtjs/i18n",
  ],

  devServer: {
    https: true,
  },
  vite: {
    plugins: [mkcert()],
  },
});
