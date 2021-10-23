import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./Styles/main.sass";
import "bootstrap/dist/css/bootstrap.min.css";
import { DispatchType, empresaAction, EmpresaState } from "./Redux/types";
import { createStore, applyMiddleware, Store } from "redux";
import empresaReducer from "./Redux/Reducers/EmpresaReducer";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { loadState, saveState } from "./Redux/localStorage";

const persistedState = loadState();

const store: Store<EmpresaState, empresaAction> & {
  dispatch: DispatchType;
} = createStore(empresaReducer, persistedState, applyMiddleware(thunk));

store.subscribe(() => {
  saveState(store.getState());
});


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
