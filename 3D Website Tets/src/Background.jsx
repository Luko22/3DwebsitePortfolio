import React from 'react'
import { useThree } from '@react-three/fiber'
import { CubeTextureLoader } from 'three'

export function Background() {
  const { scene } = useThree()
  const loader = new CubeTextureLoader()
  const texture = loader.load([
    '/skybox/px.jpg',
    '/skybox/nx.jpg',
    '/skybox/py.jpg',
    '/skybox/ny.jpg',
    '/skybox/pz.jpg',
    '/skybox/nz.jpg',
  ])
  scene.background = texture
  return null
}