import React from 'react'
import './Home.css'
import { signOut } from 'firebase/auth'
import {database} from '../Config/FirebaseConfig'
import { useNavigate } from 'react-router-dom' // used for navigation to different pages 

function Home() {
    const history = useNavigate()
    // we create a button to signout too 
    const handleClick = ()=>{
        signOut(database) // we pass database value here 
        .then(value=>{
            console.log(value);
            history('/');
        })
    }
    return (
        <div className='main-div'>
            <div className='container'>
                <h1>Welcome Home</h1>
                <button onClick={handleClick}>Logout </button>
            </div>
        </div>

    )
}

export default Home
