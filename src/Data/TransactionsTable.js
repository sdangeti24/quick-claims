import TransactionsRow from "./TransactionsRow";
import './Transactions.css';
// import { useEffect, useState } from "react";
import { getAllClaims } from "./DataFunctions";
import { PolicyDetail } from "./PolicyDetail";
import { useState } from "react";

const TransactionsTable = () => {

    const claims = getAllClaims();
    //console.log(claims);
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

return (
    <div>
         <PolicyDetail name={isChked}/>
         <div className="mainHeader"><h1> Open Claims</h1></div>
         <button className= "bt1" id="1" onClick={showPolDetClick}>Show selected policy detail</button>
    <table className="transactionsTable" id="transactionsTable">
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
                                return claim.status === "open" && (<TransactionsRow key={index} claimnum={claim.claimnum} date={claim.date}
                                amount = {claim.amount} policyno ={claim.policyno} status={claim.status} />)
                            }
                        
            ) } 
                        
            
        </tbody>
    </table>
  </div>
)
}

export default TransactionsTable;