import * as types from "../actionTypes/actionTypes";


export default function empresaReducer(state = [], action : any) {
  switch (action.type) {
    case types.CREAR_EMPRESA:
      return [...state, { ...action.Botella }];

    default:
      return state;
  }
}