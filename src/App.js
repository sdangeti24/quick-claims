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
  const [isPDShown, setIsPDShown] = useState(false);
  const [isChked, setIsChked] = useState();
  
  const newClmClick = event => {
    setIsNCShown(true);
    setIsSCShown(false);
    setIsOCShown(false);
    setIsPDShown(false);
  };

  const srchClmClick = event => {
    setIsNCShown(false);
    setIsSCShown(true);
    setIsOCShown(false);
    setIsPDShown(false);
  };

  const openClmClick = event => {
    setIsNCShown(false);
    setIsSCShown(false);
    setIsOCShown(true);
    setIsPDShown(false);
  };

  const showPolDetClick = (event) => {
    setIsNCShown(false);
     setIsPDShown(true);

    var chkd = document.getElementsByName("op");
    for(let i=0; i<chkd.length; i++)
    {
      if(chkd[i].checked) {
        //console.log(chkd[i].value);
        setIsChked(chkd[i].value);        
      }
    }
  }

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
      {(isOCShown || isSCShown) && <button id="1" onClick={showPolDetClick}>Show selected policy detail</button>}
      {isNCShown && (<NewClaim />) }
      {isSCShown && (<SearchClaim />)}
      {isOCShown && (<TransactionsTable />)}
      {isPDShown && <PolicyDetail name={isChked}/>}
    </div>
  );
}
export default App;