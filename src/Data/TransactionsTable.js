import TransactionsRow from "./TransactionsRow";
import './Transactions.css';
// import { useEffect, useState } from "react";
import { getAllClaims } from "./DataFunctions";

const TransactionsTable = () => {

    const claims = getAllClaims();
    console.log(claims);


return (
    <div>
        <div className="mainHeader"><h1> Open Claims</h1></div>
    <table className="transactionsTable" id="transactionsTable">
        <thead>
            <tr>
                <th>Claim Number</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Policy Number</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            {claims.map(
                            (claim, index) => 
                            {
                                return claim.status === "open" && <TransactionsRow key={index} claimnum={claim.claimnum} date={claim.date}
                                amount = {claim.amount} policyno ={claim.policyno} status={claim.status}   />
                            }
            )
                        }
        </tbody>
    </table>
  </div>
)
}

export default TransactionsTable;