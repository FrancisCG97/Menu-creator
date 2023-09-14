/* eslint-disable no-unused-vars */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from 'react';
import { regWithEmail } from "../lib/auth";
import { accessGoogle } from "../lib/auth";
import { logWithEmail } from "../lib/auth";


const Register = () => {

    // const resultado = miFuncion('Hola desde MiComponente');

    return (
        <>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div id="reg-container" className="container">
                    <p> Registrarse </p>
                </div>
                <form id="register-inputs">
                    <div className="col-10 col-sm-10 col-md-8 col-lg-6 col-xl-6">
                        <label className="form-label"> Correo electrónico </label>
                        <input type="email" className="form-control" placeholder="..." id="email"></input>
                        <label className="form-label"> Contraseña </label>
                        <input type="password" className="form-control" placeholder="..." id="password"></input>
                    </div>
                    <div id="log-btns" className="col-11 col-sm-11 col-md-6 col-lg-5 col-xl-4">
                        <button id="registerWithEmail" className="btn" type="submit"> Registrarse con correo electrónico </button>
                        <button id="registerWithGoogle" className="btn" type="submit"><img src="src/Images/logo-google.png"></img> Registrarse con Google </button>
                    </div>
                </form>
            </div>


        </>
    )
}

export default Register;