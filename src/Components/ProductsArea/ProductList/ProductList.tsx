import { useEffect, useState } from "react";
import "./ProductList.css";
import productsService from "../../../Services/ProductsService";
import ProductModel from "../../../Models/ProductModel";
import ProductCard from "../../ProductArea/ProductCard/ProductCard";
import useTitle from "../../../Utils/UseTitle";
import Spinner from "../../SharedArea/Spinner/Spinner";
import { useSelector } from "react-redux";
import { AppState } from "../../../Redux/AppState";
import TotalProducts from "../../ProductArea/TotalProducts/TotalProducts";

function ProductList(): JSX.Element {
    useTitle("Products");

    //if  there is a change in the component will be refreshed and updates(it registered for updates)
   const allProducts = useSelector((appState:AppState)=>appState.products);

    useEffect(() => {
        productsService.getAllProducts().catch(err => alert(err.message))
    }, [])
    return (
        <div className="ProductList">

            {allProducts.length === 0 && <Spinner/>}
            {/* Sending data to props */}
           {allProducts.map(p=> <ProductCard key={p.id} product={p}/>)}
        </div>
    );
}

export default ProductList;
