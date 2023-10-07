import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import { youtubeApi } from "../services/fetchYoutubeData";
import youtubeReducer from '../features/youtubeSlice'

export const store = configureStore({
  reducer: {
    youtube:youtubeReducer,
    [youtubeApi.reducerPath]: youtubeApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(youtubeApi.middleware),
});

setupListeners(store.dispatch);
