import { createSlice } from '@reduxjs/toolkit';


// Define an initial state
const initialState = {
    orderItems: [], // Tracks history of order
    paymentStatus: 0, // Tracks if the current order has been placed
    orderTotalQuantity: 0,
    orderTotalAmount: 0,
};

// Create a cartSlice
const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        addToOrder(state, action) {
            if(action.payload){
                // Change the initial state and add items from payload
                state.orderItems.push(action.payload);
            }
            else{
                // Change the initial state and add items from payload
                state.orderItems = []
            }
            
        },
        initializeOrder(state, action){
            // Initialize the cart
            state.orderItems = action.payload || [];
        },
        removeFromOrder(state, action) {
            
        },
        clearOrder(state, action){
            state.orderItems = []
        },
        paymentUpdate(state, action){
            state.paymentStatus = action.payload
        }
    },
});

export const {addToOrder, removeFromOrder, clearOrder, initializeOrder, paymentUpdate} = orderSlice.actions;
export default orderSlice.reducer;