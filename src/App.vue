<script setup lang="ts">
// @ts-ignore
import AboutMeText from './components/AboutMeText.vue'
// @ts-ignore
import Render3DView from '@/views/Render3DView.vue'
import { ref } from 'vue'
const render3d = ref()
const viewAboutMeText = ref(false)
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
  viewAboutMeText.value = true
}
const goBack = () => {
  startPlanets()
  cameraPlanetZoomOut()
  viewAboutMeText.value = false
}
</script>
<template>
  <div id="container">
    <div class="background">
      <Render3DView ref="render3d" :viewAboutMeText="viewAboutMeText" />
    </div>
    <button v-if="!viewAboutMeText" class="button-36" role="button" @click="aboutMe">
      About Me
    </button>
    <button v-if="viewAboutMeText" class="button-36" role="button" @click="goBack">Back</button>
    <AboutMeText v-if="viewAboutMeText" />
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
/* CSS */
.button-36 {
  background-image: linear-gradient(92.88deg, #455eb5 9.16%, #5643cc 43.89%, #673fd7 64.72%);
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  flex-shrink: 0;
  font-family:
    'Inter UI',
    'SF Pro Display',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;
  font-size: 16px;
  font-weight: 500;
  height: 4rem;
  padding: 0 1.6rem;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  transition: all 0.5s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-36:hover {
  box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
  transition-duration: 0.1s;
}

@media (min-width: 768px) {
  .button-36 {
    padding: 0 2.6rem;
  }
}
</style>
