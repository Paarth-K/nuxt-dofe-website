<template>
  <div>
    <section id="posts">
      <volunteering-grid></volunteering-grid>
    </section>
  </div>
</template>
<script setup>
useHead({
  title: "Paarth's DofE Website!",
  meta: [
    {
      name: "Home page",
      content: "Home page of Paarth Kukreja's Duke of Edinburgh Nuxt Website",
    },
  ],
});
useServerSeoMeta({
  title: "Home page",
  description: "Home page of Paarth Kukreja's Duke of Edinburgh Nuxt Website",
});
</script>
