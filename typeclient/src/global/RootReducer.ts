import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { PostAPI } from "./PostAPI";

export const RootReducer = configureStore({
    reducer: {
        [PostAPI.reducerPath]: PostAPI.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware()
        .concat(PostAPI.middleware),
});

setupListeners(RootReducer.dispatch);




