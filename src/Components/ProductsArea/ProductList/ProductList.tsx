import { useEffect, useState } from "react";
import "./ProductList.css";
import productsService from "../../../Services/ProductsService";
import ProductModel from "../../../Models/ProductModel";
import ProductCard from "../../ProductArea/ProductCard/ProductCard";
import useTitle from "../../../Utils/UseTitle";

function ProductList(): JSX.Element {
    useTitle("Products");

    const[allProducts, setAllProducts] = useState<ProductModel[]>([]);

    useEffect(() => {
        productsService.getAllProducts()
            .then(products =>setAllProducts(products))
            .catch(err => alert(err.message))
    }, [])
    return (
        <div className="ProductList">
            {/* Sending data to props */}
           {allProducts.map(p=> <ProductCard key={p.id} product={p}/>)}
        </div>
    );
}

export default ProductList;
