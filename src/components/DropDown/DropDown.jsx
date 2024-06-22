import React, { useRef, useState } from 'react';
import styles from './DropDown.module.css'
import { useEffect } from 'react';
function DropdownMenu({isAlgoSelected ,setIsAlgoSelected ,handleAlgorithmSelect}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        // Click occurred outside of dropdown, so close it
        setIsOpen(false);
      }
    };

    // Add event listener when dropdown is open
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      // Remove event listener when dropdown is closed
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Clean up event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleAlgoClicked = (algorithm) => {
    handleAlgorithmSelect(algorithm);
    setIsAlgoSelected(true);
  };
  return (
    <div className="dropdown" ref={dropdownRef}>
      <button className={`btn dropdown-toggle ${styles[`my-drop-down-btn`]} `} type="button" onClick={toggleDropdown}>
        Algorithms
      </button>
      <div className={`dropdown-menu${isOpen ? ' show' : ''}`} aria-labelledby="dropdownMenuButton">
      <a onClick={() => handleAlgoClicked('Dijkstra')} className="dropdown-item" href="#">Dijkstra</a>
        <a onClick={() => handleAlgoClicked('A* Search')} className="dropdown-item disabled" aria-disabled="true" href="#">A Search Algorithm*</a>
        <a onClick={() => handleAlgoClicked('BFS')} className="dropdown-item disabled" aria-disabled="true" href="#">Breadth-First Search (BFS)</a>
        <a onClick={() => handleAlgoClicked('DFS')} className="dropdown-item disabled" aria-disabled="true" href="#">Depth-First Search (DFS)</a>
        <a onClick={() => handleAlgoClicked('Bellman-Ford')} type="button" className="dropdown-item disabled" aria-disabled="true" href="#" >Bellman-Ford</a>

      </div>
    </div>
  );
}

export default DropdownMenu;
