<template>
  <section id="posts">
    <volunteering-grid></volunteering-grid>
  </section>
</template>

<script>
export default {
  created() {
    useHead({
      title: "Volunteering",
    });
  },
};
</script>
<style scoped>
#posts {
  position: relative;
}
</style>
