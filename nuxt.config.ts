import mkcert from "vite-plugin-mkcert";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  dev: process.env.CONTENT_VERSION === "draft" ? true : undefined,
  runtimeConfig: {
    public: {
      storyblokDeliveryApiToken: "",
      contentVersion: "",
    },
  },
  compatibilityDate: "2025-07-15",
  devtools: {
    enabled: true,
  },
  i18n: {
    defaultLocale: "en",
    locales: [
      { code: "en", name: "English" },
      { code: "de", name: "Deutsch" },
    ],
  },
  modules: [
    [
      "@storyblok/nuxt",
      {
        accessToken: process.env.NUXT_PUBLIC_STORYBLOK_DELIVERY_API_TOKEN,
        apiOptions: {
          region: "eu",
        },
      },
    ],
    "@nuxtjs/i18n",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          "Noticia Text": {
            wght: [400, 700],
            ital: [400, 700],
          },
        },
      },
    ],
  ],
  devServer: {
    https: true,
  },
  vite: {
    plugins: [mkcert()],
  },
});
