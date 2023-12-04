import React from "react";
import BlockStart from "../GlobalBlock/BlockStart";
import * as THREE from "three";
import { CuboidCollider } from "@react-three/rapier";
import BlockVSpinner from "./BlockVSpinner";
import Block1 from "./Block1";
import BlockEnd from "../GlobalBlock/BlockEnd";
import {boxGeometry,boxMaterial,endMaterial,shapeMaterial} from '../globalGeometryMaterial'

const Level3 = () => {

  return (
    <>
      <BlockStart
        position={[0, 0, 0]}
        geometry={boxGeometry}
        material={boxMaterial}
      />
      <Block1
        position={[-1, 0, -5]}
        geometry={boxGeometry}
        material={boxMaterial}
      />
      <BlockVSpinner
        position={[-1, 0, -10]}
        geometry={boxGeometry}
        material={boxMaterial}
        spinnerMaterial={shapeMaterial}
      />
      <Block1
        position={[-1, 0, -15]}
        geometry={boxGeometry}
        material={boxMaterial}
      />
      <BlockVSpinner
        position={[-1, 0, -20]}
        geometry={boxGeometry}
        material={boxMaterial}
        spinnerMaterial={shapeMaterial}
      />
      <Block1
        position={[0, 0, -25]}
        geometry={boxGeometry}
        material={boxMaterial}
      />
      <Block1
        position={[0, 0, -29]}
        geometry={boxGeometry}
        material={boxMaterial}
      />
      <Block1
        position={[0, 0, -33]}
        geometry={boxGeometry}
        material={boxMaterial}
      />
      <Block1
        position={[1, 0, -37]}
        geometry={boxGeometry}
        material={boxMaterial}
      />
      <Block1
        position={[1, 0, -41]}
        geometry={boxGeometry}
        material={boxMaterial}
      />
      <Block1
        position={[1, 0, -45]}
        geometry={boxGeometry}
        material={boxMaterial}
      />
      <BlockEnd
        position={[0, 0, -50]}
        geometry={boxGeometry}
        material={endMaterial}
        text="Congratulations"
      />

      {/* add physics to the floor */}
      <CuboidCollider
        args={[2, 0.1, 2]}
        position={[0, -0.1, 0]}
        restitution={0.2}
        friction={1}
      />
    </>
  );
};

export default Level3;
