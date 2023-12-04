import { Float, Text } from "@react-three/drei";
import React from "react";

const BlockStart = ({ position = [0, 0, 0], geometry, material }) => {
  return (
    <group position={position}>
       <Float floatIntensity={0.25} rotationIntensity={0.25}>
        <Text
        font="./bebas-neue-v9-latin-regular.woff"
         scale={0.5}
         maxWidth={0.25}
         lineHeight={0.75}
         textAlign="right"
         position={[0.75,0.65,0]}
         rotation-y={-0.25}
         >
          Start
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
    </group>
  );
};

export default BlockStart;
