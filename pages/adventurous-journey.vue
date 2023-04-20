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
    });
  },
};
</script>
<style scoped>
#posts {
  position: relative;
}
</style>
