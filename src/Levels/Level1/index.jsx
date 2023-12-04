import * as THREE from "three";
import BlockStart from "../GlobalBlock/BlockStart";
import BlockSpinner from "../GlobalBlock/BlockSpinner";
import BlockLimbo from "./BlockLimbo";
import BlockAxe from "./BlockAxe";
import BlockEnd from "./BlockEnd";
import { CuboidCollider } from "@react-three/rapier";
import {boxGeometry,boxMaterial,endMaterial,shapeMaterial} from '../globalGeometryMaterial'


const Level1 = () => {
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
      <BlockSpinner
        position={[0, 0, -8]}
        geometry={boxGeometry}
        material={boxMaterial}
        spinnerMaterial={shapeMaterial}
      />
      <BlockLimbo
        position={[0, 0, -12]}
        geometry={boxGeometry}
        material={boxMaterial}
        limboMaterial={shapeMaterial}
      />
      <BlockLimbo
        position={[0, 0, -16]}
        geometry={boxGeometry}
        material={boxMaterial}
        limboMaterial={shapeMaterial}
      />
      <BlockLimbo
        position={[0, 0, -20]}
        geometry={boxGeometry}
        material={boxMaterial}
        limboMaterial={shapeMaterial}
      />
      <BlockAxe
        position={[0, 0, -24]}
        geometry={boxGeometry}
        material={boxMaterial}
        axeMaterial={shapeMaterial}
      />
      <BlockAxe
        position={[0, 0, -28]}
        geometry={boxGeometry}
        material={boxMaterial}
        axeMaterial={shapeMaterial}
      />
      <BlockEnd
        position={[0, 0, -32]}
        geometry={boxGeometry}
        material={endMaterial}
      />

      {/* add physics to the floor */}
      <CuboidCollider args={[2,0.1,18]} position={[0,-0.1,-16]} restitution={0.2} friction={1}/>

    </>
  );
};

export default Level1;
