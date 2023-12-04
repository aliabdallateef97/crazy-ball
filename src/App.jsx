import Lights from "./Lights"
import Level from "./Levels"
import { Physics} from "@react-three/rapier"
import Player from "./Player"

function App() {


  return (
    <>
    <color args={['#bdedfc']} attach='background'/>

    <Physics >
    <Lights />
    <Level />
    <Player />
    </Physics>
    </>
  )
}

export default App
