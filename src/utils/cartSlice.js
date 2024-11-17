import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "Cart", // Name of the Slice
    initialState: {
        items: [] // Initially an empty array
    },
    reducers:{
        addItem: ( state, action ) => {
            state.push(action.payload); // Pushes data into items array
        },
        removeItem: ( state ) => {
            state.items.pop(); // Removes the recent addition
        },
        clearCart: ( state ) => {
            state.items.length = 0; // Empties the items array
        } 
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions
export default cartSlice.reducer