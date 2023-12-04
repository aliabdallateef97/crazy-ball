import React from 'react'
import { RigidBody } from '@react-three/rapier'

const Block1 = ({ position = [0, 0, 0], geometry, material }) => {
  return (
    <group position={position}>
    <RigidBody type="fixed" restitution={0.2} friction={1}>
    <mesh
    geometry={geometry}
    material={material}
    scale={[0.6, 0.2, 2]}
    receiveShadow
    position={[0, -0.1, 0]}
  />
  </RigidBody>
 </group>
  )
}

export default Block1