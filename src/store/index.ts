import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import cartSlice from "./slices/cart/cartSlice";

const reducers = combineReducers({ cart: cartSlice });

const config = {
  key: "root",
  storage,
};

const reducer = persistReducer(config, reducers);

const store = configureStore({
  reducer: reducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export let persistor = persistStore(store);

export default store;
