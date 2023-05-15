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
      meta: [
        {
          name: "Volunteering page",
          content:
            "13 hours of Volunteering I have done at Willing hearts layed out in a grid form",
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
