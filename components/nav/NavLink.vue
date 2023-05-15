<template>
  <nuxt-link :aria-label="linkData.text" :href="linkData.to">{{
    linkData.text
  }}</nuxt-link>
</template>
<script>
export default {
  props: ["linkData"],
};
</script>
