import React, { useState } from 'react'
import { database } from "../Config/FirebaseConfig" // import the const database where we have used auth
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth" // import the method by which you will create user using email and password 
import { useNavigate } from 'react-router-dom'

function RegisterAndLogin() {
    //let's use hooks..
    const [login, setLogin] = useState(false)
    const [error, setError] = useState(false);
    const [googleErrorMessage, setGoogleErrorMessage] = useState("");
    // to navigate to other pages after we are done with login
    const history = useNavigate() // useNavigate() method is used 
    const handleSubmit = (e, type) => {
        e.preventDefault()
        // console.log(e.target.email.value) //Syntax for accessing value of the email

        // store the email and password in a const to access their values 
        const email = e.target.email.value;
        const password = e.target.password.value;

        // now use the method of createuserwithemailandpassword
        if (type == 'signup') {
            createUserWithEmailAndPassword(database, email, password) // pass three values database const , email and password 
                .then(data => {
                    console.log(data, "AuthData")
                    history('/home')
                }).catch(err => {
                    alert(err.code) // to display the error if anything goes wrong 
                })
        } else {
            signInWithEmailAndPassword(database, email, password)
                .then(data => {
                    console.log(data);
                    history('/home');
                }).catch(err => {
                    alert(err.code) // to display the error if anything goes wrong 
                })
        }
    }
    // Doing GoogleAuth Sign-In
    const handleGoogleSignUp = (e) => {
        e.preventDefault();
        const provider = new GoogleAuthProvider();
        signInWithPopup(database, provider).then(dat => {
            console.log(dat);
            history('/home') // redirecting to Home page
        })
        .catch (err=>{
            alert(err.code)
        })
    }
    return (
        <div>
            {/* Registration and login Screen */}
            <h1>{login ? 'signin' : 'signup'}</h1> {/*used ternary operator for true:false cases  */}
            <form onSubmit={(e) => handleSubmit(e, login ? 'signin' : 'signup')}>
                <input name='email' placeholder='Enter your Email-ID' />
                <input name='password' type='password' placeholder='Enter your Password' />
                <button>{login ? 'LogIn' : 'SignUp'}</button>
            </form>
            <div>already have an account ?
                <button onClick={() => setLogin(true)}> SignIn</button>
            </div>
            <button onClick={handleGoogleSignUp}>
                Sign Up with Google
            </button>
        </div>
    )
}

export default RegisterAndLogin
