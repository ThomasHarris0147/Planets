import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePlanetStore = defineStore('planets', () => {
  const orbit = ref(true)
  const planetsLocations = ref(new Map<string, any>())
  function freezePlanets() {
    orbit.value = false
  }
  function startPlanets() {
    orbit.value = true
  }
  function setPlanetsLoc(planet: string, location: Array<number>) {
    planetsLocations.value.set(planet, location)
  }
  function getPlanetsLoc(planet: string) {
    return planetsLocations.value.get(planet)
  }
  return { orbit, freezePlanets, startPlanets, setPlanetsLoc, getPlanetsLoc }
})
