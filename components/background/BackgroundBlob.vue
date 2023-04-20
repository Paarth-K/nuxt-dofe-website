<template>
  <div id="blob"></div>
</template>

<script>
export default {
  mounted() {
    let blob = document.getElementById("blob");
    window.onpointermove = (event) => {
      const { clientX, clientY } = event;

      blob.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 3000, fill: "forwards" }
      );
    };
  },
};
</script>

<style scoped>
#blob {
  background-color: white;
  height: 29vmax;
  aspect-ratio: 1;
  position: fixed;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
  border-radius: 50%;
  background: var(--grad);
  animation: rotate 10s infinite;
  opacity: 0.8;
  z-index: -2;
}
</style>
