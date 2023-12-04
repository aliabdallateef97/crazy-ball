import React from "react";
import { RigidBody, useRapier } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import useGame from "./store/useGame";

const Player = () => {
  const [subscribeKeys, getKeys] = useKeyboardControls();
  const ball = useRef();
  const { rapier, world } = useRapier();

  const start = useGame((state) => state.start);
  const end = useGame((state) => state.end);
  const restart = useGame((state) => state.restart);
  const level = useGame((state)=> state.level)

  const [smothedCameraPosition] = useState(() => new THREE.Vector3(20, 20, 40));
  const [smothedCameraTarget] = useState(() => new THREE.Vector3());

  const jump = () => {
    // ball coordinate
    const origin = ball.current.translation();
    origin.y -= 0.31;

    //add ray cast
    const direction = { x: 0, y: -1, z: 0 };
    const ray = new rapier.Ray(origin, direction);
    const hit = world.castRay(ray, 10, true);

    if (hit.toi < 0.15) {
      ball.current.applyImpulse({ x: 0, y: 0.5, z: 0 });
    }
  };

  const reset = () => {
    //set the ball coordinate
    ball.current.setTranslation({ x: 0, y: 1, z: 0 });

    // to removr translation force
    ball.current.setLinvel({ x: 0, y: 0, z: 0 });

    // to remove angular(rotation) force
    ball.current.setAngvel({ x: 0, y: 0, z: 0 });
  };

  useEffect(() => {
    // subscribe phase when it change
    const unsubscribeReset = useGame.subscribe(
      //selector to lesten to phase change
      (state) => state.phase,
      //add an function that reset the ball
      (value) => {
        if (value === "ready") {
          reset();
        }
      }
    );

    const unsubscribeJump = subscribeKeys(
      //selector to lesten to jumb change
      (state) => state.jump,
      //add an function to make the ball jumb
      (value) => {
        if (value) {
          jump();
        }
      }
    );

    // change the start phase from ready to playing
    const unsubscribeAny = subscribeKeys(() => {
      start();
    });

    return () => {
      unsubscribeJump();
      unsubscribeAny();
      unsubscribeReset();
    };
  }, []);

  // when the ball and camera move on each frame
  useFrame((state, delta) => {
    /**
     * Ball Controls
     */
    const { forward, backward, leftward, rightward } = getKeys();

    const impulse = { x: 0, y: 0, z: 0 };
    const torque = { x: 0, y: 0, z: 0 };

    const impulesStrength = 0.6 * delta;
    const torqueStrength = 0.2 * delta;

    if (forward) {
      impulse.z -= impulesStrength;
      torque.x -= torqueStrength;
    }

    if (backward) {
      impulse.z += impulesStrength;
      torque.x += torqueStrength;
    }

    if (leftward) {
      impulse.x -= impulesStrength;
      torque.z += torqueStrength;
    }

    if (rightward) {
      impulse.x += impulesStrength;
      torque.z -= torqueStrength;
    }

    // add move to the ball
    ball.current.applyImpulse(impulse);

    // add rotation to the ball when it move
    ball.current.applyTorqueImpulse(torque);

    /**
     * Camera
     */
    const ballPosition = ball.current.translation();

    const cameraPosition = new THREE.Vector3();
    cameraPosition.copy(ballPosition);
    cameraPosition.z += 3;
    cameraPosition.y += 1.5;

    const cameraTarget = new THREE.Vector3();
    cameraTarget.copy(ballPosition);
    cameraTarget.y += 0.25;

    //to move the camera smoothly
    smothedCameraPosition.lerp(cameraPosition, 5 * delta);
    smothedCameraTarget.lerp(cameraTarget, 5 * delta);

    state.camera.position.copy(smothedCameraPosition);
    state.camera.lookAt(smothedCameraTarget);

    /**
     * Phases
     */
    // change the phase from playing to ended
    if(level !==3){
      if (ballPosition.z < -30 && ballPosition.y > -0.2) {
        end();
      }
    }else{
      if (ballPosition.z < -48 && ballPosition.y > -0.2) {
        end();
      }
    }

    // change the phase when the ball fall from playing to ready
    if (ballPosition.y < -4) {
      restart();
    }
  });

  return (
    <RigidBody
      ref={ball}
      position={[0, 1, 0]}
      colliders="ball"
      restitution={0.2}
      friction={1}
      linearDamping={0.5}
      angularDamping={0.5}
      canSleep={false}
    >
      <mesh castShadow>
        <sphereGeometry args={[0.3]} />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
    </RigidBody>
  );
};

export default Player;
