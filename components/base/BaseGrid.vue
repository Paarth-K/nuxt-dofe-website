<template>
  <div class="container">
    <div class="grid">
      <base-grid-item
        v-for="item in gridItems"
        :key="item.link"
        :link-to-article="item.link"
        :title="item.title"
        :date="item.date"
        :image="item.image"
        :cameFrom="origin"
      ></base-grid-item>
    </div>
  </div>
</template>
<script>
export default {
  props: ["gridItems", "origin"],
};
</script>
