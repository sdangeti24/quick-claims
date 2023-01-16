import React from "react";
import "./Claim.css"
import './Data/TransactionsSearch.css';
import { getAllClaims } from "./Data/DataFunctions";
import TransactionsRow from "./Data/TransactionsRow";
import { useState } from "react";
import { PolicyDetail } from "./Data/PolicyDetail";



const SearchClaim = () =>
{ 
    const [isChked, setIsChked] = useState();

const showPolDetClick = () => {
    var chkd = document.getElementsByName("op");
    for(let i=0; i<chkd.length; i++)
    {
      if(chkd[i].checked) {
        //console.log(chkd[i].value);
        setIsChked(chkd[i].value);        
      }
    }
  }
    const claims = getAllClaims();
    return(
        <form id="searchClm">
        
        <PolicyDetail name={isChked}/>
        <div className="mainHeader"><h1>Search Claim</h1></div>
        <button className= "bt1" id="1" onClick={showPolDetClick}>Show selected policy detail</button>
        
        <div className="container">
            
            <ul>
                <li>
                    <label className="labcon">Enter a policy number or part of the customer's surname</label>                        
                </li>
                <li><p></p></li>                    
                <li>
                    <label htmlFor="polNum">Policy Number *</label>
                    <input id="polNum" type="text" placeholder="policy number" required={true} />
                </li>
                <li>
                    <label htmlFor="surNam">Surname *</label>
                    <input id="surNam" type="text" placeholder="surname" required={true} />
                </li>
                <button type="button" className="searchButton">SEARCH</button>
            </ul>
            <table className="transactionTable" id="transactionTable">
        <thead>
            <tr>
                <th>Claim Number</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Policy Number</th>
                <th>Status</th>
                <th>Policy Details</th>
            </tr>
        </thead>
        <tbody>
            {claims.map(
                            (claim, index) => 
                            {
                                return <TransactionsRow key={index} claimnum={claim.claimnum} date={claim.date}
                                amount = {claim.amount} policyno ={claim.policyno} status={claim.status}   />
                            }
            )
                        }
        </tbody>
    </table>
        </div>
    </form>
);
}

export default SearchClaim;