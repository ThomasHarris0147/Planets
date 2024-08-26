<script setup>
// @ts-ignore
import { ref } from 'vue'
import PlanetObject from './PlanetObject.vue'
const orbitPlanets = ref(true)

const earthSize = ref(1)
const earthEnvSize = ref(2.1)

const turnOffSun = ref(false)
const turnOffEarth = ref(false)
const turnOffMercury = ref(false)
const turnOffJupiter = ref(false)
const turnOffSaturn = ref(false)
const turnOffNeptune = ref(false)

const freezePlanets = () => {
  orbitPlanets.value = false
}
const startPlanets = () => {
  orbitPlanets.value = true
}
function turnOnAllPlanets() {
  turnOffEarth.value = false
  turnOffMercury.value = false
  turnOffSaturn.value = false
  turnOffNeptune.value = false
  turnOffSun.value = false
  turnOffJupiter.value = false
}
function isolatePlanet(planetName) {
  switch (planetName) {
    case 'Earth':
      turnOffSun.value = true
      turnOffMercury.value = true
      turnOffSaturn.value = true
      turnOffNeptune.value = true
      turnOffJupiter.value = true
      break
    case 'Mercury':
      turnOffSun.value = true
      turnOffEarth.value = true
      turnOffSaturn.value = true
      turnOffNeptune.value = true
      turnOffJupiter.value = true
      break
    case 'Saturn':
      turnOffSun.value = true
      turnOffEarth.value = true
      turnOffMercury.value = true
      turnOffNeptune.value = true
      turnOffJupiter.value = true
      break
    case 'Neptune':
      turnOffSun.value = true
      turnOffEarth.value = true
      turnOffMercury.value = true
      turnOffSaturn.value = true
      turnOffJupiter.value = true
      break
    case 'Sun':
      turnOffEarth.value = true
      turnOffMercury.value = true
      turnOffSaturn.value = true
      turnOffNeptune.value = true
      turnOffJupiter.value = true
      break
    case 'Jupiter':
      turnOffSun.value = true
      turnOffEarth.value = true
      turnOffMercury.value = true
      turnOffSaturn.value = true
      turnOffNeptune.value = true
      break
    default:
      break
  }
}
defineExpose({
  freezePlanets,
  startPlanets,
  turnOnAllPlanets,
  isolatePlanet
})
</script>

<template>
  <Suspense>
    <!-- Sun -->
    <PlanetObject
      v-if="!turnOffSun"
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
    <!-- Mercury -->
    <PlanetObject
      v-if="!turnOffMercury"
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
    <!-- Earth -->
    <PlanetObject
      v-if="!turnOffEarth"
      ref="earthRef"
      name="Earth"
      :position="[20, 0, 0]"
      path="/Planets/Earth Like Planet.glb"
      envPath="/Planets/Environment/small-world-clouds.png"
      :envScale="earthEnvSize"
      envRotation="0.2"
      :planetScale="earthSize"
      :orbit="orbitPlanets"
    />
  </Suspense>
  <Suspense>
    <!-- Jupiter -->
    <PlanetObject
      v-if="!turnOffJupiter"
      ref="jupiterRef"
      name="Jupiter"
      :position="[30, 0, 0]"
      path="/Planets/Two Ring Planet.glb"
      planetScale="1"
      speedUp="0.5"
      :orbit="orbitPlanets"
    />
  </Suspense>
  <Suspense>
    <!-- Saturn -->
    <PlanetObject
      v-if="!turnOffSaturn"
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
      v-if="!turnOffNeptune"
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
