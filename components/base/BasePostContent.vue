<template>
  <div class="thumbnail">
    <img v-if="showImage" :src="cdnImage" class="thumbnail-image" />
  </div>
  <!-- .Thumbnail -->
  <!-- content -->
  <div class="content text-dark display-2 secondary-title mt-3">
    <p v-html="articleContent.text"></p>
  </div>
</template>
<script>
// import sanitizeHtml from "sanitize-html";

export default {
  props: ["articleContent"],
  computed: {
    showImage() {
      if (this.articleContent.image == "none") {
        return false;
      } else {
        return true;
      }
    },
    // sanitizedArticleContent() {
    //   const clean = sanitizeHtml(this.articleContent.text, {
    //     allowedTags: ["b", "i", "em", "strong", "a"],
    //     allowedAttributes: {
    //       a: ["href"],
    //     },
    //     allowedIframeHostnames: ["www.youtube.com"],
    //   });
    //   return clean;
    // },
    cdnImage() {
      return (
        "https://ik.imagekit.io/1vyqdxrhm/tr:pr-true,f-webp," +
        this.articleContent.image
      );
    },
  },
};
</script>
