import { useContext } from "react"
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "./context/UserContext";

const Menu = () => {
    return (
        <div className="pageHeader">
            <h1><Link to="/">Quick Claims Application</Link></h1>
            <ul className="nav">
                <li><NavLink to="/add">Add a New Claim</NavLink></li>
                <li><Link to="/find">Find a Claim</Link></li>
                <li><Link to="/open">Open Claims</Link></li>
           </ul>
        </div>
    )
}

export default Menu;