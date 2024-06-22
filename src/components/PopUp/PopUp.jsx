

// import React from 'react';
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
// import './PopUp.css';
// import { AiOutlineClose } from "react-icons/ai";

// const PopUp = ({selectedAlgorithm}) => {
//     return (

//         <div className='popUpContainer'>
            
//             <Popup
//                 trigger={<button style={styles.triggerButton} className='animated-heading'>Learn {selectedAlgorithm}</button>}
//                 modal
//                 nested
//                 overlayStyle={styles.overlay} // Adding custom overlay style
//             >
//                 {close => (
//                     <div style={styles.modal}>
//                           <button style={styles.closeButton} onClick={() => close()}><AiOutlineClose /></button>
//                         <div style={styles.content}>
//                        <h3>Dijkstra's Algorithm</h3> 
// <p> <b>1.Start:</b> Begin at your starting point. Set its distance to 0.</p>
// <p> <b>2.Set distances:</b>   For all other points, set their distance to infinity (unknown).</p>
// <p> <b> 3.Find closest:</b> Choose the unvisited point with the smallest distance.</p>
// <p> <b> 4.Update distances:</b>  Look at all the neighbors of this point. If going through this point to a neighbor is shorter, update the neighbor's distance</p>
// <p> <b>5.Mark as visited:</b>    Mark this point as visited—you’re done with it.</p>
// <p> <b> 6.Repeat:</b>  Go back to step 3 and repeat until all points are visited.</p>
// <p><b> 7.Shortest paths:</b>  Now, you have the shortest path from the starting point to every other point</p>
//                         </div>
//                         <div>
                          
//                         </div>
//                     </div>
//                 )}
//             </Popup>
//         </div>
//     );
// };

// // Inline styles for better visibility
// const styles = {

//     // triggerButton: {
      
//     //     backgroundColor:'white',
//     //     color:'black',
//     //     border: 'none',
//     //     borderRadius: '5px',
//     //     cursor: 'pointer',
//     //     textDecoration:'underline',
//     //     fontSize:'1.3rem',
//     // },
//     // modal: {
//     //     fontFamily: 'Arial, Helvetica, sans-serif',
//     //     background: 'white',
//     //     borderRadius: '10px',
//     //     padding: '20px',
//     //     maxWidth: '500px',
//     //     margin: 'auto',
//     // },
//     // content: {
//     //     marginBottom: '20px',
//     // },
//     // closeButton: {
//     //     position: 'absolute', 
//     //     top: '10px', 
//     //     right: '10px',
//     //     padding: '10px',
//     //     backgroundColor: 'transparent', 
//     //     color: 'black',
//     //     border: 'none',
//     //     borderRadius: '50%',
//     //     cursor: 'pointer',
//     //     fontSize: '20px',
//     // },

//     // popUpContainer:{
//     //   paddingTop:'40px',
//     // },
//         triggerButton: {
//             backgroundColor: 'white',
//             color: 'black',
//             border: 'none',
//             borderRadius: '5px',
//             cursor: 'pointer',
//             textDecoration: 'underline',
//             fontSize: '1.3rem',
//             padding: '10px 20px',
//             boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Added shadow to the trigger button
//             transition: 'all 0.3s ease', // Smooth transition effect
//         },
//         modal: {
//             fontFamily: 'Arial, Helvetica, sans-serif',
//             background: 'white',
//             borderRadius: '10px',
//             padding: '20px',
//             maxWidth: '500px',
//             margin: 'auto',
//             position: 'relative', // Needed to position the close button relative to this div
//             boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)', // Added shadow to the modal
//             transition: 'all 0.3s ease', // Smooth transition effect
//         },
//         content: {
//             marginBottom: '20px',
//         },
//         closeButton: {
//             position: 'absolute', // Absolute positioning
//             top: '10px', // Positioning the button at the top right corner
//             right: '10px',
//             backgroundColor: 'transparent', // Making the background transparent
//             color: 'black',
//             border: 'none',
//             cursor: 'pointer',
//             fontSize: '24px', // Font size for the cross icon
//         },
//         popUpContainer: {
//             paddingTop: '40px',
//         },
   
// };
// export default PopUp;



import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './PopUp.css';
import { AiOutlineClose } from "react-icons/ai";

const PopUp = ({ selectedAlgorithm }) => {
    return (
        <div className='popUpContainer'>
            <Popup
                trigger={<button style={styles.triggerButton} className='animated-heading'>Learn {selectedAlgorithm}</button>}
                modal
                nested
                overlayStyle={styles.overlay} // Applying custom overlay style
                contentStyle={styles.contentStyle} // Applying custom content style to avoid extra divs
            >
                {close => (
                    <div style={styles.modal}>
                        <button style={styles.closeButton} onClick={() => close()}><AiOutlineClose /></button>
                        <div style={styles.content}>
                            <h3>Dijkstra's Algorithm</h3>
                            <p><b>1. Start:</b> Begin at your starting point. Set its distance to 0.</p>
                            <p><b>2. Set distances:</b> For all other points, set their distance to infinity (unknown).</p>
                            <p><b>3. Find closest:</b> Choose the unvisited point with the smallest distance.</p>
                            <p><b>4. Update distances:</b> Look at all the neighbors of this point. If going through this point to a neighbor is shorter, update the neighbor's distance.</p>
                            <p><b>5. Mark as visited:</b> Mark this point as visited—you’re done with it.</p>
                            <p><b>6. Repeat:</b> Go back to step 3 and repeat until all points are visited.</p>
                            <p><b>7. Shortest paths:</b> Now, you have the shortest path from the starting point to every other point.</p>
                        </div>
                    </div>
                )}
            </Popup>
        </div>
    );
};

// Inline styles for better visibility
const styles = {
    triggerButton: {
        backgroundColor: 'white',
        color: 'black',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        textDecoration: 'underline',
        fontSize: '1.3rem',
        padding: '10px 20px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Added shadow to the trigger button
        transition: 'all 0.3s ease', // Smooth transition effect
    },
    modal: {
        fontFamily: 'Arial, Helvetica, sans-serif',
        background: 'white',
        borderRadius: '10px',
        padding: '20px',
        maxWidth: '500px',
        margin: 'auto',
        position: 'relative', // Needed to position the close button relative to this div
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)', // Added shadow to the modal
        transition: 'all 0.3s ease', // Smooth transition effect
    },
    content: {
        marginBottom: '20px',
    },
    closeButton: {
        position: 'absolute', // Absolute positioning
        top: '10px', // Positioning the button at the top right corner
        right: '10px',
        backgroundColor: 'transparent', // Making the background transparent
        color: 'black',
        border: 'none',
        cursor: 'pointer',
        fontSize: '24px', // Font size for the cross icon
    },
    popUpContainer: {
        paddingTop: '40px',
    },
    overlay: {
        background: 'rgba(0, 0, 0, 0.5)', // Dark semi-transparent background
    },
    contentStyle: {
        background: 'none', // Removing any background to avoid extra white div
        border: 'none', // Removing any border to avoid extra div appearance
        padding: '0', // Removing padding to avoid extra spacing
    }
};

export default PopUp;
