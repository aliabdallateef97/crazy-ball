import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export default create(
  subscribeWithSelector((set) => {
    return {
      /**
       * Time
       */
      startTime: 0,
      levelOneTime: 10,
      levelTwoTime: 15,
      levelThreeTime: 30,

      /**
       * Phases
       */
      phase: "ready",

      start: () =>
        set((state) =>
          state.phase === "ready"
            ? { phase: "playing", startTime: Date.now() }
            : {}
        ),

      restart: () =>
        set((state) =>
          state.phase === "playing" 
            ? { phase: "ready" }
            : {}
        ),

      next: () =>
        set((state) =>
           state.phase === "ended"
            ? { phase: "ready" }
            : {}
        ),

      end: () =>
        set((state) => (state.phase === "playing" ? { phase: "ended" } : {})),

        /**
         * Level
         */
        level:1,
        editLevel:()=> set((state)=>(state.level < 3?{ level: state.level + 1 }:{level:1}))
    };
  })
);
