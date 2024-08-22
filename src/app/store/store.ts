import { combineReducers, configureStore, Store } from "@reduxjs/toolkit";
import movieApi from "./api/movieApi";
import moviesSlice from "./slices/moviesSlice";

const rootReducer = combineReducers({
   movies: moviesSlice,
   [movieApi.reducerPath]: movieApi.reducer,
});

const store: Store = configureStore({
   reducer: rootReducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
         .prepend(movieApi.middleware)
         .concat(movieApi.middleware),
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
