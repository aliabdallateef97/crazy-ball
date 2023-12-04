import React from "react";

const Lights = () => {
  return (
    <>
      <directionalLight
        castShadow
        position={[4, 4, 1]}
        intensity={1.5}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={34}
        shadow-camera-top={34}
        shadow-camera-right={34}
        shadow-camera-bottom={-34}
        shadow-camera-left={-34}
      />
      <ambientLight intensity={0.5}/>
    </>
  );
};

export default Lights;
