import React from "react";
import Level1 from "./Level1";
import Level2 from "./Level2";
import Level3 from "./Level3";
import useGame from "../store/useGame";

const Level = () => {
  const level = useGame((state) => state.level);

  let levelContent = <Level1 />;
  if (level === 2) {
    levelContent = <Level2 />;
  }else if(level === 3){
    levelContent= <Level3 />
  }
  return levelContent;
};

export default Level;
