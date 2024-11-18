import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "Cart", // Name of the Slice
    initialState: {
        items: [] // Initially an empty array
    },
    reducers:{
        addItem: ( state, action ) => {
            state.items.push(action.payload); // Pushes data into items array
            console.log(state.items);
        },
        removeItem: ( state, action ) => {
            let index = state.items.findIndex(item => item.isbn === action.payload.isbn);
            console.log(index);      
            if(index !=-1)
            state.items.splice(index, 1); // Removes the item from the array
            else console.log("This item is not added to the Reading List");
        },
        clearCart: ( state ) => {
            state.items.length = 0; // Empties the items array
        } 
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions
export default cartSlice.reducer