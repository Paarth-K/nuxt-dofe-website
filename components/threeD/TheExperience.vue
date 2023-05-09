<script setup lang="ts">
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Color,
  Fog,
  AmbientLight,
  PointLight,
  Clock,
} from "three";
import { Ref } from "vue";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
let renderer: WebGLRenderer;
let controls: OrbitControls;
import { useGLTFModel } from "../../composables/useGLTFModel";

const experience: Ref<HTMLCanvasElement | null> = ref(null);

// const { width, height } = [800, 400]
const width = 350;
const height = 350;

// const aspectRatio = computed(() => width.value / height.value)

const bgColor = new Color("#fff");

const scene = new Scene();

scene.fog = new Fog(bgColor, 0.01, 150);
scene.background = null;

const camera = new PerspectiveCamera(75, 1, 0.1, 1000);
camera.position.set(20, 20, 45);
scene.add(camera);
const ambient = new AmbientLight(0xffffff, 0.6);

scene.add(ambient);
const point = new PointLight(0xffffff, 1);
point.position.set(100, 100, 100);
scene.add(point);

const { load } = useGLTFModel();
type LoadedModel = {
  scene: any;
};
const { scene: model } = (await load(
  "/3DObjects/island/scene.glb"
)) as LoadedModel;

if (model) {
  model.rotation.y += 1.1;
}
scene.add(model);

function updateCamera() {
  camera.aspect = 1;
  camera.updateProjectionMatrix();
}

function updateRenderer() {
  renderer.setSize(width, height);
  renderer.render(scene, camera);
}
let clock: any;
function setRenderer() {
  clock = new Clock();

  if (experience.value) {
    renderer = new WebGLRenderer({
      canvas: experience.value,
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableDamping = true;
    updateRenderer();
    animate();
  }
}

function animate() {
  requestAnimationFrame(animate);

  const time = clock.getElapsedTime();

  model.position.y = Math.sin(time) * 0.8;
  // model.rotation.y = 1+ Math.sin(time) * 0.02 ;

  updateRenderer();
}

onMounted(() => {
  setRenderer();
  loop();
});

const loop = () => {
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(loop);
};
</script>
<template>
  <div class="object">
    <canvas ref="experience" />
  </div>
</template>
<style scoped>
.object {
  position: relative;
  float: right;
}
</style>
