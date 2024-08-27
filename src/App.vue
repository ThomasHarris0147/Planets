<script setup lang="ts">
// @ts-ignore
import Render3DView from '@/views/Render3DView.vue'
import { ref } from 'vue'
import { usePlanetStore } from './stores/PlanetStore'
const planetStore = usePlanetStore()
const render3d = ref()
const buttonClicked = ref(false)
const setPlanetFocus = (planetName: string, offsetNum: number = 30) => {
  render3d.value.setPlanetFocus(planetName, offsetNum)
}
const viewBlogs = () => {
  setPlanetFocus('Jupiter', 35)
  planetStore.freezePlanets()
  buttonClicked.value = true
}
const viewProjects = () => {
  setPlanetFocus('Mercury', 20)
  planetStore.freezePlanets()
  buttonClicked.value = true
}
const aboutMe = () => {
  setPlanetFocus('Earth', 30)
  planetStore.freezePlanets()
  buttonClicked.value = true
}
const goBack = () => {
  planetStore.startPlanets()
  render3d.value.turnOnAllPlanets()
  buttonClicked.value = false
}
</script>
<template>
  <div id="container">
    <div class="background">
      <Render3DView ref="render3d" :zoomInOnPlanet="buttonClicked" />
    </div>
    <nav v-if="!buttonClicked">
      <RouterLink to="/about" class="button-36" role="button" @click="aboutMe">About Me</RouterLink>
      <RouterLink to="/blogs" class="button-36" role="button" @click="viewBlogs">Blogs</RouterLink>
      <RouterLink to="/projects" class="button-36" role="button" @click="viewProjects">
        Projects
      </RouterLink>
    </nav>
    <RouterLink to="/" v-if="buttonClicked" class="button-36" role="button" @click="goBack">
      Back
    </RouterLink>
    <RouterView />
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
  padding-top: 10px;
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
  margin: auto 5px;
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
