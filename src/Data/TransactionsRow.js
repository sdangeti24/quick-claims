const TransactionsRow = (props) => {

    return (
        <tr>
            <td>{props.claimnum}</td>
            <td>{props.amount}</td>
            <td>{props.date}</td>
            <td>{props.policyno}</td>
            <td>{props.status}</td>
            <button>{props.policyno}</button>
        </tr>
    )
}

export default TransactionsRow;