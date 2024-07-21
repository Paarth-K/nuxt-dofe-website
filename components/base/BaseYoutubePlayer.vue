<template>
  <div style="width: inherit; height: inherit">
    <LiteYouTubeEmbed
      :id="props.ytvid"
      :title="props.title"
      :thumbnail="`//wsrv.nl/?url=` + thumbnail"
    />
  </div>
</template>
<script setup>
import LiteYouTubeEmbed from "vue-lite-youtube-embed";
import "vue-lite-youtube-embed/style.css";
const props = defineProps({
  title: String,
  ytvid: String,
  thumbnail: {
    required: false,
    type: String,
    default: "",
  },
});
</script>
