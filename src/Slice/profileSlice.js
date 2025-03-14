import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // user:null,
    loading: false,
    // token:null,
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null

}

const userSlice = createSlice({
    name: "profile",
    initialState: initialState,
    reducers: {
        setUser(state, value) {
            state.user = value.payload;
        },
        setLoading(state, value) {
            state.loading = value.payload
        }
    }
});
export const { setUser, setLoading } = userSlice.actions;
export default userSlice.reducer