import React from "react";
import "./PDFView.scss";
import PDFile from "../../asets/pdf/cuestionario.pdf";
import crossIcon from "../../asets/cross.png"

export const PDFView = (props) =>{
    const{fun, state}=props;

    return(
        
        <div className="principal-pdf">
            <div className="header-pdf">
                <p id="header">Modal</p>
                <p id="cross" onClick={()=>fun(state)}><img src={crossIcon} width="25px"/></p>
            </div>
           {/*  <object type="application/pdf" data={PDFile} className="pdf"/>  */}
            {/* <embed src={PDFile}  width="800px" height="200px" type="application/pdf" /> */}
            <iframe id="iframepdf" zoomin="20" src={PDFile}></iframe>
        </div>
    );
}

export default PDFView;