import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  display: [],
};

export const atcSlice = createSlice({
  name: "Add To Cart",
  initialState,
  reducers: {
    AddP:(state,actions)=>{
      state.display.push(actions.payload)
    },
    delProduct: (state, actions) => {
      state.display.splice(actions.payload, 1);
    },
  },
});

export const { AddP, delProduct } = atcSlice.actions;

export default atcSlice.reducer;
