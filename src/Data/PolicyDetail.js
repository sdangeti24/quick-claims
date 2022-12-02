import { getAllPolicies } from "./DataFunctions";
import PolicesRow from "./PolicesRow";

export const PolicyDetail = (props) =>  {
    const policies = getAllPolicies();
    console.log(props.name);

    return(
        <form id="PolicyDetail" >
        <div className="mainHeader1"><h1>Policy Details</h1></div>
        <div className="container1">
         <table className="policyTable" id="policyTable">
            <thead>
                <tr>
                    <th>Policy Number</th>
                    <th>Title</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>eMail</th>
                    <th>Phone Number</th>
                </tr>
            </thead>
        <tbody>            
            {policies.map(
                            (policy, index) =>
                            {
                                //console.log(polNo);
                                //return (policy.policyno === polNo) &&
                                return (policy.policyno === props.name) && (<PolicesRow key={index} policyno={policy.policyno} title={policy.title}
                                frstnm = {policy.frstnm} lastnm ={policy.lastnm} email={policy.email} phno={policy.phno}  />)
                            }
            )
                        }

        </tbody>
    </table>
        </div>
    </form>

);

        }

