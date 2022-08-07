import ReactDOM from "react-dom";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import "./styles.css";
import { Stats } from "@react-three/drei";
import Earth from "./Earth";

ReactDOM.render(
  <Canvas>
    {/* repace null with <div>Loading...</div> or an animation later */}
    <Suspense fallback={null}>
      <Stats />
      <ambientLight />
      <group>
        {/* <pointLight position={[5, 5, 5]} /> */}
        <Earth position={[0, 0, 0]} />
      </group>
    </Suspense>
  </Canvas>,
  document.getElementById("root")
);
