import { configureStore } from "@reduxjs/toolkit"
import cartReducer  from "./cartSlice"

const appStore = configureStore({
    reducer:{ // The big reducer
        cart: cartReducer, // The cart slice's reducer
    }
});

export default appStore