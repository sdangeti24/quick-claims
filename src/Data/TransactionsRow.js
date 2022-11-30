import { PolicyDetail } from "./PolicyDetail";

const TransactionsRow = (props) => {

    return (
        <tr>
            <td>{props.claimnum}</td>
            <td>{props.amount}</td>
            <td>{props.date}</td>
            <td>{props.policyno}</td>
            <td>{props.status}</td>
            <button type="button" id={"props.policyno"} onClick={() => { PolicyDetail(props.policyno) }}>{props.policyno}</button>
        </tr>
    )
}



export default TransactionsRow;