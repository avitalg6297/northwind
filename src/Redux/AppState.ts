import { configureStore } from "@reduxjs/toolkit";
import ProductModel from "../Models/ProductModel";
import { productReducer } from "./ProductsSlice";
import UserModel from "../Models/UserModel";
import { authReducer } from "./AuthSlice";
import EmployeeModel from "../Models/EmployeeModel";
import { employeeReducer } from "./EmployeesSlice";

export type AppState ={
    products:ProductModel[];
    user: UserModel;
    employee: EmployeeModel[];
};

export const appStore = configureStore<AppState>({
    reducer: {
        products:productReducer,
        user: authReducer,
        employee: employeeReducer
    }
})