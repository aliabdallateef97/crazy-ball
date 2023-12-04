import { useRef, useState } from "react";
import { RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const BlockAxe = ({
  position = [0, 0, 0],
  geometry,
  material,
  axeMaterial,
}) => {
  const axe = useRef();
  const [timeOffset] = useState(() => Math.random() * (Math.PI * 2));

  useFrame((state) => {
    const time = state.clock.getElapsedTime()*2.5;

    const x = Math.sin(time + timeOffset)*1.25;
    axe.current.setNextKinematicTranslation({
      x: position[0] +x,
      y: position[1] +0.75,
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
        ref={axe}
        type="kinematicPosition"
        position={[0, 0.75, 0]}
        restitution={0.2}
        friction={0}
      >
        <mesh
          geometry={geometry}
          material={axeMaterial}
          scale={[1.5, 1.5, 0.3]}
          castShadow
          receiveShadow
        />
      </RigidBody>
    </group>
  );
};

export default BlockAxe;
