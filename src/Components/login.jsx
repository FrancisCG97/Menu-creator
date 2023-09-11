// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import { logInWithEmail } from "../lib/auth";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();
    const registerWithEmail = () => {
        navigate('/RegisterPage');
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                navigate("/home")
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
    }

    return (
        <>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div id="login-container" className="container">
                    <p> Iniciar sesión </p>
                </div>
            </div>

            <form id="info-inputs">
                <div className="col-10 col-sm-10 col-md-8 col-lg-6 col-xl-6">
                    <label className="form-label"> Correo electrónico </label>
                    <input type="email" className="form-control" placeholder="..." id="email" onChange={(e) => setEmail(e.target.value)}></input>
                    <label className="form-label"> Contraseña </label>
                    <input type="password" className="form-control" placeholder="..." id="password" onChange={(e) => setPassword(e.target.value)}></input>
                </div>

                <div id="log-btns" className="col-11 col-sm-11 col-md-6 col-lg-5 col-xl-4">
                    <button id="logInWithEmail" className="btn" type="submit" onClick={onLogin} > Iniciar sesión </button>
                    <button id="logInWithGoogle" className="btn" type="submit"><img src="src/Images/logo-google.png"></img>Iniciar sesión con Google </button>
                </div>
            </form>

            <div id="register-container" className="container">
                <div className="col-10 col-sm-10 col-md-6 col-lg-5 col-xl-5">
                    <br></br>
                    <h1> ¿No tienes cuenta? </h1>
                    <h1> ¡Regístrate! </h1>
                    <button id="register-email" className="btn" type="submit" onClick={() => registerWithEmail}> Registrarme con correo </button>
                    <button id="register-google" className="btn" type="submit"> Registrarme con Google </button>
                </div>
            </div>
        </>
    )
}

export default Login;