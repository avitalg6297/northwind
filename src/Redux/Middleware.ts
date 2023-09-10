import { Dispatch, PayloadAction } from "@reduxjs/toolkit";


function logActions(store: any) {
    return function (next: Dispatch) {
        return function (action: PayloadAction) {
            console.log(`Before: Action =  ${action.type},  state=`);

            console.log(store.getState())
            next(action); // if not invoked the dispatch won't be done
            console.log(`After: Action =  ${action.type},  state=`);
            console.log(store.getState())
        }
    }
}

export default logActions