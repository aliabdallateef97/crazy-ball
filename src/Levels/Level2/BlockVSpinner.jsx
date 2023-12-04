import { useRef, useState } from "react";
import { RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const BlockVSpinner = ({
  position = [0, 0, 0],
  geometry,
  material,
  spinnerMaterial,
}) => {
  const spinner = useRef();
  const [speed] = useState(
    () => (Math.random() + 4) * (Math.random() < 0.5 ? -1 : 1)
  );

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    const rotation = new THREE.Quaternion();
    rotation.setFromEuler(new THREE.Euler(0, 0, time * speed));
    spinner.current.setNextKinematicRotation(rotation);
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
        ref={spinner}
        type="kinematicPosition"
        position={[0, 2.1, 0]}
        restitution={0.2}
        friction={0}
      >
        <mesh
          geometry={geometry}
          material={spinnerMaterial}
          scale={[3, 0.3, 0.3]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={geometry}
          material={spinnerMaterial}
          scale={[1, 1, 1]}
          position={[-1.5,0,0]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={geometry}
          material={spinnerMaterial}
          scale={[1, 1, 1]}
          castShadow
          position={[1.5,0,0]}
          receiveShadow
        />
      </RigidBody>
    </group>
  );
};

export default BlockVSpinner;
