<template>
  <base-grid :grid-items="articles" :origin="currentPath"></base-grid>
</template>
<script>
import BaseGrid from "../base/BaseGrid.vue";
export default {
  components: { BaseGrid },
  data() {
    return {
      articles: [
        {
          link: "prac-aj",
          image: "/assets/images/AJ/Prac/prac_aj_prev_crop.png",
          title: "Practise Adventurous Journey",
          date: "Wed, 22 Mar 2023",
        },
        {
          link: "real-adventurous-journey",
          image: "bl-60/assets/images/AJ/Real/coming_soon_aj.png",
          title: "Real Adventurous Journey (Coming Soon)",
          date: "Fri, 12 Mar 2023",
        },
      ],
    };
  },

  computed: {
    currentPath() {
      return this.$route.path;
    },
  },
};
</script>
