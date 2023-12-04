import React, { useEffect, useRef } from "react";
import { useKeyboardControls } from "@react-three/drei";
import useGame from "./store/useGame";
import { addEffect } from "@react-three/fiber";

const Interface = () => {
  const forward = useKeyboardControls((state) => state.forward);
  const backward = useKeyboardControls((state) => state.backward);
  const leftward = useKeyboardControls((state) => state.leftward);
  const rightward = useKeyboardControls((state) => state.rightward);
  const jump = useKeyboardControls((state) => state.jump);

  const restart = useGame((state) => state.restart);
  const phase = useGame((state) => state.phase);
  const editLevel = useGame((state) => state.editLevel);
  const next = useGame((state) => state.next);
  const level = useGame((state) => state.level);

  const time = useRef();

  const moveToNextLevel = () => {
    editLevel(), next();
  };

  useEffect(() => {
    // use addEffect to calculate the time outside the canvas on each frame
    const unsubscribeEffects = addEffect(() => {
      const state = useGame.getState();

      let elapsedTime = 0;
      let timer = 0;

      if (state.phase === "playing") {
        elapsedTime = Date.now() - state.startTime;
      }

      elapsedTime = elapsedTime / 1000;
      elapsedTime = elapsedTime.toFixed();

      if(state.level === 1){
        timer = state.levelOneTime - elapsedTime;
      }else if(state.level ===2){
        timer = state.levelTwoTime - elapsedTime;
      }else if(state.level ===3){
        timer = state.levelThreeTime - elapsedTime;
      }


      if (timer == 0) {
        state.restart();
      }

      if (time.current) {
        time.current.textContent = timer;
      }
    });

    return () => unsubscribeEffects();
  }, []);

  return (
    <div className="interface">
      <div ref={time} className="time">
        0.00
      </div>

      {phase === "ended" && level !== 3 ? (
        <div className="restart" onClick={moveToNextLevel}>
          Next Level
        </div>
      ):null}

      {phase === "ended" && level === 3 ? (
        <div className="restart" onClick={moveToNextLevel}>
          Restart
        </div>
      ):null}

      <div className="controls">
        <div className="raw">
          <div className={`key ${forward ? "active" : ""}`}></div>
        </div>
        <div className="raw">
          <div className={`key ${leftward ? "active" : ""}`}></div>
          <div className={`key ${backward ? "active" : ""}`}></div>
          <div className={`key ${rightward ? "active" : ""}`}></div>
        </div>
        <div className="raw">
          <div className={`key large ${jump ? "active" : ""}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Interface;
