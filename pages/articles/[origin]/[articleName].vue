<template>
  <div>
    <base-article-layout
      :main-section-name="mainSectionName"
      :main-section-path="mainSectionPath"
      :article-content="articleContent"
      v-if="articleContent"
    >
    </base-article-layout>
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
          "chopping-again": {
            title: "Chopping Again!",
            date: "Sat, 30 Apr 2023",
            content: [
              {
                image: "/assets/images/volunteering/img8.png",
                text: "Today we chopped some vegetables again... This time we chopped Okra, into small bits. We had to cut off the tip, and the okra stem as those parts aren't edible. I belive that this time around there was Indian food being made... We were also asked to clean the baskets used to hold cut vegetables, but we found cockroaches in them so we decided to leave that as it was and chop vegetables instead... Overall I enjoyed the experience of going there, except for the cockroach 😬.",
              },
            ],
          },
          "movers-and-packers": {
            title: "Movers & Packers",
            date: "Sat, 6 May 2023",
            content: [
              {
                image: "/assets/images/volunteering/img9.png",
                text: "Today, we accomplished a lot in just one hour! We packaged some rice, helped move the rice to be packaged, and helped move the packaged rice into racks for transport! We also met some employees from DBS who were there as early as 8 am on a Saturday, which was quite surprising. Overall, it was another enjoyable day of volunteering. I believe we were making plain boiled rice with some vegetables; I'm not too sure what it was called though.",
              },
            ],
          },
          "cabbage-choppers": {
            title: "Cabbage Choppers",
            date: "Sat, 27 May 2023",
            content: [
              {
                image: "/assets/images/volunteering/img10.png",
                text: "Today we chopped some cabbage! It was nothing special, however, we learnt a new and efficient way to cut cabbage. Initially, we were chopping each leaf at a time into bits, but then we were told by the other helpful volunteers about a much faster way to chop it.",
              },
            ],
          },
          sorters: {
            title: "Sorters",
            date: "Sat, 10 Jun 2023",
            content: [
              {
                image: "/assets/images/volunteering/img11.png",
                text: "Today I did some sorting of food. I sorted packaged food from big carton boxes given as a charity, into piles of the specific type of food. I sorted frozen packaged food like Chicken, Shrimp, Sausages, Cheese, Cheese Balls and prawns into Separate. I presume it was to speed up finding them later when they get used, as there were many things to look through, and they were all randomly placed in cartons.",
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
                // text: '<iframe id="sumytvid" class="ytvid" src="https://www.youtube.com/embed/MUsb_jLLVm4?vq=hd1080" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen ></iframe>',
                video: {
                  id: "MUsb_jLLVm4",
                  title: "Practice Adventurous Journey",
                  thumbnail:
                    "/assets/images/AJ/Prac/prac_aj_lastcheckpoint.png",
                },
              },
              {
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
              },
              {
                text: 'Overall, I really enjoyed this experience, the ability to walk navigate without a google maps, and only a physical map was really eye opening, and made us realise how difficult it is to get around without technology. I enjoyed all the planning required for this, each of bringing sufficient resources like drinks and snacks to sustain us for the long walk. Be sure to watch the short <a class="text-primary" href="#sumytvid">summary video</a> showing the walk in a few short minutes.',
              },
            ],
          },
          "real-adventurous-journey": {
            title: "Real Adventurous Journey",
            date: "Fri, 12 May 2023 - Sat, 13 May 2023",
            content: [
              {
                image: "/assets/images/AJ/Real/pulau_sign.png",
                text: "This was it, this was our Real AJ! The highlight of the Duke of Edinburgh award, and what all of us were looking forward to since the beginning of the award.",
              },
              {
                image: "/assets/images/AJ/Real/real_aj_map.png",
                text: "Like the Practice AJ we were given a map of Pulau Ubin, and checkpoints, and we had to find a route through them, following them in order of course. We were only given a string and a key on the map to estimate distances between the checkpoints.",
              },
              {
                image: "/assets/images/AJ/Real/boat_there.png",
                text: "After an incredibly long Bus ride, and a boat ride, we finally made it to the Island. This was it, the beginning of our journey!",
              },
              {
                image: "/assets/images/AJ/Real/new_map.png",
                text: "On the Island, we found a map, which was arguably better than the one we were given, so we took a photo of it, for future reference. And after that, we were off, to our first checkpoint (number 7 on our map)",
              },
              {
                image: "/assets/images/AJ/Real/sensory_trail.png",
                text: "This is us at our first checkpoint, the sensory trail, this one was a very short walk away from the shelter (number 6 on our map) where we started at. We decided to get our drinks out, which were frozen! And take a photo. After that, we were off to Belatok Hut!",
              },
              {
                image: "/assets/images/AJ/Real/puaka_hut.png",
                text: "This is us at Belatok Hut. It was an interesting checkpoint, and we met a teacher there waiting for us! After that, we were off again on our very long walk! I won't bore you with all the checkpoints, and instead, skip to an interesting one (number 3 on our map)",
              },
              {
                image: "/assets/images/AJ/Real/top_of_hill.png",
                text: "This is the Puaka Hilltop View Point. This was a very difficult checkpoint to get to as it was a spiral hill of sorts, and it kept on going, there were very steep points and extremely rocky paths uphill, but we persevered and got through to the top for this beautiful view!",
              },
              {
                image: "/assets/images/AJ/Real/top_of_hill_view.png",
              },
              {
                image: "/assets/images/AJ/Real/campsite.png",
                text: "After a long long walk, we finally made it to the Campsite! We were exhausted by then, carrying a very heavy bag and having walked 25km! We messed around for a bit, and then at night we had the most amazing view ever",
              },
              {
                image: "/assets/images/AJ/Real/night_view_campsite.png",
              },
              {
                text: "We even told horror stories! We were also trying to get night vision that's why we had one eye closed.",
                video: {
                  id: "W78hScD28iM",
                  title: "Horror Stories at Night, Adventurous Journey 2023",
                  thumbnail:
                    "/assets/images/AJ/Real/night_stories_thumbnail.png",
                },
              },
              {
                image: "/assets/images/AJ/Real/dev_night_image.png",
                text: "It was a very long night, the tents were extremely hot and cramped, especially with 2 of us per tent, and things got very stuffy very quickly. So me and Dev (my friend from Volunteering, and the Practice AJ) decided to take a walk along the campsite, and just relax. I think we got about 1 hour of sleep that night. The view next morning though, was so worth it.",
              },
              {
                image: "/assets/images/AJ/Real/campsite_morning_view.png",
              },
              {
                text: "Most of what happened on Day 2 was pretty boring, so here's just a bunch of images and videos of what happened",
              },
              {
                image: "/assets/images/AJ/Real/belatok_hut.png",
              },
              {
                image: "/assets/images/AJ/Real/jetti.png",
              },
              {
                image: "/assets/images/AJ/Real/tall_tower2.png",
              },
              {
                image: "/assets/images/AJ/Real/tall_tower1.png",
                text: "This place was very interesting, it was a very tall tower giving panoramic views of the island. It was an amazing view up there, and also a lot of stairs to climb up there! Anyways, back to the images",
              },
              {
                image: "/assets/images/AJ/Real/mamam_campsite1.png",
              },
              {
                image: "/assets/images/AJ/Real/mamam_campsite2.png",
                text: "This was it, the last checkpoint of our journey. We were all so exhausted and could wait to go home, Unfortunately, we didn't get any more photos after this point, our main objective was making it to school. Most of us also slept on the bus ride back!",
              },
              {
                text: "Overall, I'd say this was a very fun experience. I had a lot of fun with my friends, even though I got multiple blisters from all that walking, it was an amazing experience, and I'm grateful for the opportunity this award has given us, to have fun, and make memories along the way as well. Till next time!",
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
