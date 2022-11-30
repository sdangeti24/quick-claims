import { getAllPolicies } from "./DataFunctions";
import PolicesRow from "./PolicesRow";


export const PolicyDetail = (pno) => {
    const policies = getAllPolicies();
    policies.map(
        (policy) => 
        {
            if (pno===policy.policyno) {
            console.log(`Policy No - ${policy.policyno}, Title - ${policy.title}, First Name - ${policy.frstnm}, Sur Name - ${policy.frstnm}, eMail - ${policy.email}, Phone Num - ${policy.phno}`)
            alert("Policy Number \t" + policy.policyno + "\nTitle \t" + policy.title + "\nFirst Name \t" + policy.frstnm + "\nSurName \t" + policy.lastnm + "\n eMail \t" + policy.email + "\nPhone Number \t" + policy.phno);
        }
            //return(0);
        }
)
    
    
    // return(
    //     <form id="PolicyDetail" >
    //     <div className="mainHeader"><h1>Policy Details</h1></div>
    //     <div className="container1">
    //      <table className="policyTable" id="policyTable">
    //         <thead>
    //             <tr>
    //                 <th>Policy Number</th>
    //                 <th>Title</th>
    //                 <th>First Name</th>
    //                 <th>Last Name</th>
    //                 <th>eMail</th>
    //                 <th>Phone Number</th>
    //             </tr>
    //         </thead>
    //     <tbody>
            
    //         {policies.map(
    //                         (policy, index) => 
    //                         {
                                
    //                             return (pno===policy.policyno) && (<PolicesRow key={index} policyno={policy.policyno} title={policy.title}
    //                             frstnm = {policy.frstnm} lastnm ={policy.lastnm} email={policy.email} phno={policy.phno}  />)
    //                         }
    //         )
    //                     }
    //     </tbody>
    // </table>
    //     </div>
    // </form>
// );
}
