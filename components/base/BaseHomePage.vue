<template>
  <div>
    <div class="HomeGrid">
      <div class="TitleText">
        <p>
          Welcome to my
          <span style="color: var(--primary-color)">DofE</span> Site
        </p>
      </div>
      <div class="DofeBronzeImageContainer">
        <NuxtImg
          provider="imagekit"
          src="tr:f-webp,pr-true,/assets/images/home/dofe_bronze.jpeg"
          class="DofeBronzeImage"
          alt="dofe bronze logo"
        ></NuxtImg>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.DofeBronzeImage {
  width: 35vw;
  border-radius: 6px !important;
  margin: 6vw;
  transition: scale 1s;
}
.DofeBronzeImage:hover {
  transition: scale 0.5s;
  scale: 1.05;
}
.HomeGrid {
  display: grid;
  grid-template-columns: auto auto;
}
.TitleText {
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--dark);
  font-size: 6vw;
  text-align: center;
  font-family: "Poppins", sans-serif;
}
.DofeBronzeImageContainer {
  display: inline-grid;
}
</style>

<script setup></script>
