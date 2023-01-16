import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Claim.css"

const NewClaim = () =>
{ 
    const [values, setValues] = useState({
        policyNum: "",
        title: "",
        firstName: "",
        surName: "",
        email: "",
        phoneNo: ""
      });
    
      //useEffect(() => console.log(values), [values]);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
    
        setValues({
          ...values,
          [name]: value
        });
      };
    
    const AddClaim = (event) => {
        event.preventDefault();
        
        if((values.policyNum.length !==0) && (values.title.length !==0) && 
            (values.firstName.length !==0) && (values.surName.length !==0) &&
            (values.email.length !==0) && (values.phoneNo.length !==0) )
            {
                console.log(values); 
            }      
        else  
        {
            alert("All the values are required!");

        }
      };

    return(
      <form id="newClm">
            <div className="mainHeader"><h1> Register new claim</h1></div>
            
            <div className="container">
                
                <ul>
                    <li>
                        <label htmlFor="policyNum">Policy Number *</label>
                        <input name="policyNum" id="policyNum" type="text" placeholder="Policy Number" required={true} onChange={handleChange} value={values.policyNum}/>
                    </li>
                    <li>
                        <label htmlFor="title" required={false}>Title</label>
                        <select name="title" id="title" onChange={handleChange} value={values.title}>
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
                        <input name="firstName" id="firstName" type="text" placeholder="first name" required={true} onChange={handleChange} value={values.firstName}/>
                    </li>
                    <li>
                        <label htmlFor="surName">Surname *</label>
                        <input name="surName" id="surName" type="text" placeholder="surname" required={true} onChange={handleChange} value={values.surName}/>
                    </li>
                    <li>
                        <label htmlFor="email">Email *</label>
                        <input name="email" id="email" type="text" placeholder="email" required={true} onChange={handleChange} value={values.email}/>
                    </li>
                    <li>
                        <label htmlFor="phoneNo">Phone Number *</label>
                        <input name="phoneNo" id="phoneNo" type="text" placeholder="phone number" required={true} onChange={handleChange} value={values.phoneNo}/>
                    </li>
                    <button type="submit" className="regButton" onClick={AddClaim}>REGISTER</button>
                </ul>
            </div>
        </form> 
);
}

export default NewClaim;