import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import postReducer from "./slices/post";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, postReducer);

const store = configureStore({
  reducer: {
    post: persistedReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

const persistor = persistStore(store);

export { persistor, store };
