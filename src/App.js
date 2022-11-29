import { useState } from 'react';
import './App.css';
import NewClaim from './NewClaim';
import "./Header.css"
import SearchClaim from './SearchClaim';


function App() {
  const [isNCShown, setIsNCShown] = useState(false);
  const [isSCShown, setIsSCShown] = useState(false);
  const newClmClick = event => {
    setIsNCShown(true);
    setIsSCShown(false);
  };
  const srchClmClick = event => {
    setIsNCShown(false);
    setIsSCShown(true);
  };
  return (
    <div className="App">
      <div className="header">
            <div className="headerTitle">
                <h2 className="h1Title">Quick Claims </h2>                
            </div>
            <div className="headerNewClaim">
                <span className="spanNewClaim" onClick={newClmClick}>NEW CLAIM</span>
            </div>
            <div className="headerOpenClaim">
                <span className="spanOpenClaim">OPEN CLAIM</span>
            </div>
            <div className="headerSearchClaims">
                <span className="spanSearchClaims" onClick={srchClmClick}>SEARCH CLAIMS</span>
            </div>
            <div className="headerArchive">
                <span className="spanArchive">ARCHIVE</span>
            </div>
        </div>
      {isNCShown && (<NewClaim />) }
      {isSCShown && (<SearchClaim />)}
    </div>
  );
}

export default App;
