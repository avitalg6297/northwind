import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import EmployeeModel from "../Models/ProductModel";

//Products State is a ProductModel[]

//Reducers
function setAll(currentState: EmployeeModel[], action: PayloadAction<EmployeeModel[]>): EmployeeModel[] {
    const newState = [...action.payload]
    return newState
}

function addOne(currentState: EmployeeModel[], action: PayloadAction<EmployeeModel>): EmployeeModel[] {
    const newState = [...currentState];//Duplicate state
    newState.push(action.payload);//Perform change
    return newState; //return new state -  Will replace the current state with this one at the global state
}

function updateOne(currentState: EmployeeModel[], action: PayloadAction<EmployeeModel>): EmployeeModel[] {
    const newState = [...currentState];
    const index = newState.findIndex(p => p.id === action.payload.id);
    if (index >= 0) newState[index] = action.payload;
    return newState;
}

function deleteOne(currentState: EmployeeModel[], action: PayloadAction<number>): EmployeeModel[] {
    const newState = [...currentState];
    const index = newState.findIndex(p => p.id = action.payload);
    if (index >= 0) newState.splice(index, 1);
    return newState;
}

const employeeSlice = createSlice({
    name: "employees", // slice name
    initialState: [],
    reducers: { setAll, addOne, updateOne, deleteOne }
});

//Export all actions(each reducer will create its own action):
export const employeeActions = employeeSlice.actions;

//Export all reducers:
export const employeeReducer = employeeSlice.reducer;