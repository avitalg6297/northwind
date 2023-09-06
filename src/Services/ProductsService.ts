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

    public async addProduct(product: ProductModel) : Promise<void>{
        const options ={
            headers:{"content-Type": "multipart/form-data"}
        };
        const response  = await axios.post<ProductModel>(appConfig.productUrl, product, options);
        const addProduct = response.data;
        console.log(addProduct);
    }

    public async deleteProduct(id:number): Promise<void>{
        await axios.delete(appConfig.productUrl+ id)
    }

}

const productsService = new ProductsService();

export default productsService