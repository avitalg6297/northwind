import ProductModel from "../../../Models/ProductModel";
import "./ProductCard.css";


interface ProductCardProps {
    product: ProductModel
}

function ProductCard(props: ProductCardProps): JSX.Element {
    return (
        <div className="ProductCard">
            <div>
                {props.product.name}
                <br />
                Price:{props.product.price}
                <br />
                Stock:{props.product.stock}
            </div>
            <div>
                <img src={props.product.imageUrl} />
            </div>
        </div>
    );
}

export default ProductCard;
