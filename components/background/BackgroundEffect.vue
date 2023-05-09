<template>
  <div id="blur"></div>
  <client-only><background-blob></background-blob></client-only>
</template>

<style scoped>
#blur {
  top: 0;
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: -1;
  backdrop-filter: blur(9vmax);
}
</style>
