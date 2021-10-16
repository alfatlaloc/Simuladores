import Empresa from "../../Components/Classes/Empresa";
import * as actionTypes from "../actionTypes";
import { DispatchType, empresaAction } from "../types";

export function agregarEmpresa(empresa: Empresa) {
  const action: empresaAction = {
    type: actionTypes.AGREGAR_EMPRESA,
    empresa,
  };
  return (dispatch: DispatchType) => dispatch(action);
}

export function actualizarEmpresa(empresa: Empresa) {
  const action: empresaAction = {
    type: actionTypes.MODIFICAR_EMPRESA,
    empresa,
  };
  return (dispatch: DispatchType) => dispatch(action);
}

export function eliminarEmpresa(empresa: Empresa) {
  const action: empresaAction = {
    type: actionTypes.ELIMINAR_EMPRESA,
    empresa,
  };
  return (dispatch: DispatchType) => dispatch(action);
}
