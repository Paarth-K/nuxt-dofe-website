<template>
  <div class="grid-item" @click="checkValid">
    <BaseErrorPopup
      v-if="showError.state"
      :time-visible="showError.timeVisible"
      :inner-text="showError.errorMessage"
    ></BaseErrorPopup>
    <article class="article">
      <div class="card">
        <div class="overflow-img">
          <NuxtLink :href="linkToArticleComp">
            <nuxt-img provider="imagekit" :src="cdnImage" class="img-fluid" />
          </NuxtLink>
        </div>
        <div class="card-body text-center px-1">
          <NuxtLink
            :href="linkToArticleComp"
            class="text-title display-1 text-dark"
          >
            {{ title }}
          </NuxtLink>
          <p class="secondary-title text-secondary display-3">
            <span
              ><Icon name="ic:twotone-access-time" class="text-primary"></Icon>
              {{ date }}</span
            >
          </p>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: ["linkToArticle", "image", "date", "title", "cameFrom", "disabled"],
  data() {
    return {
      showError: {
        state: false,
        timeVisible: 2000,
        errorMessage: "Looks like this post isn't ready yet...",
      },
    };
  },
  computed: {
    linkToArticleComp() {
      // console.log(this.disabled);
      if (!this.disabled) {
        return this.cameFrom + "/article/" + this.linkToArticle;
      } else {
        return "";
      }
    },
    cdnImage() {
      return "tr:pr-true,f-webp," + this.image;
    },
  },
  methods: {
    checkValid() {
      if (this.disabled) {
        this.showError.state = true;
        setTimeout(() => {
          this.showError.state = false;
        }, this.showError.timeVisible + 1500);
      }
    },
  },
};
</script>
