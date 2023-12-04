import { Float, Text } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import React from "react";

function Walls({geometry}){
  return(
    <RigidBody type="fixed" restitution={0.2} friction={0}>
    <mesh geometry={geometry} position={[2,0.75,0]} scale={[0.3,1.5,4]} receiveShadow>
      <meshStandardMaterial color='red'/>
    </mesh>
    <mesh geometry={geometry} position={[-2,0.75,0]} scale={[0.3,1.5,4]} receiveShadow>
      <meshStandardMaterial color='red'/>
    </mesh>
    <mesh geometry={geometry} position={[0,0.75,-2]} scale={[4,1.5,0.3]} receiveShadow>
      <meshStandardMaterial color='red'/>
    </mesh>
    </RigidBody>
  )
}

const BlockEnd = ({ position = [0, 0, 0], geometry, material }) => {
  return (
    <group position={position}>
      <Float floatIntensity={0.25} rotationIntensity={0.25}>
        <Text
        font="./bebas-neue-v9-latin-regular.woff"
         scale={0.5}
         maxWidth={0.25}
         lineHeight={0.75}
         position={[0,1,0]}
         >
          Finish
          <meshBasicMaterial toneMapped={false}/>
          </Text>
      </Float>
      <mesh
        geometry={geometry}
        material={material}
        scale={[4, 0.2, 4]}
        receiveShadow
        position={[0, -0.1, 0]}
      />
      <Walls geometry={geometry}/>
    </group>
  );
};

export default BlockEnd;
