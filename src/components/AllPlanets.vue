<script setup>
// @ts-ignore
import { ref } from 'vue'
import PlanetObject from './PlanetObject.vue'
import { planets } from './PlanetConfig'
import { usePlanetStore } from '../stores/PlanetStore'
const planetStore = usePlanetStore()

const allPlanets = ref(planets)
if (import.meta.env.VITE_APP_MODE == 'production') {
  for (let planet in allPlanets.value) {
    // for some reason base: '/planets/' is not replacing the path here.
    // so Im doing it manually
    allPlanets.value[planet].path = '/planets' + allPlanets.value[planet].path
  }
}

function turnOnAllPlanets() {
  allPlanets.value = planets
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
