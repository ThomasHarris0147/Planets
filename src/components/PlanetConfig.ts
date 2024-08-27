export const planets = [
  {
    name: 'Sun',
    position: [0, 0, 0],
    path: '/Planets/Earth Like Planet.glb',
    envPath: '/Planets/Environment/sun_map.jpg',
    envRotation: 0.3,
    envScale: 5,
    planetScale: 1
  },
  {
    name: 'Mercury',
    position: [10, 0, 0],
    path: '/Planets/Hot Planet.glb',
    planetScale: 0.5,
    speedUp: 2
  },
  {
    name: 'Earth',
    position: [20, 0, 0],
    path: '/Planets/Earth Like Planet.glb',
    orbit: true,
    envPath: '/Planets/Environment/small-world-clouds.png',
    envScale: 2.1,
    envRotation: 0.2
  },
  {
    name: 'Jupiter',
    position: [30, 0, 0],
    path: '/Planets/Two Ring Planet.glb',
    planetScale: 1,
    speedUp: 0.5
  },
  {
    name: 'Saturn',
    position: [40, 0, 0],
    path: '/Planets/One Ring Planet.glb',
    planetScale: 2,
    planetRotation: 0.2,
    speedUp: 0.2
  },
  {
    name: 'Neptune',
    position: [50, 0, 0],
    path: '/Planets/Cold Planet.glb',
    planetScale: 1,
    planetRotation: 0.8,
    speedUp: 0.1
  }
]
