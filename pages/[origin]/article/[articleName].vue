<template>
  <div>
    <base-article-content
      :main-section-name="mainSectionName"
      :main-section-path="mainSectionPath"
      :article-content="articleContent"
      v-if="articleContent"
    >
    </base-article-content>
  </div>
</template>
<script>
export default {
  data() {
    return {
      identifier: this.$route.params,
      //   mainSectionName: 'boo',
      //   mainSectionPath: '/',
      articles: {
        volunteering: {
          "section-name": "Volunteering",
          "day-one": {
            title: "Day One!",
            date: "Wed, 22 Feb 2023",
            content: [
              {
                image: "/assets/images/volunteering/img1.png",
                text: 'Today was my first day volunteering at <a class="text-primary" href="https://willinghearts.org.sg/" target="_blank" >willing hearts</a >! We had booked a time slot very early in the morning (5-9 AM), but we came at 7 AM instead (there was no way I could reach at 5, I live an hour away) and washed dishes until ~8:30 (1 hour 30 mins). I also went with a friend, Dev (Wearing the yellow shirt in the photo). We had a great time! We also met a few other volunteers sent on behalf of companies like Lufthansa and Sands Cares',
              },
            ],
          },

          "dishwashing-again": {
            title: "Dishwashing again!",
            date: "Sat, 4 Mar 2023",
            content: [
              {
                image: "/assets/images/volunteering/img2.png",
                text: "Today was another day of dishwashing. Same time as last time we chose the early slot at 7:00 in the morning. Me and Dev worked together this time as no other sinks were available. I would scrub the soap on the trays and Dev would rinse the soap off. We had fun. I think we easily would have cleaned 100 plates together.",
              },
            ],
          },

          "something-new": {
            title: "Something New!",
            date: "Sat, 25 Mar 2023",
            content: [
              {
                image: "/assets/images/volunteering/img3.png",
                text: "Today I did something different for a change! I helped out on a multitude of tasks, like packaging food, and helping in the preparation of the food, by adding raw rice into plastic dishes to be cooked, and also laying out said dishes onto a metal plate which goes into the large cookers. I went with my friend Dev again, at 7am in the morning",
              },
            ],
          },

          choppers: {
            title: "Choppers",
            date: "Sat, 1 Apr 2023",

            content: [
              {
                image: "/assets/images/volunteering/img4.png",
                text: "This time we had a new job again! We chopped vegetables, I was taught how to chop bok choy, and peel and chop lettuce, and peel ridge gourd. I don't know exactly what was it being used for, but I must have peeled and chopped at least 10kgs of vegetables in that day alone!",
              },
            ],
          },

          snap: {
            title: "Snap",
            date: "Sat, 8 Apr 2023",
            content: [
              {
                image: "/assets/images/volunteering/img5.png",
                text: "This time I did similar things to what I did last time. but instead of chopping the veggies, I used my hands to separate the leaves, and then split the stem of the plant into small pieces. I did that for an hour and 30 mins. I don't know exactly what vegetable it was, but it was fun!",
              },
            ],
          },
          packers: {
            title: "Packing Duty",
            date: "Fri, 14 Apr 2023",
            content: [
              {
                image: "/assets/images/volunteering/img6.png",
                text: "Today my friend (Dev) and I did some packing! I believe I was packing rice with salmon, and some vegetable noodles, there were 7000 of these dishes to be filled (in plastic containers), and then packed! We also met people from Netlinkcares. They were very friendly and helpful.",
              },
            ],
          },
          "heavy-lifting": {
            title: "Heavy Lifting",
            date: "Mon, 24 Apr 2023",
            content: [
              {
                image: "/assets/images/volunteering/img7.png",
                text: "Today, me and my Friend Dev did some chopping of vegetables. We were cutting sweet potatoes, most likely for soup. We also helped in moving heavy crates of rice around, which were surprisingly heavy for just rice! We also saw staff from Allianz volunteering there.",
              },
            ],
          },
        },
        "adventurous-journey": {
          "section-name": "Adventurous Journey",
          "prac-aj": {
            title: "Practise Adventurous Journey",
            date: "Wed, 22 Mar 2023",
            content: [
              {
                image: "none",
                text: '<iframe id="sumytvid" class="ytvid" src="https://www.youtube.com/embed/MUsb_jLLVm4?vq=hd1080" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen ></iframe>',
              },
              {
                image: "none",
                text: "Today was had our Practise AJ! It was really fun. We had a map (image below), which we were given, and we had to plan our route and how we get around. As a requirement, of the award, we had to be offline the whole time, and that meant leaving our SIM card back at school.",
              },
              {
                image: "/assets/images/AJ/Prac/prac_aj_map.png",
                text: 'As you can see on the map, we first had to go to Checkpoint 5, which was the <a class="text-primary" href="https://news.nus.edu.sg/berlin-wall-at-nus/" target="_blank" >Berlin wall segments in Singapore</a >(image below). The journey there was not too difficult, but we did end up getting lost on the way there! But eventually we found our way, and made it to the Checkpoint',
              },
              {
                image: "/assets/images/AJ/Prac/berlin_wall_prac_aj.png",
                text: "Next was the journey to the next Checkpoint (3 on the map) This was mostly just walking down the highway, to the Ulu Pandan Road turn, and then the entrance to the Canal, unfortunately I didn't take a picture at that Checkpoint, but there wasn't much to see anyways",
              },
              {
                image: "none",
                text: "Next was the journey down the canal to the Bridge (4 on the map) It was just a walk down the Canal, and nothing much else... But we did find a Swan on the way!",
              },
              {
                image: "/assets/images/AJ/Prac/prac_aj_bridge.png",
                text: "This next Checkpoint (2 on the map) was very difficult to get to, in-fact we almost got lost, on the way there! The area we went through was a residential area, and was very windy, and difficult to get through, as we didn't have any GPS or know where we were, but we eventually made it through, and reach the Starbucks in the Mall (image below).",
              },
              {
                image: "/assets/images/AJ/Prac/prac_aj_sb.png",
                text: 'Lastly it was a long walk, almost 1.5km down the Rail corridor (1 on the map) This was a not to eventful walk, nothing much happened here, but the views were nice, as it was a "forest" on all sides (image below).',
              },
              {
                image: "/assets/images/AJ/Prac/prac_aj_rc_selfie.png",
                text: "",
              },
              {
                image: "/assets/images/AJ/Prac/prac_aj_lastcheckpoint.png",
                text: 'Overall, I really enjoyed this experience, the ability to walk navigate without a google maps, and only a physical map was really eye opening, and made us realise how difficult it is to get around without technology. I enjoyed all the planning required for this, each of bringing sufficient resources like drinks and snacks to sustain us for the long walk. Be sure to watch the short <a class="text-primary" href="#sumytvid">summary video</a> showing the walk in a few short minutes.',
              },
            ],
          },
        },
      },
    };
  },
  computed: {
    articleContent() {
      const idenArticle = this.articles[this.identifier.origin];

      if (idenArticle) {
        if (idenArticle[this.identifier.articleName]) {
          return idenArticle[this.identifier.articleName];
        } else {
          throw createError({
            statusCode: "404",
            message: `${this.identifier.articleName} doesn't exist`,
          });
        }
      } else {
        throw createError({
          statusCode: "404",
          message: `This path doesn't exist: /${this.identifier.origin}`,
        });
      }
    },
    mainSectionPath() {
      return "/" + this.identifier.origin;
    },
    mainSectionName() {
      return this.articles[this.identifier.origin]["section-name"];
    },
  },
};
</script>
