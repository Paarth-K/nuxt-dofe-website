<template>
  <div>
    <template>
      <section id="posts">
        <volunteering-grid></volunteering-grid>
      </section>
    </template>
  </div>
</template>
<script>
export default {
  created() {
    useHead({
      title: "Paarth's DofE Website!",
    });
  },
};
</script>
