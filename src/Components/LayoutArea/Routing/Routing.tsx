import Home from "../../HomeArea/Home/Home";
import ProductList from "../../ProductsArea/ProductList/ProductList";
import "./Routing.css";
import { Route, Routes } from "react-router-dom"
import { Navigate } from "react-router-dom";
import Page404 from "../Page404/Page404";
import ContactUs from "../../AboutArea/ContactUs/ContactUs";
import ProductDetails from "../../ProductArea/ProductDetails/ProductDetails";
import EmployeeList from "../../EmployeesArea/EmployeeList/EmployeeList";
import { Suspense, lazy } from "react";
import Spinner from "../../SharedArea/Spinner/Spinner";
import AddProduct from "../../ProductArea/AddProduct/AddProduct";
import EditProduct from "../../ProductsArea/EditProduct/EditProduct";
import Register from "../../AuthArea/Register/Register";
import Login from "../../AuthArea/Login/Login";
import Top3 from "../../ProductArea/Top3/Top3";
import OutOfStock from "../../ProductArea/OutOfStock/OutOfStock";

function delay() {
    return new Promise<void>(resolve => {
        setTimeout(() => {
            resolve();
        }, 3000);
    });
}

const LazyAbout = lazy(async () => {
    await delay();
    return import("../../AboutArea/About/About")
});

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>

                {/* Eager loading */}
                <Route path="/register" element={<Register />}></Route>
                <Route path="/login" element={<Login />}/>
                <Route path="/home" element={<Home />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/employees" element={<EmployeeList />} />
                <Route path="/products/details/:id" element={<ProductDetails />} />
                <Route path="/products/edit/:id" element={<EditProduct />} />
                <Route path="/products/new" element={<AddProduct />} />
                <Route path="/products/top3" element={<Top3 />} />
                <Route path="/products/out-of-stock" element={<OutOfStock />} />

                {/* lazy loading */}
                <Route path="/about" element={
                    <Suspense fallback={<Spinner />}>
                        <LazyAbout />
                    </Suspense>
                } />


                <Route path="*" element={<Page404 />} />
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/contactus" element={<ContactUs />} />
            </Routes>
        </div>
    );
}

export default Routing;
