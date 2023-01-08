import React from "react";
import "./PDFView.scss";
import PDFile from "../../asets/pdf/cuestionario.pdf";
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
//


export const PDFView = () =>{
    return(
        <div className="principal">
            <Modal isOpen className="pdf">{/**Estado "isOpen para cambiar" */}
                <ModalHeader>
                    <h1>Conoce el instrumento de evaluación.</h1>
                </ModalHeader>
                <ModalBody>
                    <object type="application/pdf" data={PDFile} className="pdf"/>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default PDFView;