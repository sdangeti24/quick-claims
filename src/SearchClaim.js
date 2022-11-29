import React from "react";
import "./Claim.css"

const SearchClaim = () =>
{ 
    return(
        <form id="searchClm">
        <div className="mainHeader"><h1>Search Claim</h1></div>
        
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
        </div>
    </form>
);
}

export default SearchClaim;