<template>
  <section id="posts">
    <aj-journeys-grid></aj-journeys-grid>
  </section>
</template>

<script>
export default {
  created() {
    useHead({
      title: "Adventurous Journey",
      meta: [
        {
          name: "Adventurous Journey page",
          content:
            "Browse the practise adventurous journey, and the real adventurous journey",
        },
      ],
    });
  },
};
</script>
<style scoped>
#posts {
  position: relative;
}
</style>
