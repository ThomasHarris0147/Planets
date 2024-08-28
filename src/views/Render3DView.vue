<script setup lang="ts">
import { Stars } from '@tresjs/cientos'
import { TresCanvas } from '@tresjs/core'
import { BasicShadowMap, SRGBColorSpace, NoToneMapping } from 'three'
// @ts-ignore
import CameraObject from '../components/CameraObject.vue'
// @ts-ignore
import AllPlanets from '../components/AllPlanets.vue'
import { ref } from 'vue'

const props = defineProps({
  zoomInOnPlanet: { type: Boolean, required: false, default: false }
})
const gl = {
  shadows: false,
  alpha: true,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  toneMapping: NoToneMapping
}
const allPlanetsRef = ref()
const cameraRef = ref()
const planetToZoomInto = ref('Earth')
const planetZoomOffsetNum = ref(30)
const setPlanetFocus = (planetName: string, planetZoomOffset: number = 30) => {
  planetToZoomInto.value = planetName
  planetZoomOffsetNum.value = planetZoomOffset
}
const turnOnAllPlanets = () => {
  allPlanetsRef.value.turnOnAllPlanets()
}
const isolatePlanetFunction = () => {
  allPlanetsRef.value.isolatePlanet(planetToZoomInto.value)
}
defineExpose({
  setPlanetFocus,
  turnOnAllPlanets
})
</script>
<template>
  <TresCanvas window-size v-bind="gl" clear-color="#000000">
    <CameraObject
      :planetName="planetToZoomInto"
      :turnOnPlanetZoom="props.zoomInOnPlanet"
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
