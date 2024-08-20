<script setup>
// @ts-ignore
import { ref } from 'vue'
import PlanetObject from './PlanetObject.vue'
const orbitPlanets = ref(true)
const freezePlanets = () => {
  orbitPlanets.value = false
}
const startPlanets = () => {
  orbitPlanets.value = true
}
defineExpose({ freezePlanets, startPlanets })
</script>

<template>
  <Suspense>
    <!-- Sun -->
    <PlanetObject
      ref="sunRef"
      name="Sun"
      :position="[0, 0, 0]"
      path="/Planets/Earth Like Planet.glb"
      envPath="/Planets/Environment/sun_map.jpg"
      envScale="5"
      envRotation="0.3"
      planetScale="1"
      :orbit="orbitPlanets"
    />
  </Suspense>
  <Suspense>
    <!-- Earth -->
    <PlanetObject
      ref="earthRef"
      name="Earth"
      :position="[20, 0, 0]"
      path="/Planets/Earth Like Planet.glb"
      envPath="/Planets/Environment/small-world-clouds.png"
      envScale="2.1"
      envRotation="0.2"
      :orbit="orbitPlanets"
    />
  </Suspense>
  <Suspense>
    <!-- Mercury -->
    <PlanetObject
      ref="mercuryRef"
      name="Mercury"
      :position="[10, 0, 0]"
      path="/Planets/Hot Planet.glb"
      planetScale="0.5"
      speedUp="2"
      :orbit="orbitPlanets"
    />
  </Suspense>
  <Suspense>
    <!-- Saturn -->
    <PlanetObject
      ref="saturnRef"
      name="Saturn"
      :position="[40, 0, 0]"
      path="/Planets/One Ring Planet.glb"
      planetScale="2"
      planetRotation="0.2"
      speedUp="0.2"
      :orbit="orbitPlanets"
    />
  </Suspense>
  <Suspense>
    <!-- Neptune -->
    <PlanetObject
      ref="neptuneRef"
      name="Neptune"
      :position="[50, 0, 0]"
      path="/Planets/Cold Planet.glb"
      planetScale="1"
      planetRotation="0.8"
      speedUp="0.1"
      :orbit="orbitPlanets"
    />
  </Suspense>
</template>
