import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { KEY_CHART, KEY_COMMON } from "./constants";
import { commonSlice, chartSlice } from "./slices";

const persistCommon = {
  key: KEY_COMMON,
  storage
};

const persistedReducer = persistReducer(persistCommon, commonSlice);
const reducer = {
  [KEY_COMMON]: persistedReducer,
  [KEY_CHART]: chartSlice
};
export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
