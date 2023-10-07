import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentVideoCategory: null,
  searchData: "bharat",
};

export const youtubeSlice = createSlice({
  name: "youtubeAPI",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.currentVideoCategory = action.payload;
    },
    setSearch: (state, action) => {
       state.searchData = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setCategory ,setSearch} = youtubeSlice.actions;

export default youtubeSlice.reducer;
