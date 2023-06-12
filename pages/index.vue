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
      content: "Home page of Paarth Kukreja's Duke of Edinburgh Website",
    },
  ],
});
useServerSeoMeta({
  title: "Paarth's DofE Website",
  description: "Home page of Paarth Kukreja's Duke of Edinburgh Website",
});
</script>
