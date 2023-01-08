import React from "react";
import "./PDFView.scss";
import PDFile from "../../asets/pdf/cuestionario.pdf";
export const PDFView = () =>{
    return(
        <div className="principal">
            <object type="application/pdf" data={PDFile /**Aquí el archivo */} className="pdf"/>
        </div>
    );
}

export default PDFView;