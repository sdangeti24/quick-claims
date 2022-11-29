import React from "react";
import "./Claim.css"

const NewClaim = () =>
{ 
    return(
      <form id="newClm">
            <div className="mainHeader"><h1> Register new claim</h1></div>
            
            <div className="container">
                
                <ul>
                    <li>
                        <label htmlFor="policyNum">Policy Number *</label>
                        <input id="policyNum" type="text" placeholder="Policy Number" required={true} />
                    </li>
                    <li>
                        <label htmlFor="title" required={false}>Title</label>
                        <select id="title" >
                            <option value="" selected disabled hidden>Select Title</option>
                            <option value="mr">Mr</option>
                            <option value="mrs">Mrs</option>
                            <option value="ms">Ms</option>
                            <option value="miss">Miss</option>
                            <option value="dr">Dr</option>
                        </select>                            
                    </li>
                    <li>
                        <label htmlFor="firstName">First Name *</label>
                        <input id="firstName" type="text" placeholder="first name" required={true} />
                    </li>
                    <li>
                        <label htmlFor="surName">Surname *</label>
                        <input id="surName" type="text" placeholder="surname" required={true} />
                    </li>
                    <li>
                        <label htmlFor="email">Email *</label>
                        <input id="email" type="text" placeholder="email" required={true} />
                    </li>
                    <li>
                        <label htmlFor="phoneNo">Phone Number *</label>
                        <input id="phoneNo" type="text" placeholder="phone number" required={true} />
                    </li>
                    <button type="button" className="regButton">REGISTER</button>
                </ul>
            </div>
        </form> 
);
}

export default NewClaim;