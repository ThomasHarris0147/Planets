<script setup>
import { normalize, distance } from '../helpers/HelperFunctions'
import { useLoop } from '@tresjs/core'
import { ref } from 'vue'
import { Vector3 } from 'three'
import { usePlanetStore } from '../stores/PlanetStore'
const planetStore = usePlanetStore()
const props = defineProps({
  planetName: { type: String, required: true, default: 'Earth' },
  planetZoomOffset: { type: Number, required: false, default: 30 },
  turnOnPlanetZoom: { type: Boolean, required: true, default: false },
  isolatePlanetFunction: { type: Function, required: true }
})
var cameraPosition = [0, 0, 120]
const lookAt = ref([0, 0, 0])
const { onAfterRender } = useLoop()
// TODO: refactor this ugly ass code
onAfterRender(({ delta, elapsed }) => {
  const PlanetPos = planetStore.getPlanetsLoc(props.planetName)
  if (PlanetPos && props.turnOnPlanetZoom) {
    const newCameraPos = [PlanetPos[0] + props.planetZoomOffset, PlanetPos[1], PlanetPos[2]]
    const distanceRes = distance(
      new Vector3(cameraPosition[0], cameraPosition[1], cameraPosition[2]),
      new Vector3(newCameraPos[1], newCameraPos[2], newCameraPos[3])
    )
    if (distanceRes <= 60) {
      cameraPosition = newCameraPos
      lookAt.value = PlanetPos
      props.isolatePlanetFunction()
    } else {
      const direction = normalize(
        new Vector3(
          newCameraPos[0] - cameraPosition[0],
          newCameraPos[1] - cameraPosition[1],
          newCameraPos[2] - cameraPosition[2]
        )
      )
      const newUpdatedCameraPos = [
        cameraPosition[0] + direction.x * delta * 80,
        cameraPosition[1] + direction.y * delta * 80,
        cameraPosition[2] + direction.z * delta * 80
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
