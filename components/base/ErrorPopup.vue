<template>
  <Teleport to="body">
    <Transition>
      <div v-if="show" id="error-popup">
        <div id="border">
          <div id="content">
            <i class="fa-solid fa-triangle-exclamation spacing"></i>
            {{ innerText }}
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
const props = defineProps(["innerText", "timeVisible"]);
const show = ref(false);
onMounted(() => {
  show.value = true;
  setTimeout(() => {
    show.value = !show;
  }, props.timeVisible);
});
</script>
<style scoped>
#error-popup {
  position: fixed;
  opacity: 0.9;
  display: flex;
  justify-content: center;
  bottom: 6vh;
  height: fit-content;
  background-color: #ffdb57;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: fit-content; /* Need a specific value to work */
  color: #745c05;
  border-radius: 15px;
  z-index: 100;
}
.spacing {
  margin-right: 10px;
}
#border {
  border-radius: 15px;
  border: 2px solid #ff9b06ae;
  background-color: rgba(0, 0, 0, 0);
}
#content {
  position: relative;
  top: 0px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0);
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
