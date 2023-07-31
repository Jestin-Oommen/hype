import {createSlice} from "@reduxjs/toolkit";

const initialState = {}

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser(state, action) {
            state.users = action.payload;
        },
        clearUser(state, actions){
            state.users = {}
        }
    },
});

export const {addUser, clearUser} = userSlice.actions;
export default userSlice.reducer;