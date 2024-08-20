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
  shadows: true,
  alpha: true,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  toneMapping: NoToneMapping
}
const allPlanetsRef = ref()
const cameraRef = ref()
const zoomInOnPlanet = ref(false)
const planetToZoomInto = ref('Earth')
const setPlanetFocus = (planetName: string) => {
  planetToZoomInto.value = planetName
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
defineExpose({
  cameraPlanetZoomIn,
  cameraPlanetZoomOut,
  setPlanetFocus,
  freezePlanets,
  startPlanets
})
</script>
<template>
  <TresCanvas :background="texture" window-size v-bind="gl">
    <CameraObject
      :planetName="planetToZoomInto"
      :turnOnPlanetZoom="zoomInOnPlanet"
      :planetZoomOffset="30"
      ref="cameraRef"
    />
    <!-- <OrbitControls /> -->
    <Stars :radius="10" />
    <Suspense>
      <AllPlanets ref="allPlanetsRef" />
    </Suspense>
    <TresAmbientLight :intensity="0.5" />
    <TresPointLight :position="[1, 0, 0]" :intensity="50" :decay="0.8" cast-shadow />
  </TresCanvas>
</template>
<style></style>
