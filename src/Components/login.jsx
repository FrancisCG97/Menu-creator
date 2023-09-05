import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import { logInWithEmail } from "../lib/auth";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Login() {

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
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <div id="login-container" className="container">
                        <p> Iniciar sesión </p>
                    </div>
                </div>
                <form id="info-inputs" className="col-8 col-sm-6 col-md-12 col-lg-12 col-xl-12">
                    <div id="inputs" className="col-10 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                        <label className="form-label"> Correo electrónico </label>
                        <input type="email" className="form-control" placeholder="..." id="email" onChange={(e) => setEmail(e.target.value)}></input>
                        <label className="form-label"> Contraseña </label>
                        <input type="password" className="form-control" placeholder="..." id="password" onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <button id="logInWithEmail" className="btn" type="submit" onClick={onLogin} > Iniciar sesión </button>
                    <button id="logInWithGoogle" className="btn" type="submit"> Iniciar sesión con Google </button>
                </form>
                <div id="register-container" className="container">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <h1> ¿No tienes cuenta? </h1>
                        <h1> ¡Regístrate! </h1>
                        <button id="register" className="btn" type="submit" onClick={() => registerWithEmail}> Registrarme </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;