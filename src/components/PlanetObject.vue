<script setup>
import * as THREE from 'three'
import { useGLTF } from '@tresjs/cientos'
import { ref, shallowRef } from 'vue'
import { useRenderLoop } from '@tresjs/core'
import { usePlanetStore } from '../stores/PlanetStore'
const planetStore = usePlanetStore()
const props = defineProps({
  name: { type: String, required: true },
  position: { type: Array, required: true },
  path: { type: String, required: true },
  planetScale: { type: Number, required: false, default: 1 },
  envPath: { type: String, required: false },
  envScale: { type: Number, required: false, default: 1 },
  envRotation: { type: Number, required: false, default: 1 },
  planetRotation: { type: Number, required: false, default: 0.08 },
  speedUp: { type: Number, required: false, default: 1 },
  orbit: { type: Boolean, required: false, default: true }
})
const { scene, materials } = await useGLTF(props.path, {
  draco: true
})
const envTexture = new THREE.TextureLoader().load(props.envPath)
const envGeometry = new THREE.SphereGeometry(props.envScale, 40, 40)
const envMaterial = new THREE.MeshBasicMaterial({
  map: envTexture,
  transparent: true
})
scene.scale.set(props.planetScale, props.planetScale, props.planetScale)
const env = new THREE.Mesh(envGeometry, envMaterial)
const planetRef = ref('planetRef')
const envRef = shallowRef()
const groupRef = ref('groupRef')

const { onBeforeLoop } = useRenderLoop()
var time = 0
onBeforeLoop(({ elapsed, delta }) => {
  if (props.orbit) {
    time += delta
  }
  if (envRef.value) {
    // Rotation
    envRef.value.rotation.y -= props.envRotation * delta
    // Movement
    if (props.orbit) {
      envRef.value.position.x =
        props.position[0] * Math.sin(time * props.speedUp) - props.position[0]
      envRef.value.position.y = props.position[0] * Math.cos(time * props.speedUp)
    }
  }
  if (planetRef.value) {
    // Rotation
    scene.rotation.y += props.planetRotation * delta
    // Movement
    if (props.orbit) {
      scene.position.x = props.position[0] * Math.sin(time * props.speedUp) - props.position[0]
      scene.position.y = props.position[0] * Math.cos(time * props.speedUp)
    }
    planetStore.setPlanetsLoc(props.name, [scene.position.x, scene.position.y, scene.position.z])
  }
})
</script>
<template>
  <TresGroup :position="props.position" ref="groupRef">
    <primitive v-if="props.envPath" ref="envRef" :object="env" />
    <primitive ref="planetRef" :object="scene" :material="materials[0]" cast-shadow />
  </TresGroup>
</template>
