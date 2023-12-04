import * as THREE from "three";
import BlockStart from "../GlobalBlock/BlockStart";
import { CuboidCollider } from "@react-three/rapier";
import BlockSpinner from "../GlobalBlock/BlockSpinner";
import BlockVSpinner from "./BlockVSpinner";
import Block1 from "./Block1";
import BlockEnd from "../GlobalBlock/BlockEnd"; 
import {boxGeometry,boxMaterial,endMaterial,shapeMaterial} from '../globalGeometryMaterial'


const Level2 = () => {
  return (
    <>
      <BlockStart
        position={[0, 0, 0]}
        geometry={boxGeometry}
        material={boxMaterial}
      />
      <BlockSpinner
        position={[0, 0, -4]}
        geometry={boxGeometry}
        material={boxMaterial}
        spinnerMaterial={shapeMaterial}
      />
      <BlockVSpinner
        position={[0, 0, -8]}
        geometry={boxGeometry}
        material={boxMaterial}
        spinnerMaterial={shapeMaterial}
      />
      <BlockSpinner
        position={[0, 0, -12]}
        geometry={boxGeometry}
        material={boxMaterial}
        spinnerMaterial={shapeMaterial}
      />
      <BlockVSpinner
        position={[0, 0, -16]}
        geometry={boxGeometry}
        material={boxMaterial}
        spinnerMaterial={shapeMaterial}
      />
      <Block1
        position={[0, 0, -19]}
        geometry={boxGeometry}
        material={boxMaterial}
      />
      <Block1
        position={[1, 0, -22]}
        geometry={boxGeometry}
        material={boxMaterial}
      />
      <Block1
        position={[0, 0, -25]}
        geometry={boxGeometry}
        material={boxMaterial}
      />
      <Block1
        position={[-1, 0, -28]}
        geometry={boxGeometry}
        material={boxMaterial}
      />
      <BlockEnd
        position={[0, 0, -32]}
        geometry={boxGeometry}
        material={endMaterial}
        text="Finish"
      />

      {/* add physics to the floor */}
      <CuboidCollider
        args={[2, 0.1, 10]}
        position={[0, -0.1, -8]}
        restitution={0.2}
        friction={1}
      />
    </>
  );
};

export default Level2;
