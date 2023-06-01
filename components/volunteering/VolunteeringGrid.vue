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
          image: "/assets/images/volunteering/img1_crop.png",
          title: "Day One!",
          date: "Wed, 22 Feb 2023",
        },
        {
          link: "dishwashing-again",
          image: "/assets/images/volunteering/img2_crop.png",
          title: "Dishwashing Again",
          date: "Sat, 4 Mar 2023",
        },
        {
          link: "something-new",
          image: "/assets/images/volunteering/img3_crop.png",
          title: "Something New!",
          date: "Sat, 25 Mar 2023",
        },
        {
          link: "choppers",
          image: "/assets/images/volunteering/img4.png",
          title: "Choppers",
          date: "Sat, 1 Apr 2023",
        },
        {
          link: "snap",
          image: "/assets/images/volunteering/img5.png",
          title: "Snap",
          date: "Sat, 8 Apr 2023",
        },
        {
          link: "packers",
          image: "/assets/images/volunteering/img6_crop.png",
          title: "Packing duty",
          date: "Fri, 14 Apr 2023",
        },
        {
          link: "heavy-lifting",
          image:
            "/assets/images/volunteering/img7_crop.png?updatedAt=1683259679813",
          title: "Heavy Lifting",
          date: "Mon, 24 Apr 2023",
        },
        {
          link: "chopping-again",
          image: "/assets/images/volunteering/img8_crop.png",
          title: "Chopping Again!",
          date: "Sat, 30 April 2023",
        },
        {
          link: "movers-and-packers",
          image: "/assets/images/volunteering/img9_crop.png",
          title: "Movers & Packers",
          date: "Sat, 6 May 2023",
        },
        {
          link: "cabbage-choppers",
          image: "/assets/images/volunteering/img10_crop.png",
          title: "Cabbage Choppers",
          date: "Sat, 27 May 2023",
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
