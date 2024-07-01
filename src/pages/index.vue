<template>

    <body>
        <div class="container">

            <input type="checkbox" id="flip" />

            <div class="cover">

                <div class="front">
                    <img src="./img/login/frontImg.png" alt="" />

                    <div class="text"></div>

                </div>

                <div class="back">

                    <img class="backImg" src="./img/login/frontImg.png" alt="" />

                    <div class="text">

                        <span class="text-1">
                            Complete miles of journey
                            <br />
                            with one step
                        </span>

                        <span class="text-2">
                            Let's get started
                        </span>

                    </div>

                </div>

            </div>

            <div class="forms">

                <div class="form-content">

                    <div class="login-form">

                        <div class="title">Protocolos Médicos</div>

                        <form action="#">

                            <div class="input-boxes">

                                <div class="input-box">

                                    <i class="fas fa-envelope"></i>

                                    <input id="userEmail" type="text" placeholder="Usuário" required />

                                </div>

                                <div class="input-box">

                                    <i class="fas fa-lock"></i>

                                    <input id="userPassword" type="password" placeholder="Senha" required />

                                </div>

                                <div class="button input-box">

                                    <input type="submit" value="Entrar" id="signIn" />

                                </div>

                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </div>

    </body>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}

body {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #082819;
    padding: 30px;
}

.container {
    position: relative;
    max-width: 850px;
    width: 100%;
    background: #fff;
    padding: 40px 30px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    perspective: 2700px;
}

.container .cover {
    position: absolute;
    top: 0;
    left: 50%;
    height: 100%;
    width: 50%;
    z-index: 98;
    transition: all 1s ease;
    transform-origin: left;
    transform-style: preserve-3d;
}

.container #flip:checked~.cover {
    transform: rotateY(-180deg);
}

.container .cover .front,
.container .cover .back {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
}

.cover .back {
    transform: rotateY(180deg);
    backface-visibility: hidden;
}

.container .cover::before,
.container .cover::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background: #082819;
    opacity: 0.5;
    z-index: 12;
}

.container .cover::after {
    opacity: 0.3;
    transform: rotateY(180deg);
    backface-visibility: hidden;
}

.container .cover img {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: 10;
}

.container .cover .text {
    position: absolute;
    z-index: 130;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.cover .text .text-1,
.cover .text .text-2 {
    font-size: 26px;
    font-weight: 600;
    color: #fff;
    text-align: center;
}

.cover .text .text-2 {
    font-size: 15px;
    font-weight: 500;
}

.container .forms {
    height: 100%;
    width: 100%;
    background: #fff;
}

.container .form-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4rem 0;
}

.form-content .login-form,
.form-content .signup-form {
    width: calc(100% / 2 - 25px);
}

.forms .form-content .title {
    position: relative;
    font-size: 24px;
    font-weight: 500;
    color: #333;
}

.forms .form-content .title:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 25px;
    background: #082819;
}

.forms .signup-form .title:before {
    width: 20px;
}

.forms .form-content .input-boxes {
    margin-top: 30px;
}

.forms .form-content .input-box {
    display: flex;
    align-items: center;
    height: 50px;
    width: 100%;
    margin: 10px 0;
    position: relative;
}

.form-content .input-box input {
    height: 100%;
    width: 100%;
    outline: none;
    border: none;
    padding: 0 30px;
    font-size: 16px;
    font-weight: 500;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
}

.form-content .input-box input:focus,
.form-content .input-box input:valid {
    border-color: #082819;
}

.form-content .input-box i {
    position: absolute;
    color: #082819;
    font-size: 17px;
}

.forms .form-content .text {
    font-size: 14px;
    font-weight: 500;
    color: #333;
}

.forms .form-content .text a {
    text-decoration: none;
}

.forms .form-content .text a:hover {
    text-decoration: underline;
}

.forms .form-content .button {
    color: #fff;
    margin-top: 40px;
}

.forms .form-content .button input {
    color: #fff;
    background: #082819;
    border-radius: 6px;
    padding: 0;
    cursor: pointer;
    transition: all 0.4s ease;
}

.forms .form-content .button input:hover {
    background: #082819;
}

.forms .form-content label {
    color: #082819;
    cursor: pointer;
}

.forms .form-content label:hover {
    text-decoration: underline;
}

.forms .form-content .login-text,
.forms .form-content .sign-up-text {
    text-align: center;
    margin-top: 25px;
}

.container #flip {
    display: none;
}

@media (max-width: 730px) {
    .container .cover {
        display: none;
    }

    .form-content .login-form,
    .form-content .signup-form {
        width: 100%;
    }

    .form-content .signup-form {
        display: none;
    }

    .container #flip:checked~.forms .signup-form {
        display: block;
    }

    .container #flip:checked~.forms .login-form {
        display: none;
    }
}
</style>

<!-- <script type="module">
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut

} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCc7nZHSXNzJsblxRX7Pti7QTY_NI4mPCY",
    authDomain: "teste-2ecc3.firebaseapp.com",
    projectId: "teste-2ecc3",
    storageBucket: "teste-2ecc3.appspot.com",
    messagingSenderId: "174418788668",
    appId: "1:174418788668:web:05b0ccfb941499f7181e39",
    measurementId: "G-LTHV8567EZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const userEmail = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");
const authForm = document.querySelector(".forms");
const signInButton = document.querySelector("#signIn");

const userSignIn = async () => {
    const signInEmail = userEmail.value;
    const signInPassword = userPassword.value;

    signInWithEmailAndPassword(auth, signInEmail, signInPassword)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
            window.location.href = "./html/pagina_instalar_app.html";
            alert("Login realizado!")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + errorMessage)
            alert("Usuário ou senha não encontrado")
        })
}

signIn.addEventListener('click', userSignIn);

</script> -->