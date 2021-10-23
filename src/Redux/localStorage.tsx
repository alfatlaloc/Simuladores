import Empresa, { Producto } from "../Components/Classes/Empresa";
import { EmpresaState } from "./types";

// localStorage.js
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    console.log(serializedState);

    const Empresas = toEmpresaArray(serializedState);
    return Empresas;
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: EmpresaState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch {
    // ignore write errors
  }
};

export function toEmpresaArray(stringArray: string): EmpresaState {
  let jsonAux: EmpresaState = JSON.parse(stringArray);
  let auxState: EmpresaState = { empresas: Array<Empresa>() };
  jsonAux.empresas.forEach((empresa) => {
    let auxProductos = Array<Producto>();
    empresa.productos.forEach((producto) => {
      auxProductos.push(Producto.jsonToProducto(producto));
    });
    empresa.productos = auxProductos;
    auxState.empresas.push(Empresa.jsonToEmpresa(empresa));
  });

  console.log(auxState);
  return auxState;
}
