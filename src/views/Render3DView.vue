<script setup lang="ts">
import { OrbitControls, Stars } from '@tresjs/cientos'
import { TresCanvas } from '@tresjs/core'
import { BasicShadowMap, SRGBColorSpace, NoToneMapping } from 'three'
// @ts-ignore
import CameraObject from '../components/CameraObject.vue'
// @ts-ignore
import AllPlanets from '../components/AllPlanets.vue'
import { ref } from 'vue'
const gl = {
  shadows: false,
  alpha: true,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  toneMapping: NoToneMapping
}
const allPlanetsRef = ref()
const cameraRef = ref()
const zoomInOnPlanet = ref(false)
const planetToZoomInto = ref('Earth')
const planetZoomOffsetNum = ref(30)
const setPlanetFocus = (planetName: string, planetZoomOffset: number = 30) => {
  planetToZoomInto.value = planetName
  planetZoomOffsetNum.value = planetZoomOffset
}
const cameraPlanetZoomIn = () => {
  zoomInOnPlanet.value = true
}

const cameraPlanetZoomOut = () => {
  zoomInOnPlanet.value = false
}
const freezePlanets = () => {
  allPlanetsRef.value.freezePlanets()
}
const startPlanets = () => {
  allPlanetsRef.value.startPlanets()
}
const turnOnAllPlanets = () => {
  allPlanetsRef.value.turnOnAllPlanets()
}
const isolatePlanet = (planetName: string) => {
  allPlanetsRef.value.isolatePlanet(planetName)
}
const isolatePlanetFunction = () => {
  isolatePlanet(planetToZoomInto.value)
}
defineExpose({
  cameraPlanetZoomIn,
  cameraPlanetZoomOut,
  setPlanetFocus,
  freezePlanets,
  startPlanets,
  isolatePlanet,
  turnOnAllPlanets
})
</script>
<template>
  <TresCanvas window-size v-bind="gl">
    <CameraObject
      :planetName="planetToZoomInto"
      :turnOnPlanetZoom="zoomInOnPlanet"
      :planetZoomOffset="planetZoomOffsetNum"
      :isolatePlanetFunction="isolatePlanetFunction"
      ref="cameraRef"
    />
    <!-- <OrbitControls /> -->
    <Stars :radius="10" />
    <Suspense>
      <AllPlanets ref="allPlanetsRef" />
    </Suspense>
    <TresAmbientLight :intensity="5" />
    <TresPointLight :position="[1, 0, 0]" :intensity="50" :decay="0.8" cast-shadow />
  </TresCanvas>
</template>
<style></style>
