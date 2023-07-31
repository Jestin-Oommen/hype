import { createSlice } from '@reduxjs/toolkit';


// Define an initial state
const initialState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

// Create a cartSlice
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            if(action.payload){
                // Change the initial state and add items from payload
                state.cartItems.push(action.payload);
            }
            else{
                // Change the initial state and add items from payload
                state.cartItems = []
            }
            
        },
        initializeCart(state, action){
            // Initialize the cart
            state.cartItems = action.payload || [];
        },
        removeFromCart(state, action) {
            
        },
        clearCart(state, action){
            state.cartItems = []
        }
    },
});

export const {addToCart, removeFromCart, clearCart, initializeCart} = cartSlice.actions;
export default cartSlice.reducer;