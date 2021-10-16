import Empresa from "../../Components/Classes/Empresa";
import * as types from "../actionTypes";
import { empresaAction, EmpresaState } from "../types";

const initialState: EmpresaState = { empresas: [] };

const empresaReducer = (
  state: EmpresaState = initialState,
  action: empresaAction
): EmpresaState => {
  switch (action.type) {
    case types.AGREGAR_EMPRESA:
      let name = state.empresas.find(
        (empresa) => empresa.nombre === action.empresa.nombre
      );
      if (!name)
        return { ...state, empresas: state.empresas.concat(action.empresa) };
      return state;
    case types.ELIMINAR_EMPRESA:
      const empresasFiltradas: Empresa[] = state.empresas.filter(
        (empresa) => empresa.nombre !== action.empresa.nombre
      );
      return { ...state, empresas: empresasFiltradas };

    case types.MODIFICAR_EMPRESA:
      const modif: Empresa[] = state.empresas.map((empresa) => {
        if (empresa.nombre === action.empresa.nombre) return action.empresa;
        return empresa;
      });
      return { ...state, empresas: modif };

    default:
      return state;
  }
};

export default empresaReducer;
