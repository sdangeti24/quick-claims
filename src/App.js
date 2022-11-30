import { useState } from 'react';
import './App.css';
import NewClaim from './NewClaim';
import "./Header.css"
import SearchClaim from './SearchClaim';
import TransactionsTable from './Data/TransactionsTable';
import { PolicyDetail } from './Data/PolicyDetail';



function App() {
  const [isNCShown, setIsNCShown] = useState(false);
  const [isSCShown, setIsSCShown] = useState(false);
  const [isOCShown, setIsOCShown] = useState(false);
  // const [isPDShown, setIsPDShown] = useState(false);
  const newClmClick = event => {
    setIsNCShown(true);
    setIsSCShown(false);
    setIsOCShown(false);
  };
  const srchClmClick = event => {
    setIsNCShown(false);
    setIsSCShown(true);
    setIsOCShown(false);
  };
  const openClmClick = event => {
    setIsNCShown(false);
    setIsSCShown(false);
    setIsOCShown(true);
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
                <span className="spanOpenClaim" onClick={openClmClick}>OPEN CLAIM</span>
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
      {isOCShown && (<TransactionsTable />)}
      {/* {isPDShown && (<PolicyDetail />) } */}
      {/* <PolicyDetail /> */}
    </div>
  );
}

export default App;
