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
  modules: ["@nuxt/image-edge"],
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
    },
  },
});
