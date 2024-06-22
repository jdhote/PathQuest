import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './components/Header/Header'
import PathFindingVisualizer from './components/PathfindingVisualizer'
import Info from './components/Info/Info'
import { useState } from 'react'
import Info2 from './components/Info2/Info2'
import PopUp from './components/PopUp/PopUp'



function App() {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(null);
 
  const [isAlgoSelected,setIsAlgoSelected]=useState(false);

  const handleAlgorithmSelect = (algorithm) => {
    setSelectedAlgorithm(algorithm);
    setIsAlgoSelected(true);
  };
 
  return (
    <>
    <Header isAlgoSelected={isAlgoSelected} setIsAlgoSelected={setIsAlgoSelected}  handleAlgorithmSelect={handleAlgorithmSelect}> </Header>
    {isAlgoSelected?<Info2 selectedAlgorithm={selectedAlgorithm}></Info2>: <Info></Info>}
    <PathFindingVisualizer selectedAlgorithm={selectedAlgorithm}></PathFindingVisualizer>
    </>
  )
}

export default App
