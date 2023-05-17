<template>
  <div v-if="articleContent.image" class="thumbnail">
    <nuxt-img provider="imagekit" :src="cdnImage" class="thumbnail-image" />
  </div>
  <div v-if="articleContent.video" class="ytvid">
    <Base-Youtube-player
      :title="articleContent.video.title"
      :ytvid="articleContent.video.id"
      :thumbnail="
        articleContent.video.thumbnail
          ? 'https://ik.imagekit.io/1vyqdxrhm/tr:pr-true,f-webp,' +
            articleContent.video.thumbnail
          : ''
      "
    ></Base-Youtube-player>
  </div>
  <!-- .Thumbnail -->
  <!-- content -->
  <div
    v-if="articleContent.text"
    class="content text-dark display-2 secondary-title mt-3"
  >
    <p v-html="articleContent.text"></p>
  </div>
</template>
<script>
// import sanitizeHtml from "sanitize-html";

export default {
  props: ["articleContent"],
  computed: {
    cdnImage() {
      if (this.articleContent.image) {
        return "tr:pr-true,f-webp," + this.articleContent.image;
      }
    },
  },
};
</script>
<style scoped>
.ytvid {
  margin-top: 40px;
  width: 70vw !important;
  height: auto !important;
}
</style>
