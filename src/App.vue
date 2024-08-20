<script setup lang="ts">
//import { RouterLink, RouterView } from 'vue-router'
// @ts-ignore
import Render3DView from '@/views/Render3DView.vue'
import { ref } from 'vue'
const render3d = ref()
const cameraPlanetZoomIn = () => {
  render3d.value.cameraPlanetZoomIn()
}
const cameraPlanetZoomOut = () => {
  render3d.value.cameraPlanetZoomOut()
}
const freezePlanets = () => {
  render3d.value.freezePlanets()
}
const startPlanets = () => {
  render3d.value.startPlanets()
}
const aboutMe = () => {
  freezePlanets()
  cameraPlanetZoomIn()
}
const goBack = () => {
  startPlanets()
  cameraPlanetZoomOut()
}
</script>
<template>
  <div id="container">
    <div class="background">
      <Render3DView ref="render3d" />
    </div>
    <button @click="aboutMe">About Me</button>
    <button @click="goBack">Back</button>
  </div>
</template>
<style scoped>
.background {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  overflow: hidden;
}
#container {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  justify-content: center;
  margin: 0 auto;
  overflow: auto;
}
</style>
