import axios from "axios";
import ProductModel from "../Models/ProductModel";
import appConfig from "../Utils/AppConfig";

class ProductsService {

    public async getOneProduct(id:number): Promise<ProductModel>{
        const response = await axios.get<ProductModel>(appConfig.productUrl+ id)
        const product = response.data;
        return product;
    }

    public async getAllProducts(): Promise<ProductModel[]>{
        const response = await axios.get<ProductModel[]>(appConfig.productUrl)
        const products = response.data;
        return products;
    }

}

const productsService = new ProductsService();

export default productsService