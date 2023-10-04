/* eslint-disable no-unused-vars */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import React from 'react';
import { auth } from "../lib/firebase";
import {
    getAuth,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";


export default function Register() {

    const auth = getAuth();
    const navigate = useNavigate();

    //REGISTRO CON CORREO Y CONTRASEÑA
    const newAccount = (email, password) => {

        const emailInput = document.getElementById('email').value;
        const passInput = document.getElementById('password').value;

        if (emailInput.length === 0 && passInput.length === 0) {
            toast.error('Ingrese un correo electrónico y contraseña');
        } else if (emailInput.length === 0) {
            toast.error('Ingrese un correo electrónico');
        } else if (passInput.length === 0) {
            toast.error('Ingrese una contraseña');
        } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(emailInput)) {
            toast.error('Ingrese un correo electrónico válido');
        } else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // ...
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    if (errorCode === 'auth/email-already-in-use') {
                        toast.error('El correo ya está en uso.');
                    } else if (errorCode === 'auth/invalid-password') {
                        toast.error('La contraseña debe tener al menos 6 caracteres');
                    } else {
                        toast.error('Ocurrió un error durante el registro.');
                    }
                    // ..
                });
        }
    }

    //REGISTRO CON GOOGLE -REDIRECT-
    const accessWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
          .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            console.log(credential);
            navigate('/Wall');
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log('error signing up with Google');
            // ...
          });
      };


    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                closeOnClick
                theme="dark"
            />
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
                        <button onClick={newAccount} id="registerWithEmail" className="btn"> Registrarse con correo electrónico </button>
                        <button onClick={accessWithGoogle} id="registerWithGoogle" className="btn"><img src="src/Images/logo-google.png"></img> Registrarse con Google </button>
                    </div>
                </form>
            </div>


        </>
    )
}

// export default Register;