import { useSelector } from "react-redux/es/exports";
import TotalProducts from "../../ProductArea/TotalProducts/TotalProducts";
import "./Menu.css";
import { NavLink } from "react-router-dom";
import { AppState } from "../../../Redux/AppState";

function Menu(): JSX.Element {

    const user = useSelector((appState: AppState) => appState.user);

    return (
       
        <div className="Menu">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/products" end>Products</NavLink>
            <NavLink to="/products/new">Add Product</NavLink>
            {user && <NavLink to="/products/top3">Top 3 Products</NavLink>}
            {user?.role === 'Admin' && <NavLink to="/products/out-of-stock">Out Of Stock</NavLink> }
            <NavLink to="/employees">Employees</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contactus">Contact Us</NavLink>
            {/* <a href="/home">Home</a>
            <br/>
            <a href="/products">Products</a>
            <br/>
            <a href="/about">About</a> */}

            <TotalProducts/>
        </div>
    );
}

export default Menu;
