import About from "../../AboutArea/About/About";
import Home from "../../HomeArea/Home/Home";
import ProductList from "../../ProductsArea/ProductList/ProductList";
import "./Routing.css";
import { Route, Routes } from "react-router-dom"
import { Navigate } from "react-router-dom";
import Page404 from "../Page404/Page404";
import ContactUs from "../../AboutArea/ContactUs/ContactUs";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/products" element={<ProductList/>}/>
                <Route path="/about" element={<About/>}/>
                {/* <Route path="/" element={<Home/>}/> */}
                <Route path="*" element={<Page404/>}/>
                <Route path="/" element={<Navigate to="/home" />}/>
                <Route path="/contactus" element={<ContactUs/>}/>
            </Routes>
        </div>
    );
}

export default Routing;
