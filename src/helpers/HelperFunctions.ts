import { Vector3 } from 'three'
function lerp(start: number, end: number, t: number) {
  // Smoothly interpolate from start to end based on t
  return start * (1 - t) + end * t
}
function normalize(vector3: Vector3) {
  return vector3.divideScalar(
    Math.sqrt(vector3.x * vector3.x + vector3.y * vector3.y + vector3.z * vector3.z)
  )
}

function distance(v1: Vector3, v2: Vector3) {
  return Math.sqrt(
    (v1.x - v2.x) * (v1.x - v2.x) + (v1.y - v2.y) * (v1.y - v2.y) + (v1.z - v2.z) * (v1.z - v2.z)
  )
}
export { lerp, normalize, distance }
