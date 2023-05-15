<template>
  <div>
    <section id="posts">
      <volunteering-grid></volunteering-grid>
    </section>
  </div>
</template>
<script>
export default {
  created() {
    useHead({
      title: "Paarth's DofE Website!",
      meta: [
        {
          name: "Home page",
          content:
            "Home page of the website",
        },
      ],
    });
  },
};
</script>
