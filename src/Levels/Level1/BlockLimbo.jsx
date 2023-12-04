import { useRef, useState } from "react";
import { RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const BlockLimbo = ({
  position = [0, 0, 0],
  geometry,
  material,
  limboMaterial,
}) => {
  const limbo = useRef();
  const [timeOffset] = useState(() => Math.random() * (Math.PI * 2));

  useFrame((state) => {
    const time = state.clock.getElapsedTime()*2;

    const y = Math.sin(time + timeOffset) + 1.15;
    limbo.current.setNextKinematicTranslation({
      x: position[0],
      y: position[1] + y,
      z: position[2],
    });
  });

  return (
    <group position={position}>
      <mesh
        geometry={geometry}
        material={material}
        scale={[4, 0.2, 4]}
        receiveShadow
        position={[0, -0.1, 0]}
      />
      <RigidBody
        ref={limbo}
        type="kinematicPosition"
        position={[0, 0.3, 0]}
        restitution={0.2}
        friction={0}
      >
        <mesh
          geometry={geometry}
          material={limboMaterial}
          scale={[3.5, 0.3, 0.3]}
          castShadow
          receiveShadow
        />
      </RigidBody>
    </group>
  );
};

export default BlockLimbo;
