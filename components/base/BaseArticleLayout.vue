<template>
  <!-- Post Content -->
  <section class="container">
    <article id="post">
      <!-- Article Heading -->
      <div class="headings text-center">
        <div class="category">
          <nuxt-link :href="mainSectionPath" class="nav-link">{{
            mainSectionName
          }}</nuxt-link>
        </div>
        <div class="title">
          <h2 class="text-title text-dark display-1">
            {{ articleContent.title }}
          </h2>
        </div>
        <div class="meta">
          <a href="#" class="link display-2 text-secondary px-1">
            <icon name="ic:twotone-access-time" class="text-primary"></icon>
            {{ articleContent.date }}
          </a>
        </div>
      </div>
      <!-- .Article Heading -->
      <base-post-content
        v-for="articleContentPair in articleContent.content"
        :article-content="articleContentPair"
        :key="articleContentPair"
      ></base-post-content>
      <!-- Thumbnail -->
    </article>
  </section>
  <!-- .Post Content -->
</template>
<script>
import BasePostContent from "./BasePostContent.vue";
export default {
  props: ["articleContent", "mainSectionPath", "mainSectionName"],
  components: { BasePostContent },
  mounted() {
    useHead({
      title: this.articleContent.title,
    });
  },
};
</script>
