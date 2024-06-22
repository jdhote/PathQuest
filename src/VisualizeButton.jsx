const VisualizeButton=({visualizeAlgorithm,selectedAlgorithm})=>{
    return(
<button   onClick={visualizeAlgorithm} type="button" class="btn btn-success visualize-btn">Visualize {selectedAlgorithm}'s Algorithm</button>
    )
}

export default VisualizeButton;