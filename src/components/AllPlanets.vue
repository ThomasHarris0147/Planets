<script setup>
// @ts-ignore
import { ref } from 'vue'
import PlanetObject from './PlanetObject.vue'
import { planets } from './PlanetConfig'
import { usePlanetStore } from '../stores/PlanetStore'
const planetStore = usePlanetStore()
const defaultPlanets = planets
if (import.meta.env.VITE_APP_MODE == 'production') {
  for (let planet in defaultPlanets) {
    // for some reason base: '/planets/' is not replacing the path here.
    // so Im doing it manually
    defaultPlanets[planet].path = '/planets' + defaultPlanets[planet].path
    if ('envPath' in defaultPlanets[planet]) {
      defaultPlanets[planet].envPath = '/planets' + defaultPlanets[planet].envPath
    }
  }
}
const allPlanets = ref(defaultPlanets)
function turnOnAllPlanets() {
  allPlanets.value = defaultPlanets
}
function isolatePlanet(planetName) {
  for (let planet in allPlanets.value) {
    if (allPlanets.value[planet] !== undefined && allPlanets.value[planet].name == planetName) {
      allPlanets.value = [allPlanets.value[planet]]
    }
  }
}
defineExpose({
  turnOnAllPlanets,
  isolatePlanet
})
</script>

<template>
  <Suspense>
    <PlanetObject
      v-for="planet in allPlanets"
      :key="planet.name"
      v-bind="planet"
      :orbit="planetStore.orbit"
    />
  </Suspense>
</template>
