import { combineReducers } from "@reduxjs/toolkit";
import registerReducer from "../feature/registerUserSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  storage,
  key: "event",
  whitelist: ["userData"],
};

const peristedLoginReducer = persistReducer(persistConfig, registerReducer);

export const rootReducer = combineReducers({
  registration: peristedLoginReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
