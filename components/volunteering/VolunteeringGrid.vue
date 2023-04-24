<template>
  <div>
    <base-grid :grid-items="articles" :origin="currentPath"></base-grid>
  </div>
</template>
<script>
export default {
  data() {
    return {
      articles: [
        {
          link: "day-one",
          image: "/assets/images/article/img1_crop.png",
          title: "Day One!",
          date: "Wed, 22 Feb 2023",
        },
        {
          link: "dishwashing-again",
          image: "/assets/images/article/img2_crop.png",
          title: "Dishwashing Again",
          date: "Sat, 4 Mar 2023",
        },
        {
          link: "something-new",
          image: "/assets/images/article/img3_crop.png?updatedAt=1681989861603",
          title: "Something New!",
          date: "Sat, 25 Mar 2023",
        },
        {
          link: "choppers",
          image: "/assets/images/article/img4.png",
          title: "Choppers",
          date: "Sat, 1 Apr 2023",
        },
        {
          link: "snap",
          image: "/assets/images/article/img5.png",
          title: "Snap",
          date: "Sat, 8 Apr 2023",
        },
        {
          link: "packers",
          image: "/assets/images/article/img6_crop.png",
          title: "Packing duty",
          date: "Fri, 14 Apr 2023",
        },
      ],
    };
  },
  // provide() {
  //   return {
  //     cameFrom: "volunteering",
  //   };
  // },
  computed: {
    currentPath() {
      return "/volunteering";
    },
  },
};
</script>
