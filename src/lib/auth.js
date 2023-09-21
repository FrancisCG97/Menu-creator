/* eslint-disable no-unused-vars */
import {
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
} from 'firebase/auth';

import {
    auth,
} from './firebase';

// // REGISTRO CORREO Y CONTRASEÑA
// export function regWithEmail(newEmailAccount) {
//     const newAccount = (email, password, errorElement) => {
//         if (email === '' && password === '') {
//             errorElement.textContent = 'Ingrese correo electrónico y contraseña';
//         } else if (email === '') {
//             errorElement.textContent = 'Ingrese un correo electrónico';
//         } else if (password === '') {
//             errorElement.textContent = 'Ingrese una contraseña.';
//         } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
//             errorElement.textContent = 'Ingrese un correo válido.';
//         } else {
//             createUserWithEmailAndPassword(auth, email, password)
//                 .then((userCredential) => {
//                     // Signed in
//                     const user = userCredential.user;
//                     // eslint-disable-next-line no-console
//                     console.log(user);
//                 })
//                 .catch((error) => {
//                     const errorCode = error.code;
//                     // const errorMessage = error.message;
//                     if (errorCode === 'auth/email-already-in-use') {
//                         errorElement.textContent = 'El correo ya está en uso.';
//                     } else if (errorCode === 'auth/invalid-password') {
//                         errorElement.textContent = 'La contraseña debe tener al menos 6 caracteres';
//                     } else {
//                         errorElement.textContent = 'Ocurrió un error durante el registro.';
//                     }
//                 });
//         }
//     }
//     console.log(newEmailAccount);
// }

//  REGISTRO Y LOGIN GOOGLE
export function accessGoogle(inWithGoogle) {
    const accessWithGoogle = (navigateTo) => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                console.log(credential);
                navigateTo('/wall');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log('error signing up with Google');
                // ...
            });
    }
}


//  LOGIN CORREO Y CONTRASEÑA
export function logWithEmail(loginEmailPass) {
    const logInWithEmail = (email, password, errorELogin) => new Promise((resolve, reject) => {
        if (email === '' && password === '') {
            errorELogin.textContent = 'Ingrese correo electrónico y contraseña';
            reject(new Error('Invalid input'));
        } else {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    resolve(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    if (errorCode === 'auth/user-not-found') {
                        errorELogin.textContent = 'El correo no está registrado.';
                    } else if (errorCode === 'auth/wrong-password') {
                        errorELogin.textContent = 'Contraseña incorrecta.';
                    } else if (errorCode === 'auth/invalid-email') {
                        errorELogin.textContent = 'Ingrese un correo electrónico válido.';
                    } else {
                        errorELogin.textContent = 'Ocurrió un error al intentar iniciar sesión.';
                    }
                    reject(new Error(errorMessage));
                });
        }
    })
}
