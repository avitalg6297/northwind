import { useEffect, useState } from "react";
import productsService from "../../../Services/ProductsService";
import "./OutOfStock.css";
import ProductModel from "../../../Models/ProductModel";
import ProductCard from "../ProductCard/ProductCard";
import notification from "../../../Utils/Notification";

function OutOfStock(): JSX.Element {

    const [products, setProducts] = useState<ProductModel[]>([]);

    useEffect(()=>{
        productsService.getOutOfStockProducts()
        .then(products => {setProducts(products)})
        .catch(err => notification.err(err) )
    },[]);
    return (
        <div className="OutOfStock">
			{products.map(p=><ProductCard key={p.id} product={p} />)}
        </div>
    );
}

export default OutOfStock;
