/* eslint-disable no-unused-vars */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useState } from "react";
import jsPDF from 'jspdf';

function Generator() {

    const [inputValue, setInputValue] = useState('');
    const [pdfContent, setPdfContent] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    console.log("funciona input value");

    const generatePDF = () => {
        const doc = new jsPDF();
        doc.text(inputValue, 10, 10);
        setPdfContent(doc.output('dataurlstring'));
    };

    console.log("funciona generador");




    return (
        <>
            <div id="pdf" className="container">
                <div className="row">
                    <div id="pdf-container" className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <nav className="navbar">
                            <div id="nav-container" className="container">
                                <h1 id="pdf-title" className="navbar-brand"> Aquí está tu menú ⬇ </h1>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

            <section id="info-inputs" className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <h5> Opción 1: </h5>
                <div id="option" className="input-group">
                    <input id="option1-input" value={inputValue} onChange={handleInputChange} type="text" className="form-control" placeholder="..." aria-label="Username" aria-describedby="basic-addon1"></input>
                    {/* <button onClick={ getOptions } className="btn" type="reset" id="clean-option"> A </button>
                    <button className="btn" type="button" id="clean-option"> X </button> */}
                </div>
                <h5> Opción 2: </h5>
                <div id="option" className="input-group">
                    <input id="option2-input" type="text" className="form-control" placeholder="..." aria-label="Username" aria-describedby="basic-addon1"></input>
                    {/* <button className="btn" type="button" id="clean-option"> X </button> */}
                </div>
                <h5> Opción 3: </h5>
                <div id="option" className="input-group">
                    <input id="option3-input" type="text" className="form-control" placeholder="..." aria-label="Username" aria-describedby="basic-addon1"></input>
                    {/* <button className="btn" type="button" id="clean-option"> X </button> */}
                </div>
                <h5> Opción 4: </h5>
                <div id="option" className="input-group">
                    <input id="option4-input" type="text" className="form-control" placeholder="..." aria-label="Username" aria-describedby="basic-addon1"></input>
                    {/* <button className="btn" type="button" id="clean-option"> X </button> */}
                </div>
            </section>

            <section id="menu-btn" className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div id="add-see">
                    <button id="add-see-btn" type="button" className="btn"> Agregar otra opción </button>
                    <button onClick={generatePDF} id="add-see-btn" type="button" className="btn"> Visualizar mi menú en PDF </button>
                </div>
                <div id="clean">
                    <button id="clean-btn" type="button" className="btn"> Limpiar todas las opciones </button>
                </div>
                {pdfContent && (
                    <div>
                        <h2>PDF generado:</h2>
                        <iframe
                            title="PDF Preview"
                            width="100%"
                            height="500px"
                            src={pdfContent}
                        />
                    </div>
                )}

            </section>

        </>
    )
}

export default Generator;
