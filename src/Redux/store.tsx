import { configureStore } from "@reduxjs/toolkit"; 
import empresaReducer from "./Reducers/EmpresaReducer";

const store = configureStore({
  reducer: {
    Empresa: empresaReducer,

  },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;