import styles from "./Header.module.css"
import DropDown from "../DropDown/DropDown"
import {useState} from 'react'
const Header = ({isAlgoSelected,setIsAlgoSelected,handleAlgorithmSelect}) => {

  return (
    <header
      className={`d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom ${
        styles[`my-header`]
      }`}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <svg className="bi me-2" width="40" height="32">
          <use xlink:href="#bootstrap"></use>
        </svg>
        <span className={`fs-4 ${styles[`header-name`]}`}>PathQuest</span>
      </a>
<DropDown isAlgoSelected={isAlgoSelected} setIsAlgoSelected={setIsAlgoSelected} handleAlgorithmSelect={handleAlgorithmSelect}></DropDown>
    </header>
  );
};

export default Header;
