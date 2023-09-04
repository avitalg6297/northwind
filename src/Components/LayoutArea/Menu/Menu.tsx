import "./Menu.css";
import { NavLink } from "react-router-dom";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/employees">Employees</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contactus">Contact Us</NavLink>
            {/* <a href="/home">Home</a>
            <br/>
            <a href="/products">Products</a>
            <br/>
            <a href="/about">About</a> */}
        </div>
    );
}

export default Menu;
