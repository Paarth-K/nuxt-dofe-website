<template>
  <div class="grid-item">
    <article class="article">
      <div class="card">
        <div class="overflow-img">
          <nuxt-link :href="linkToArticleComp">
            <img :src="cdnImage" class="img-fluid" />
          </nuxt-link>
        </div>
        <div class="card-body text-center px-1">
          <nuxt-link
            :href="linkToArticleComp"
            class="text-title display-1 text-dark"
          >
            {{ title }}
          </nuxt-link>
          <p class="secondary-title text-secondary display-3">
            <span><i class="far fa-clock text-primary"></i> {{ date }}</span>
          </p>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: ["linkToArticle", "image", "date", "title", "cameFrom"],
  computed: {
    linkToArticleComp() {
      return this.cameFrom + "/article/" + this.linkToArticle;
    },
    cdnImage() {
      return "https://ik.imagekit.io/1vyqdxrhm/tr:pr-true,f-jpg," + this.image;
    },
  },
};
</script>
