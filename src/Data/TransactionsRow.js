const TransactionsRow = (props) => {
    return (      
        <tr>
            <td>{props.claimnum}</td>
            <td>{props.amount}</td>
            <td>{props.date}</td>
            <td>{props.policyno}</td>
            <td>{props.status}</td>
            <td><input type="radio" name="op" value={props.policyno}></input></td>
        </tr>
    )
}
export default TransactionsRow;