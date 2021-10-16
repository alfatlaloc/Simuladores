import Empresa from "../Classes/Empresa";
export interface modalInterface {
  isShowing: boolean;
  toggle: () => void;
  Obj: Empresa;
  changeObject: (empresa : Empresa) => void;
}
