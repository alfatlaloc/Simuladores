import React from "react";
import ReactDOM from "react-dom";
import { modalInterface } from "../Interfaces/Components";
import empresaForm from "./agregarEmpresaForm";
import '../../Styles/Modal.sass';

const Modal: React.FC<modalInterface> = (ModalProps) => {
  return ModalProps.isShowing
    ? ReactDOM.createPortal(
        <div className="row modal-overlay justify-content-center" tabIndex={-1}>
          <div className="modalContent justify-content-center">
            <h2 className="subPageTitleH">Nueva Empresa</h2>
            <button
              type="button"
              data-dismiss="modal"
              aria-label="Close"
              onClick={ModalProps.toggle}
              className="modalClose"
            >
              Cancelar
            </button>
            {React.createElement(empresaForm, ModalProps)}
          </div>
        </div>,
        document.body
      )
    : null;
};

export default Modal;
