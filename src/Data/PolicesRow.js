//import { policyDetail } from "./PolicyDetail";

const PolicesRow = (props) => {

    return (
        <tr>
            <td>{props.policyno}</td>
            <td>{props.title}</td>
            <td>{props.frstnm}</td>
            <td>{props.lastnm}</td>
            <td>{props.email}</td>
            <td>{props.phno}</td>
        </tr>
    )
}


export default PolicesRow;