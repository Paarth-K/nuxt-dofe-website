<template>
  <Transition name="preloader">
    <div v-if="!isLoaded" class="page-loader">
      <div>
        <div id="icon">
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
        <p class="secondary-title display-1">DofE Website</p>
        <p v-if="loadCheck" class="secondary-title">
          don't worry, the site is loading
        </p>
        <p v-if="loadCheck2" class="secondary-title">hopefully :/</p>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  data() {
    return {
      isLoaded: false,
      loadCheck: false,
      loadCheck2: false,
    };
  },
  created() {
    setTimeout(() => {
      this.loadCheck = true;
    }, 3000);
    setTimeout(() => {
      this.loadCheck2 = true;
    }, 10000);
  },

  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        this.isLoaded = true;
        setTimeout(() => this.$emit("destroySelf"), 10000);
      }
    };
  },
};
</script>

<style scoped lang="scss">
$colors: #8cc271, #69beeb, #f5aa39, #e9643b;
.page-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--light);
  z-index: 999;
}

.preloader-enter-active,
.preloader-leave-active {
  opacity: 0;
  transition: opacity 0.5s ease;
  transition-delay: 1s;
}
#loadCheck1 {
  opacity: 0;
  transition: opacity 2s ease;
  transition-delay: 2s;
  opacity: 1;
}

p {
  text-align: center;
  color: var(--dark);
}
// .cube {
//   width: 40px;
//   height: 40px;
//   margin-right: 10px;
//   @for $i from 1 through length($colors) {
//     &:nth-child(#{$i}) {
//       background-color: nth($colors, $i);
//     }
//   }

//   &:first-child {
//     animation: left 1s infinite;
//   }
//   &:last-child {
//     animation: right 1s infinite 0.5s;
//   }
// }

// @keyframes left {
//   40% {
//     transform: translateX(-60px);
//   }

//   50% {
//     transform: translateX(0px);
//   }
// }
// @keyframes right {
//   40% {
//     transform: translateX(60px);
//   }

//   50% {
//     transform: translateX(0px);
//   }
// }
</style>
