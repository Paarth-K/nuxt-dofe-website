<template>
  <img
    width="20px"
    height="20px"
    @click="toggleTheme"
    id="theme"
    alt="theme_toggle"
    preload="auto"
  />
</template>
<script>
export default {
  data() {
    return {
      theme: "dark", // default theme to use when the site is first loaded
    };
  },
  created() {
    let savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.documentElement.dataset.theme = savedTheme;
      this.theme = savedTheme;
    } else {
      document.documentElement.dataset.theme = this.theme;
    }
  },
  watch: {
    theme(theme) {
      document.documentElement.dataset.theme = theme; // this is where the magic happens
    }, // the `dataset.theme` is the data-theme attribute I set in my SCSS file (highlighted above)
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === "light" ? "dark" : "light"; // switch themes based on current value of `this.theme`
      localStorage.setItem("theme", this.theme);
    },
  },
};
</script>
