<script setup lang="ts">
import { useTresContext } from '@tresjs/core'
import * as THREE from 'three'

const { scene } = useTresContext()

const props = defineProps({
  arrayOfPoints: { type: Array, required: true },
  color: { type: String, required: false, default: 'red' },
  thickness: { type: Number, required: false, default: 0.5 }
})

const vec3OfPoints = []

for (let i = 0; i < props.arrayOfPoints.length; i++) {
  vec3OfPoints.push(
    new THREE.Vector3(
      props.arrayOfPoints[i][0],
      props.arrayOfPoints[i][1],
      props.arrayOfPoints[i][2]
    )
  )
}

//Create a closed wavey loop
const curve = new THREE.CatmullRomCurve3([...vec3OfPoints])

const material = new THREE.LineBasicMaterial({ color: props.color })
// Create Tube Geometry
const tubeGeometry = new THREE.TubeGeometry(
  curve,
  20, // path segments
  props.thickness, // THICKNESS
  8, //Roundness of Tube
  false //closed
)

// Create the final object to add to the scene
const curveObject = new THREE.Line(tubeGeometry, material)
scene.value.add(curveObject)
</script>
