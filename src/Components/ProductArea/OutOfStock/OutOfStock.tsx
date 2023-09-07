import { useEffect, useState } from "react";
import productsService from "../../../Services/ProductsService";
import "./OutOfStock.css";
import ProductModel from "../../../Models/ProductModel";
import ProductCard from "../ProductCard/ProductCard";

function OutOfStock(): JSX.Element {

    const [products, setProducts] = useState<ProductModel[]>([]);

    useEffect(()=>{
        productsService.getOutOfStockProducts()
        .then(products => {setProducts(products)})
        .catch(err => alert(err.message))
    },[]);
    return (
        <div className="OutOfStock">
			{products.map(p=><ProductCard key={p.id} product={p} />)}
        </div>
    );
}

export default OutOfStock;
