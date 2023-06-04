import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 5
    },
    reducers: {
        incriment: (state) => state.value + 1,
        decriment: (state) => state.value - 1
    }

})

export const { incriment, decriment } = counterSlice.actions;
export default counterSlice.reducer;