import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import ProductModel from "../Models/ProductModel";

//Products State is a ProductModel[]

//Reducers
function setAll(currentState: ProductModel[], action: PayloadAction<ProductModel[]>): ProductModel[] {
    const newState = [...action.payload]
    return newState
}

function addOne(currentState: ProductModel[], action: PayloadAction<ProductModel>): ProductModel[] {
    const newState = [...currentState];//Duplicate state
    newState.push(action.payload);//Perform change
    return newState; //return new state -  Will replace the current state with this one at the global state
}

function updateOne(currentState: ProductModel[], action: PayloadAction<ProductModel>): ProductModel[] {
    const newState = [...currentState];
    const index = newState.findIndex(p => p.id === action.payload.id);
    if (index >= 0) newState[index] = action.payload;
    return newState;
}

function deleteOne(currentState: ProductModel[], action: PayloadAction<number>): ProductModel[] {
    const newState = [...currentState];
    const index = newState.findIndex(p => p.id = action.payload);
    if (index >= 0) newState.splice(index, 1);
    return newState;
}

const productSlice = createSlice({
    name: "products", // slice name
    initialState: [],
    reducers: { setAll, addOne, updateOne, deleteOne }
});

//Export all actions(each reducer will create its own action):
export const productActions = productSlice.actions;

//Export all reducers:
export const productReducer = productSlice.reducer;