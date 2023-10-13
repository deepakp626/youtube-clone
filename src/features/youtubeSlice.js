import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  suggestVideoTitle: null,
  searchData: "bharat",
  sideNav_toggled: false,
  token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
};

export const youtubeSlice = createSlice({
  name: "youtubeAPI",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.suggestVideoTitle = action.payload;
    },
    setSearch: (state, action) => {
      // console.log(action.payload)
      state.searchData = action.payload;
    },
    toggleSideNav: (state) => {
      state.sideNav_toggled = !state.sideNav_toggled;
    },
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token",action.payload)
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCategory, setSearch, toggleSideNav, setToken } =
  youtubeSlice.actions;

export default youtubeSlice.reducer;
