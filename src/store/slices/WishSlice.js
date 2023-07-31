import { createSlice } from "@reduxjs/toolkit";


// Define an initial state
const initialState = {
    wishItems:[]
}

// Create a slice
const wishSlice = createSlice({
    name: 'wish',
    initialState,
    reducers:{
        addToWishlist(state, action){
            state.wishItems.push(action.payload)
        },
        initializeWishlist(state, action){
            // Initialize the cart
            state.wishItems = action.payload || []
        },
        removeFromWishlist(state, action){
            state.wishItems.pop(action.payload)
        },
        clearWishlist(state, action){
            state.wishItems = []
        }
    },
})

// Export the actions
export const {addToWishlist, removeFromWishlist, clearWishlist, initializeWishlist} = wishSlice.actions

// Export the slice.reducer as default
export default wishSlice.reducer;