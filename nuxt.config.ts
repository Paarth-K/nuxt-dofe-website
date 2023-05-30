// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/style.scss"],

  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: `
  //           @import "@/assets/theme.scss";
  //         `,
  //       },
  //     },
  //   },
  // },

  // experimental: {
  //   componentIslands: true,
  // },
  modules: ["@nuxt/image-edge", "nuxt-icon", "nuxt-simple-sitemap"],
  runtimeConfig: {
    public: {
      siteUrl:
        process.env.NUXT_PUBLIC_SITE_URL ||
        "https://www.paarthkukrejadofe.eu.org",
    },
  },
  routeRules: {
    // Static page generated on-demand, revalidates in background (ISG)
    "/volunteering/**": { isr: true },
    "/adventurous-journey/**": { isr: true },
  },
  image: {
    imagekit: {
      baseURL: "https://ik.imagekit.io/1vyqdxrhm/",
    },
  },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      script: [
        {
          children: `(function(c,l,a,r,i,t,y){ c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)}; t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i; y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y); })(window, document, "clarity", "script", "gnxxzdn7ib");`,
        },
      ],
      charset: "utf-8",

      htmlAttrs: {
        lang: "en",
      },
    },
  },

  devtools: {
    enabled: true,
  },
});
