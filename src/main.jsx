import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Canvas } from "@react-three/fiber";
import { KeyboardControls } from "@react-three/drei";
import Interface from "./Interface.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <KeyboardControls
    map={[
      { name: "forward", keys: ["ArrowUp", "w", "W"] },
      { name: "backward", keys: ["ArrowDown", "s", "S"] },
      { name: "leftward", keys: ["ArrowLeft", "a", "A"] },
      { name: "rightward", keys: ["ArrowRight", "d", "D"] },
      { name: "jump", keys: ["Space"] },
    ]}
  >
    <Canvas
      shadows
      camera={{ fov: 45, near: 0.1, far: 200, position: [2.5, 4, 6] }}
    >
      <App />
    </Canvas>
    <Interface />
  </KeyboardControls>
);
