<template>
  <footer-background-effect></footer-background-effect>
  <header id="header" class="shadow bg-light sticky">
    <nav class="container navbar">
      <client-only>
        <nuxt-link class="nav-brand text-dark" href="/">
          <div id="icon2">
            <svg
              id="svg-icon"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="matrix(.1 0 0 -.1 0 500)">
                <path
                  d="m2758 3188c-8-7-123-177-253-378-235-360-323-495-523-801-56-86-102-165-102-177s9-26 19-32c27-14 1755-14 1782 0 10 6 19 19 19 29s-100 171-221 357c-278 424-340 520-502 769-72 110-139 210-150 223-23 25-46 28-69 10z"
                />
                <path
                  d="m1847 2808c-98-150-264-403-479-732-32-49-58-98-58-107 0-34 34-39 268-39h229l92 143c51 78 151 231 222 340s129 203 129 207c0 5-52 88-115 185-153 234-137 234-288 3z"
                />
              </g>
            </svg>
          </div>
        </nuxt-link>
      </client-only>
      <button @click="toggleCollapse" class="toggle-button" :class="rotate">
        <span><i class="fa-solid fa-chevron-down"></i></span>
      </button>
      <!-- Collapse on toggle button click -->
      <div class="collapse" :class="collapsed">
        <ul class="navbar-nav">
          <nav-link
            class="nav-link"
            v-for="link in linksData"
            :linkData="link"
          ></nav-link>
        </ul>
      </div>
      <!-- Collapse on toggle button click -->
      <div class="collapse" :class="collapsed">
        <ul class="navbar-nav">
          <a href="https://instagram.com/paarth.kukreja/" target="_blank"
            ><img height="20px" id="insta-icon" alt="insta" preload="auto" />
          </a>
          <client-only>
            <nav-theme-toggle></nav-theme-toggle>
          </client-only>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      collapsedToggled: false,
      linksData: [
        {
          to: "/",
          text: "Home",
        },
        {
          to: "#about",
          text: "About",
        },
        {
          to: "/volunteering",
          text: "Volunteering",
        },
        {
          to: "/adventurous-journey",
          text: "Adventurous Journey",
        },
      ],
    };
  },
  methods: {
    toggleCollapse() {
      this.collapsedToggled = !this.collapsedToggled;
    },
  },
  computed: {
    collapsed() {
      if (this.collapsedToggled) {
        return "collapse-toggle";
      } else {
        return "";
      }
    },
    rotate() {
      if (this.collapsedToggled) {
        return "rotate";
      } else {
        return "un-rotate";
      }
    },
  },
};
</script>

<style scoped>
.rotate {
  transition: all 0.4s;
  rotate: 180deg;
}
.un-rotate {
  transition: all 0.4s;
  rotate: 0deg;
}
</style>
