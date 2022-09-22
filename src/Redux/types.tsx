import Empresa from "../Components/Classes/Empresa";
/** Estado de la Store de REDUX */
export type EmpresaState = {
  empresas: Empresa[];
};
/** Tipo de las acciones que recibe el reducer */
export type empresaAction = {
  type: string;
  empresa: Empresa;
};

export type DispatchType = (args: empresaAction) => empresaAction;
