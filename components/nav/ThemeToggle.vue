<template>
  <Icon
    :name="
      theme == 'dark'
        ? 'material-symbols:sunny-rounded'
        : 'material-symbols:dark-mode'
    "
    @click="toggleTheme"
    id="theme"
    alt="theme_toggle"
    preload="auto"
  ></Icon>
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
    if (this.theme == "dark") {
      this.themeIcon = "material-symbols:sunny-rounded";
    }
    if (this.theme == "light") {
      this.themeIcon = "material-symbols:dark-mode-rounded";
    }
  },
  watch: {
    theme(theme) {
      document.documentElement.dataset.theme = theme; // this is where the magic happens
    }, // the `dataset.theme` is the data-theme attribute I set in my SCSS file
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === "light" ? "dark" : "light"; // switch themes based on current value of `this.theme`
      localStorage.setItem("theme", this.theme, { sameSite: "strict" });
    },
  },
};
</script>

<style>
#theme {
  color: var(--dark);
}
</style>
