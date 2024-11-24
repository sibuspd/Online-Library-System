import { configureStore } from "@reduxjs/toolkit"
import cartReducer  from "./cartSlice"
import bookRepoReducer from "./bookSlice"

// THE REDUX STORE TO HAVE 2 SLICES - "Cart for Reading List" and "bookRepo for Book List"

const appStore = configureStore({
    reducer:{ // The big reducer
        cart: cartReducer, // The cart slice's reducer
        bookRepo: bookRepoReducer // The book slice's reducer
    }
});

export default appStore