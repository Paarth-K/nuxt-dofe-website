<template>
  <nuxt-link :href="linkData.to">{{ linkData.text }}</nuxt-link>
</template>
<script>
export default {
  props: ["linkData"],
};
</script>
