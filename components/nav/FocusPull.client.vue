<template>
  <div>
    <Transition>
      <div v-if="FocusPull" class="FocusPull">
        <svg
          class="FocusPullSvg"
          viewBox="0 0 394.873 394.873"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m334.678 145.951c-19.584-38.556-59.364-58.752-99.756-67.32-100.369-21.42-191.557 42.84-234.397 129.744-2.448 4.896 4.284 8.567 7.344 4.283 49.572-78.335 124.848-137.087 222.769-120.563 91.188 15.912 111.996 94.86 112.608 175.643 0 8.568 13.464 8.568 13.464 0 .612-41.615-3.061-84.455-22.032-121.787z"
          />
          <path
            d="m220.846 114.739c-44.676-5.508-88.74 13.464-126.685 35.496-22.032 12.852-67.32 41.616-64.872 72.215 0 2.448 3.06 3.061 4.896 1.225 39.78-56.304 107.1-98.532 178.705-96.696 79.561 2.448 89.353 76.5 89.353 140.148 0 9.18 14.075 9.18 14.075 0-.001-70.992-12.852-141.984-95.472-152.388z"
          />
          <path
            d="m380.578 238.975c-6.12 13.464-25.704 69.156-47.124 66.096-9.792-1.224-19.584-10.403-26.929-16.523-12.852-9.792-25.703-20.196-39.168-29.376-4.283-3.061-9.18 3.672-5.508 7.344 18.972 17.136 46.512 52.021 74.664 53.856 29.376 1.224 48.348-54.469 57.528-73.44 4.285-9.181-9.18-16.526-13.463-7.957z"
          />
        </svg>
        <span id="FocusPullText">Check these out!</span>
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.FocusPull {
  position: absolute;
  transform: translateY(-61px) translateX(-10px);
  pointer-events: none;
}

#FocusPullText {
  color: var(--dark);
  font-family: "Kalam", cursive;
}

.FocusPullSvg {
  position: relative;
  fill: var(--dark);
  transform: translateY(87px) translateX(-120px) rotate(-79deg);
  scale: 0.5;
}

@media (max-width: 599px) {
  .FocusPull {
    visibility: hidden !important;
  }
}
.v-enter-active,
.v-leave-active {
  transition: all 0.4s;
}
.v-enter-from,
.v-leave-to {
  opacity: 0 !important;
  filter: blur(1rem);
}
</style>

<script setup>
let FocusPull = ref(false);
const route = useRoute();
watch(useRoute(), async () => {
  if (useRoute() != "/") {
    FocusPull.value = false;
  }
});
const shownBefore = localStorage.getItem("visit");

if (route.path == "/") {
  if (shownBefore == null) {
    FocusPull.value = true;
  }
  localStorage.setItem("visit", true, { sameSite: "strict" });
}
</script>
