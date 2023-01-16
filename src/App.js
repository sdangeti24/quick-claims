import { useState } from 'react';
import './App.css';
import NewClaim from './NewClaim';
import "./Header.css"
import SearchClaim from './SearchClaim';
import TransactionsTable from './Data/TransactionsTable';
import { PolicyDetail } from './Data/PolicyDetail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Menu from './Menu';
import { UserContext } from './context/UserContext';

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
  // const [searchTerm, setSearchTerm] = useState("");
  //const [currentUser, setCurrentUser] = useState({ name : "", role : ""});
return (
  <BrowserRouter>
  <Menu />
  <Routes>
    <Route path="/add" element ={<NewClaim />} onClick={newClmClick} />
    <Route path="/find" element ={<SearchClaim />} onClick={srchClmClick} />
    <Route path="/open" element ={<TransactionsTable />} onClick={openClmClick} />
    <Route path="/" element = { <h1>Welcome to Quick Claims</h1>}/>
    <Route path="*" element = { <><h1>Sorry - that page doesn't exist</h1><p>Page not found</p></>}/>

  </Routes>
  {(isOCShown || isSCShown) && <button id="1" onClick={showPolDetClick}>Show selected policy detail</button>}
        {isPDShown && <PolicyDetail name={isChked}/>}
  </BrowserRouter>

)
  // return (
  //   <div className="App">
  //     <div className="header">
  //           <div className="headerTitle">
  //               <h2 className="h1Title">Quick Claims </h2>                
  //           </div>
  //           <div className="headerNewClaim">
  //               <span className="spanNewClaim" onClick={newClmClick}>NEW CLAIM</span>
  //           </div>
  //           <div className="headerOpenClaim">
  //               <span className="spanOpenClaim" onClick={openClmClick}>OPEN CLAIM</span>
  //           </div>
  //           <div className="headerSearchClaims">
  //               <span className="spanSearchClaims" onClick={srchClmClick}>SEARCH CLAIMS</span>
  //           </div>
  //           <div className="headerArchive">
  //               <span className="spanArchive">ARCHIVE</span>
  //           </div>
  //       </div>
  //     {(isOCShown || isSCShown) && <button id="1" onClick={showPolDetClick}>Show selected policy detail</button>}
  //     {isNCShown && (<NewClaim />) }
  //     {isSCShown && (<SearchClaim />)}
  //     {isOCShown && (<TransactionsTable />)}
  //     {isPDShown && <PolicyDetail name={isChked}/>}
  //   </div>
  // );
}
export default App;
