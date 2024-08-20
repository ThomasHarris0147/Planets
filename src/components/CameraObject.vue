<script setup>
import { normalize, distance } from '../helpers/HelperFunctions'
import PlanetsInfoService from '../stores/PlanetsInfoService'
import { useLoop } from '@tresjs/core'
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { Vector3 } from 'three'
const props = defineProps({
  planetName: { type: String, required: true, default: 'Earth' },
  planetZoomOffset: { type: Number, required: false, default: 30 },
  turnOnPlanetZoom: { type: Boolean, required: true, default: false }
})
var cameraPosition = [0, 0, 120]
const lookAt = ref([0, 0, 0])
const PlanetsInfoServiceInstance = PlanetsInfoService.getInstance()
const PlanetPos = ref([0, 0, 0])
const { onAfterRender } = useLoop()
// TODO: refactor this ugly ass code
onAfterRender(({ delta, elapsed }) => {
  const PlanetPos = PlanetsInfoServiceInstance.get(props.planetName)
  if (PlanetPos && props.turnOnPlanetZoom) {
    const newCameraPos = [PlanetPos[0] + props.planetZoomOffset, PlanetPos[1], PlanetPos[2]]
    const distanceRes = distance(
      new Vector3(cameraPosition[0], cameraPosition[1], cameraPosition[2]),
      new Vector3(newCameraPos[1], newCameraPos[2], newCameraPos[3])
    )
    console.log(distanceRes)
    if (distanceRes <= 50) {
      cameraPosition = newCameraPos
      lookAt.value = PlanetPos
    } else {
      const direction = normalize(
        new Vector3(
          newCameraPos[0] - cameraPosition[0],
          newCameraPos[1] - cameraPosition[1],
          newCameraPos[2] - cameraPosition[2]
        )
      )
      const newUpdatedCameraPos = [
        cameraPosition[0] + direction.x * delta * 100,
        cameraPosition[1] + direction.y * delta * 100,
        cameraPosition[2] + direction.z * delta * 100
      ]
      cameraPosition = newUpdatedCameraPos
      lookAt.value = PlanetPos
    }
  } else {
    cameraPosition = [0, 0, 120]
    lookAt.value = [0, 0, 0]
  }
})
</script>

<template>
  <TresPerspectiveCamera :position="cameraPosition" :look-at="lookAt" />
</template>
