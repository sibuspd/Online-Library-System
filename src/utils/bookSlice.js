import { createSlice } from "@reduxjs/toolkit";
import { Books as initialBooks } from "../utils/bookData"
// CREATING THE SLICE FOR BOOK LIST
const bookSlice = createSlice({
    name: "bookRepo",
    initialState: {
        repo: initialBooks // Populates empty array with existing Bookdata
    },
    reducers: {
        add: ( state, action ) => { // ACTION DEFINITION FOR ADDING A BOOK
            state.repo.push(action.payload);
            console.log(state.repo);
        },
        remove: ( state , action) => { // ACTION DEFINITION FOR REMOVING A BOOK
            state.repo = state.repo.filter(book => book.isbn !== action.payload);
        } 
    }
});

export const {add, remove} = bookSlice.actions; // Exporting the Actions of slice
export default bookSlice.reducer;

